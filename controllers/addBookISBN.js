const axios = require('axios');
const Book = require('../models/bookModel');  

async function addBookByISBN(req, res) {
    try {
      const { isbn, owner, genres } = req.body;
  
      if (!isbn || !owner || !genres || !genres.length) {
        return res.status(400).json({ error: "ISBN, owner, and at least one genre are required." });
      }
  
      const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
      let response;
      try {
        response = await axios.get(url);
        console.log("Open Library response received");
      } catch (fetchError) {
        console.error("Open Library fetch error:", fetchError);
        return res.status(502).json({ error: "Failed to fetch book data from Open Library." });
      }
  
      const bookData = response.data[`ISBN:${isbn}`];
      if (!bookData) {
        return res.status(404).json({ error: "Book not found in Open Library." });
      }
      console.log("Book data:", bookData);
  
      // Extract data safely
      const name = bookData.title || "Unknown Title";
      const author = bookData.authors ? bookData.authors.map(a => a.name).join(", ") : "Unknown Author";
      const pages = bookData.number_of_pages || null;
  
      // fetch book info from Open Library as before...
  
      const newBook = new Book({
        name,
        author,
        genres,    // <-- use the array sent from frontend
        pages,
        owner,
        isbn       // make sure to save ISBN too
      });
  
      await newBook.save();
  
      res.status(201).json({ message: "Book added successfully", book: newBook });
    } catch (error) {
      console.error("Error adding book by ISBN:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  

module.exports = { addBookByISBN };
