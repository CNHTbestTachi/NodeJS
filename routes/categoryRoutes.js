const express = require('express');
const categoryController = require('../controllers/categoryController');
const router = express.Router();

router.post('/category', categoryController.addCategory);
router.get('/categories', categoryController.getCategories);
router.delete('/category/:id', categoryController.deleteCategory);

module.exports = router;
