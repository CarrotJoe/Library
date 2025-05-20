const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String,
  genre: String,
  owner: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;