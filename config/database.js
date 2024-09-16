const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bookdb',
    password: 'luongdao',
    port: 5432,
});
const createBooksTable = async () => {
    const query = `
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        published_date DATE,
        pages INT,
        genre VARCHAR(100)
      );
    `;
    try {
      await pool.query(query);
      console.log("Table 'books' created successfully.");
    } catch (err) {
      console.error("Error creating table:", err);
    } finally {
      pool.end();  // Đóng kết nối sau khi hoàn thành
    }
  };
  
  // Gọi hàm tạo bảng
  createBooksTable();

module.exports = pool;
