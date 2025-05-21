const express = require('express');
const router = express.Router();

const addBook = require('../controllers/addBook').addBook;
const fetchBooks = require('../controllers/fetchBooks');
const addBookByISBN = require('../controllers/addBookISBN').addBookByISBN;
const toggleCheckout = require('../controllers/toggleCheckout');

router.post('/add', addBook);
router.get('/fetch', fetchBooks);
router.post('/add-by-isbn', addBookByISBN);
router.patch('/:id/toggle-checkout', toggleCheckout);


module.exports = router;
