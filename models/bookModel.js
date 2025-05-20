const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: [String], // Supports multiple genres
    owner: String,
    isbn: String
  });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;