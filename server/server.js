const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const userController = require('./user/userController');
const cookieController = require('./util/cookieController');
const sessionController = require('./session/sessionController');
const bookController = require('./books/bookController');

const app = express();

const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/projecttest' : 'mongodb://localhost/projectdev';
mongoose.connect(mongoURI);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('client'));

// Routes
app.get('/', (req, res) => {
  res.render('./../client/index');
});

app.get('/signup', (req, res) => {
  res.render('./../client/signup', { error: null });
});

app.post('/signup', userController.createUser, cookieController.setSSIDCookie, sessionController.startSession);

app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession);

app.use(bodyParser.json());

app.get('/home/:username', sessionController.isLoggedIn, userController.showHome);

app.get('/mybooks', bookController.getBooks);

app.post('/postBook', bookController.updateBooks);

app.listen(3000);

module.exports = app;
