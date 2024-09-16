const pool = require('../config/database');

const Category = {
    create: async (name) => {
        const result = await pool.query(
            'INSERT INTO categories (name) VALUES ($1) RETURNING *',
            [name]
        );
        return result.rows[0];
    },
    findAll: async () => {
        const result = await pool.query('SELECT * FROM categories');
        return result.rows;
    },
    delete: async (id) => {
        await pool.query('DELETE FROM categories WHERE id = $1', [id]);
    },
};

module.exports = Category;
