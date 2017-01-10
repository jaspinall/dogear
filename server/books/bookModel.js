const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creates a book schema in the database
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  pages: { type: Number, required: true },
  status: { type: String, required: true, default: 'Not Started' },
  genre: { type: String },
  image: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
});

module.exports = mongoose.model('Book', bookSchema);
