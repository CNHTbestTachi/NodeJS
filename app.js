const express = require('express');
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', categoryRoutes);

module.exports = app;
