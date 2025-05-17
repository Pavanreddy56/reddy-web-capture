
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'dist' directory (where your built React app will be)
app.use(express.static(path.join(__dirname, 'dist')));

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
});

// API endpoint for contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Data validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  // Insert into database
  const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message || ''], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Failed to save contact information' });
    }
    
    console.log('Contact saved:', result);
    res.json({ success: true, message: 'Contact information saved successfully' });
  });
});

// For all other GET requests, send the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
