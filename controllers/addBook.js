const Book = require('../models/bookModel');


function addBook(req, res) {
    const { name, genre, owner } = req.body;  // destructuring form fields
  
    const newBook = new Book({ name, genre, owner });
  
    newBook.save()
      .then(() => {
        console.log('Book added');
        res.send('Book added successfully');
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error saving book');
      });
  }
  
  module.exports = { addBook };