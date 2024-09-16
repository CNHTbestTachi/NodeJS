const express = require('express');
const { addCategory, getCategories, deleteCategory } = require('../controllers/categoryController');
const router = express.Router();

router.post('/categories', addCategory);
router.get('/categories', getCategories);
router.delete('/categories/:id', deleteCategory);

module.exports = router;
