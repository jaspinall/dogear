'use strict';

const User = require('./userModel');
const cookieController = require('./../util/cookieController');
const sessionController = require('./../session/sessionController');
const bookController = require('./../books/bookController');
const userController = {};

userController.getAllUsers = (next) => {
  User.find({}, next);
};

userController.createUser = (req, res, next) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password
  };
  User.create(newUser, (err, user) => {
    if (err) {
      res.render('./../client/signup', { error: err });
      res.end();
    } else {
      req.body.id = user._id;
      next();
    }
  });

};

userController.verifyUser = (req, res, next) => {
  const inputUser = {
    username: req.body.username,
    password: req.body.password
  };
  User.findOne({ username: inputUser.username }, (err, user) => {
    if (err) {
      res.redirect('/signup');
    }
    if (user) {
      let result = user.verify(inputUser.password);
      if (result) {
        req.body.id = user._id;
        next();
      } else {
        res.redirect('/signup');
      }
    } else {
      res.redirect('/signup');
    }
  });
};

userController.showHome = (req, res, next) => {
  var username = req.params.username;
  User.findOne( { username: username}, (err, user) => {
    if (err) {
      res.render('./../client/signup', { error: err });
      res.end();
    } else {
      const username = user.username;
      res.render('./../client/home')
      next();
    }
  })
}

module.exports = userController;
