const express = require('express');
const { addBook, getBooks, getBookDetail, deleteBook } = require('../controllers/bookController');
const router = express.Router();

router.post('/add-books', addBook);
router.get('/get-books-list', getBooks);
router.get('/get-books-detail/:id', getBookDetail);
router.delete('/delete-books/:id', deleteBook);

module.exports = router;
