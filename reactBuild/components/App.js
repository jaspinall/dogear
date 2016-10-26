import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import Book from './Book';
import Form from './Form';

let username = null;
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
    // this.createBook = this.createBook.bind(this);
    this.state = {
      username: null,
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
    let key = event.target.id;
    let val = event.target.value;
    this.setState(
      { [key]: val }
    );
  }

  componentDidMount() {
    fetchBooks().then((userData) => {
      userData.books.forEach((book) => {
        if (book.status == "In Progress") {
          currentBooks.push(book);
        } else {
          finishedBooks.push(book);
        }
      });

      this.setState(Object.assign(
        this.state, {
          username: username,
          currentBooks: currentBooks,
          finishedBooks: finishedBooks
        }
      ));
    })
  }



  render() {

    const curBooksDivs = [];
    this.state.currentBooks.forEach((book) => {
      curBooksDivs.push(<Book title={book.title} author={book.author} pages={book.pages} />);
    });

    const finBooksDivs = [];
    this.state.finishedBooks.forEach((book) => {
      finBooksDivs.push(<Book title={book.title} author={book.author} pages={book.pages} />);
    });

    return (
      <div id="main">
        <h1>Add Book</h1>
        <Form title={this.state.newTitle} author={this.state.newAuthor} pages={this.state.newPages} genre={this.state.newGenre} updateForm={this.updateForm}/>

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
