const pool = require('../config/database');

exports.createCategory = async (name) => {
    const result = await pool.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', [name]);
    return result.rows[0];
};

exports.getAllCategories = async () => {
    const result = await pool.query('SELECT * FROM categories');
    return result.rows;
};

exports.deleteCategoryById = async (id) => {
    await pool.query('DELETE FROM categories WHERE id = $1', [id]);
};
