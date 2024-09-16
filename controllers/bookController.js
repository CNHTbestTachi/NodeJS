const Book = require('../models/book');

exports.addBook = async (req, res) => {
    const {name_book, title, author, description,categoryId } = req.body;
    try {
        const book = await Book.create(name_book, title, author, description,categoryId);
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({ message: 'Error adding book' });
    }
};

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving books' });
    }
};

exports.getBookDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving book' });
    }
};

exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        await Book.delete(id);
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ message: 'Error deleting book' });
    }
};
