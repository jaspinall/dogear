'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');
const salt = 10;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  books: { type: Array, default: []}
});

userSchema.pre('save', function (next) {
  let user = this;
  user.password = bcrypt.hashSync(user.password, salt);
  next();
});

userSchema.methods.verify = function (password) {
  let functionRun = bcrypt.compareSync(password, this.password);
  return functionRun;
}

module.exports = mongoose.model('User', userSchema);
