const express = require('express');
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Middleware for parsing JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', categoryRoutes);

// Root Route to avoid "Cannot GET /" error
app.get('/', (req, res) => {
    res.send('API is running...');
});

module.exports = app;
