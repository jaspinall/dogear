const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
const salt = 10;

// Creates a user schema in the database
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  books: { type: Array, default: [] },
});

// Hash a user's password before storing it in the database
userSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, salt);
  next();
});

// Verfify a user's password during a login attempt
userSchema.methods.verify = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
