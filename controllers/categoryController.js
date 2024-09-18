const Category = require('../models/category');

exports.addCategory = async (req, res) => {
    const { category_name } = req.body;
    try {
        const category = await Category.create(category_name);
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ message: 'Error adding category' });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving categories' });
    }
};

exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        await Category.delete(id);
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ message: 'Error deleting category' });
    }
};
