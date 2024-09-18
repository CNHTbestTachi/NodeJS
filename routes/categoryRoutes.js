const express = require('express');
const { addCategory, getCategories, deleteCategory } = require('../controllers/categoryController');
const router = express.Router();

router.post('/add-categories', addCategory);
router.get('/get-categories', getCategories);
router.delete('/delete-categories/:id', deleteCategory);

module.exports = router;
