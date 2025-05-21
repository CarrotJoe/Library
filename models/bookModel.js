const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true }, // <- this must match
  author: String,
  genres: [String],
  pages: Number,
  owner: String,
  isbn: String,
  checkedOut: { type: Boolean, default: false }
});


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;