const pool = require('../config/database');

exports.createBook = async (title, author, categoryId) => {
    const result = await pool.query('INSERT INTO books (title, author, category_id) VALUES ($1, $2, $3) RETURNING *', [title, author, categoryId]);
    return result.rows[0];
};

exports.getAllBooks = async () => {
    const result = await pool.query('SELECT * FROM books');
    return result.rows;
};

exports.getBookById = async (id) => {
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    return result.rows[0];
};

exports.deleteBookById = async (id) => {
    await pool.query('DELETE FROM books WHERE id = $1', [id]);
};
