const Book = require('./bookModel');
const User = require('../user/userModel');

const bookController = {};

/* Fetches book list for a user based on the id stored in the cookie
after successful login or initial signup */
bookController.getBooks = (req, res) => {
  const id = req.cookies.ssid;
  User.findOne({ _id: id }, (err, user) => {
    if (err) {
      res.render('./../client/signup', { error: err });
      res.end();
    } else {
      res.json(user);
    }
  });
};

// Adds a book to a user's booklist in the database upon form submission
bookController.updateBooks = (req, res) => {
  const id = req.cookies.ssid;
  User.findOne({ _id: id }, (err, user) => {
    if (err) {
      res.render('./../client/signup', { error: err });
      res.end();
    } else {
      const curBooks = user.books;
      Book.create({ title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        pages: req.body.pages,
        image: req.body.image,
        startDate: Date.now() },
        (error, newBook) => {
          if (error) {
            res.json('error');
          } else {
            const newBookList = [...curBooks, newBook];
            user.update({ $set: { books: newBookList } }, (er) => {
              if (er) {
                console.log('error');
              }
            });
          }
        });
      res.json('success');
    }
  });
};


module.exports = bookController;
