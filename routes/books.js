const express = require('express');
const router = express.Router();
const { addBook } = require('../controllers/addBook'); // adjust path if needed

router.post('/add', addBook); // <--- THIS handles /books/add POST

module.exports = router;
