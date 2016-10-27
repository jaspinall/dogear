import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import Book from './Book';
import BookCompleted from './BookCompleted';
import Form from './Form';

let currentBooks = [];
let finishedBooks = [];

//Returns a promise object with user data
function fetchBooks() {
  return fetch('/mybooks', { credentials: 'include'})
    .then(response => response.json())
  }

class App extends Component {
  constructor(props) {
    super(props);
    this.updateForm = this.updateForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.state = {
      currentBooks: [],
      finishedBooks: [],
      newTitle: "",
      newAuthor: "",
      newPages: "",
      newGenre: ""
    }
  }

  updateForm(event) {
    let key = event.target.id;
    let val = event.target.value;
    this.setState(
      { [key]: val }
    );
  }

  submitForm(event) {

    const book =
    { title: this.state.newTitle,
      author: this.state.newAuthor,
      pages: Number(this.state.newPages),
      genre: this.state.newGenre
    };

    fetch('/postBook',
      {
        method: 'POST',
        credentials: 'include',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      }).then(response => response.json())
      .then((userData) => {
        let newBooks = this.state.currentBooks;
        newBooks.unshift(book);

    this.setState(
      { newTitle: "",
        newAuthor: "",
        newPages: "",
        newGenre: "",
        currentBooks: newBooks
      })
    });
  }

  markComplete(event) {

  }

  componentDidMount() {
    fetchBooks().then((userData) => {
      console.log(userData._id);
      userData.books.forEach((book) => {
        if (book.status == "In Progress") {
          currentBooks.push(book);
        } else {
          finishedBooks.push(book);
        }
      });

      this.setState(Object.assign(
        this.state, {
          currentBooks: currentBooks,
          finishedBooks: finishedBooks
        }
      ));
    })
  }



  render() {

    const curBooksDivs = [];
    this.state.currentBooks.forEach((book, i) => {
      let days;
      if (book.startDate === undefined) {
        days = 0;
      } else {
        days = Math.round((Date.now()-book.startDate)/(1000*60*60*24));
      }
      curBooksDivs.push(<Book title={book.title} author={book.author} pages={book.pages} genre={book.genre} id={i} days={days} markComplete={this.state.markComplete}/>);
    });

    const finBooksDivs = [];
    this.state.finishedBooks.forEach((book, i) => {
      finBooksDivs.push(<BookCompleted title={book.title} author={book.author} pages={book.pages} genre={book.genre}/>);
    });

    return (
      <div id="main">
        <Form title={this.state.newTitle} author={this.state.newAuthor} pages={this.state.newPages} genre={this.state.newGenre} updateForm={this.updateForm} submitForm={this.submitForm}/>

        <div id="current">
          <h1>Currently Reading</h1>
          {curBooksDivs}
        </div>

        <div id="finished">
          <h1>Read Earlier This Year</h1>
          {finBooksDivs}
        </div>
      </div>
    )
  }

}

export default App;
