const express = require('express');
const app = express();
require('dotenv').config();  // Load environment variables

// Import Routes
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Middleware for parsing JSON bodies
app.use(express.json());

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/categories', categoryRoutes);


// Root Route
app.get('/', (req, res) => {
    res.send('API is running...');
});


module.exports = app;
