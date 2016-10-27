'use strict';

const Session = require('./sessionModel');
const User = require('../user/userModel');

const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
  if (req.cookies.ssid) {
    next();
  } else {
    res.redirect('/signup');
  }
};

sessionController.startSession = (req, res, next) => {
  let username = req.body.username;
  Session.create({ cookieId: req.cookies.ssid });
  console.log('startsession');
  res.redirect(`/home/${username}`)
};

module.exports = sessionController;
