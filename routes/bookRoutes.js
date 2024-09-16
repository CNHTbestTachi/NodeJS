const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

router.post('/book', bookController.addBook);
router.get('/books', bookController.getBooks);
router.get('/book/:id', bookController.getBookDetail);
router.delete('/book/:id', bookController.deleteBook);

module.exports = router;
