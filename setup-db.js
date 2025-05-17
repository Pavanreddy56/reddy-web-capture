
const mysql = require('mysql');

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'your-rds-endpoint.amazonaws.com',
  user: process.env.DB_USER || 'your_username',
  password: process.env.DB_PASSWORD || 'your_password',
  database: process.env.DB_NAME || 'cpreddy_db'
});

// Connect to database
db.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to RDS database');
  
  // Create contacts table if it doesn't exist
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating table:', err);
      return;
    }
    console.log('Contacts table created or already exists');
    db.end();
  });
});
