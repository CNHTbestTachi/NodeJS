const app = require('./app');
const pool = require('./config/database');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // Optional: Check if the DB connection works properly
    pool.connect((err, client, release) => {
        if (err) {
            return console.error('Error acquiring client', err.stack);
        }
        console.log('Connected to PostgreSQL');
        release();
    });
});
