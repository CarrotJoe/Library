const express = require('express');

const { addBookByISBN } = require('../controllers/addBookISBN');

router.post('/books/add-by-isbn', addBookByISBN);

module.exports = router;
