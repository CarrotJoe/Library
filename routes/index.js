var express = require('express');
var router = express.Router();

const genres = [
  "Fantasy", "Science Fiction", "Romance", "Thriller", "Mystery", "Historical",
  "Horror", "Biography", "Non-Fiction", "Young Adult", "Children", "Adventure",
  "Classic", "Comics", "Drama", "Poetry", "Self-Help"
];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Jellie Family Library',
    genres: genres
  });
});

module.exports = router;
