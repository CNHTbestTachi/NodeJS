const categoryModel = require('../models/categoryModel');

exports.addCategory = async (req, res) => {
    const { name } = req.body;
    const category = await categoryModel.createCategory(name);
    res.json({ message: 'Category added', category });
};

exports.getCategories = async (req, res) => {
    const categories = await categoryModel.getAllCategories();
    res.json(categories);
};

exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    await categoryModel.deleteCategoryById(id);
    res.json({ message: 'Category deleted' });
};
