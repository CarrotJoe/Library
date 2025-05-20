const Book = require('../models/bookModel');

async function fetchBooks(req, res) {
  try {
    const books = await Book.find(); // fetch all books
    res.json(books);
  } catch (err) {
    console.error('Error fetching books:', err);
    res.status(500).send('Server error');
  }
}

module.exports = fetchBooks;
