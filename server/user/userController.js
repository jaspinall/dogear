const User = require('./userModel');

const userController = {};

// Creates new user in the database upon signup
userController.createUser = (req, res, next) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password,
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

// Verifies a user's credentials upon login
userController.verifyUser = (req, res, next) => {
  const inputUser = {
    username: req.body.username,
    password: req.body.password,
  };
  User.findOne({ username: inputUser.username }, (err, user) => {
    if (user) {
      const result = user.verify(inputUser.password);
      if (result) {
        req.body.id = user._id;
        next();
      }
    } else {
      res.redirect('/signup');
    }
  });
};

// Shows the user the home page if he/she has a cookie
userController.showHome = (req, res) => {
  User.findById(req.cookies.ssid, (err, user) => {
    if (err) {
      res.render('./../client/signup', { error: err });
    } else {
      res.render('./../client/home');
    }
  });
};

module.exports = userController;
