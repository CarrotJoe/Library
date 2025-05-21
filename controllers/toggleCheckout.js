const Book = require('../models/bookModel');

async function toggleCheckout(req, res) {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ error: 'Book not found' });

    book.checkedOut = !book.checkedOut;
    await book.save();

    res.json({ message: 'Book checkout status updated', checkedOut: book.checkedOut });
  } catch (err) {
    console.error('Toggle checkout error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = toggleCheckout;