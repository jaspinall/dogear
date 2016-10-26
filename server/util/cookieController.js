'use strict';

const User = require('../user/userModel');
const sessionController = require('./../session/sessionController');

const cookieController = {};
cookieController.setSSIDCookie = setSSIDCookie;

function setSSIDCookie(req, res, next) {
  res.cookie('ssid', req.body.id, { maxAge: 90000, httpOnly: true});
  next();
}

module.exports = cookieController;
