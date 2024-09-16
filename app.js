const express = require('express');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', categoryRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
