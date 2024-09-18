const pool = require('../config/database');

const Category = {
    create: async (category_name) => {
        const result = await pool.query(
            'INSERT INTO categories (category_name) VALUES ($1) RETURNING *',
            [category_name]
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
