'use strict';

const Book = require('./bookModel');
const User = require('../user/userModel');
const Session = require('../session/sessionModel');

const bookController = {};

bookController.getBooks = (req, res, next) => {
  let id = req.cookies.ssid;
  User.findOne( { _id: id } , (err, user) => {
    if (err) {
      res.render('./../client/signup', { error: err });
      res.end();
    } else {
      res.json(user);
    }
  });
}


bookController.updateBooks = (req, res, next) => {
  let id = req.cookies.ssid;
  User.findOne( { _id: id } , (err, user) => {
    if (err) {
      res.render('./../client/signup', { error: err });
      res.end();
    } else {
      let curBooks = user.books;
      Book.create({title: req.body.title, author: req.body.author, genre: req.body.genre, pages: req.body.pages, startDate: Date.now()}, (err, newBook) => {
        if (err) {
          console.log(err)
        } else {
         curBooks.push(newBook);
         user.books.modified = curBooks;
         user.save((err) => {
          if (err) {
            console.log('error');
          } else {
            console.log('success');
          }
        })
      }
      })
      res.json("success");
    }
  })
};


module.exports = bookController;
