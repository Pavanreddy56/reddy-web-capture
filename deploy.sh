
#!/bin/bash

# Update packages
sudo apt update

# Install Apache, PHP, and MySQL client
echo "Installing Apache, PHP, and MySQL client..."
sudo apt install -y apache2 php php-mysql mysql-client

# Configure Apache
echo "Configuring Apache..."
sudo rm -f /var/www/html/index.html
sudo cp -r ./* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/

# Set up environment variables (replace with your actual RDS details)
export DB_HOST="your-rds-endpoint.amazonaws.com"
export DB_USER="your_username"
export DB_PASSWORD="your_password"
export DB_NAME="cpreddy_db"

# Create database configuration file
cat > /var/www/html/db-config.php << EOF
<?php
define('DB_SERVER', '$DB_HOST');
define('DB_USERNAME', '$DB_USER');
define('DB_PASSWORD', '$DB_PASSWORD');
define('DB_NAME', '$DB_NAME');

// Attempt to connect to MySQL database
\$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if(\$conn === false) {
    die("ERROR: Could not connect to database. " . mysqli_connect_error());
}
?>
EOF

# Set up database table
echo "Setting up database table..."
mysql -h $DB_HOST -u $DB_USER -p$DB_PASSWORD $DB_NAME -e "
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);"

echo "Restarting Apache..."
sudo systemctl restart apache2

echo "Deployment complete! Your website is now running on Apache."
