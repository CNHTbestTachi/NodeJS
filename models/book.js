const pool = require('../config/database');

const Book = {
    create: async (title, author, categoryId) => {
        const result = await pool.query(
            'INSERT INTO books (title, author, category_id) VALUES ($1, $2, $3) RETURNING *',
            [title, author, categoryId]
        );
        return result.rows[0];
    },
    findAll: async () => {
        const result = await pool.query('SELECT * FROM books');
        return result.rows;
    },
    findById: async (id) => {
        const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
        return result.rows[0];
    },
    delete: async (id) => {
        await pool.query('DELETE FROM books WHERE id = $1', [id]);
    },
};

module.exports = Book;
