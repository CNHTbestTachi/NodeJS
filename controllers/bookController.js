const bookModel = require('../models/bookModel');

exports.addBook = async (req, res) => {
    const {  title, author, categoryId } = req.body;
    const book = await bookModel.createBook( title, author, categoryId);
    res.json({ message: 'Book added', book });
};

exports.getBooks = async (req, res) => {
    const books = await bookModel.getAllBooks();
    res.json(books);
};

exports.getBookDetail = async (req, res) => {
    const { id } = req.params;
    const book = await bookModel.getBookById(id);
    res.json(book);
};

exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    await bookModel.deleteBookById(id);
    res.json({ message: 'Book deleted' });
};
