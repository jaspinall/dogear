import React, { Component } from 'react';
import Book from './Book';
import BookCompleted from './BookCompleted';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateForm = this.updateForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.state = {
      currentBooks: [],
      finishedBooks: [],
      newTitle: '',
      newAuthor: '',
      newPages: '',
      newGenre: '',
    };
  }

  componentDidMount() {
    const currentBooks = [];
    const finishedBooks = [];
    // Fetches the current book list for the authenticated user and displays results.
    fetch('/mybooks', { credentials: 'include' })
      .then(response => response.json())
      .then((userData) => {
      // Iterates through a user's books. Divides them into 'current' or 'finished' based on status
        userData.books.forEach((book) => {
          if (book.status === 'In Progress') {
            currentBooks.push(book);
          } else {
            finishedBooks.push(book);
          }
        });
      // Sets state with books from database to update UI
        this.setState(Object.assign(this.state, { currentBooks, finishedBooks }));
      });
  }

  submitForm() {
    const book = {
      title: this.state.newTitle,
      author: this.state.newAuthor,
      pages: Number(this.state.newPages),
      genre: this.state.newGenre,
    };

    // Adds form data to the database via the 'postbook' route
    fetch('/postBook', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
    .then(response => response.json())
    .then(() => {
      // Updates the UI with the submitted book after it has been stored in the DB
      const newBooks = [...this.state.currentBooks, book];
      this.setState(
        { newTitle: '',
          newAuthor: '',
          newPages: '',
          newGenre: '',
          currentBooks: newBooks,
        });
    });
  }

  // Handles keypress events in the input fields
  updateForm(event) {
    const key = event.target.id;
    const val = event.target.value;
    this.setState(
      { [key]: val },
    );
  }

  render() {
    // Generate array of current book divs
    const curBooksDivs = [];
    this.state.currentBooks.forEach((book, i) => {
      let days;
      if (book.startDate === undefined) {
        days = 0;
      } else {
        days = Math.round((Date.now() - book.startDate) / (1000 * 60 * 60 * 24));
      }
      curBooksDivs.push(
        <Book
          title={book.title}
          author={book.author}
          pages={book.pages}
          genre={book.genre}
          key={`book${i}`}
          id={i}
          days={days}
          markComplete={this.state.markComplete}
        />);
    });

    // Generate array of finished book divs
    const finBooksDivs = [];
    this.state.finishedBooks.forEach((book, i) => {
      finBooksDivs.push(
        <BookCompleted
          title={book.title}
          author={book.author}
          pages={book.pages}
          genre={book.genre}
          key={`bookComplete${i}`}
        />);
    });

    return (
      <div id="main">
        <Form
          title={this.state.newTitle}
          author={this.state.newAuthor}
          pages={this.state.newPages}
          genre={this.state.newGenre}
          updateForm={this.updateForm}
          submitForm={this.submitForm}
        />
        <div id="current">
          <h1>Currently Reading</h1>
          {curBooksDivs}
        </div>
        <div id="finished">
          <h1>Read Earlier This Year</h1>
          {finBooksDivs}
        </div>
      </div>
    );
  }

}

export default App;
