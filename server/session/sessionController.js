const Session = require('./sessionModel');

const sessionController = {};

// If a user attempts to go directly to the homepage, checks whether they have already logged in
sessionController.isLoggedIn = (req, res, next) => {
  if (req.cookies.ssid) {
    next();
  } else {
    res.redirect('/signup');
  }
};

// Creates a session in the database for a new user
sessionController.startSession = (req, res) => {
  const username = req.body.username;
  Session.create({ cookieId: req.body.id }, (err, session) => {
    if (err) {
      res.send('error');
    } else {
      res.redirect(`/home/${username}`);
    }
  })
};

module.exports = sessionController;
