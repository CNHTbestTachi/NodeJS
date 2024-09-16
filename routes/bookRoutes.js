const express = require('express');
const { addBook, getBooks, getBookDetail, deleteBook } = require('../controllers/bookController');
const router = express.Router();

router.post('/books', addBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookDetail);
router.delete('/books/:id', deleteBook);

module.exports = router;
