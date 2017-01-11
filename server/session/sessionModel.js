const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creates a session schema in the database
const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 1000000, default: Date.now },
});

module.exports = mongoose.model('Session', sessionSchema);
