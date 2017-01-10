const cookieController = {};

// Sets cookie in user's browser upon successful signup
cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', req.body.id, { maxAge: 1000000, httpOnly: true });
  next();
};

module.exports = cookieController;
