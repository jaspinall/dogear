const Session = require('./sessionModel');

const sessionController = {};

// If a user attempts to go directly to the homepage, checks whether they have already logged in
sessionController.isLoggedIn = (req, res, next) => {
  if (req.cookies.ssid) {
    res.render('./../client/home');
  } else {
    next();
  }
};

// Creates a session in the database for a new user
sessionController.startSession = (req, res) => {
  Session.update({ cookieId: req.body.id },
    { cookieId: req.body.id },
    { upsert: true }, (err) => {
      if (err) {
        res.send('error');
      } else {
        res.redirect('/');
      }
    });
};

module.exports = sessionController;
