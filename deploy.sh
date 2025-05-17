
#!/bin/bash

# Update packages
sudo apt update

# Install Node.js, npm, and other dependencies if not already installed
if ! command -v node &> /dev/null; then
    echo "Installing Node.js and npm..."
    sudo apt install -y nodejs npm
fi

# Install MySQL client if not already installed
if ! command -v mysql &> /dev/null; then
    echo "Installing MySQL client..."
    sudo apt install -y mysql-client
fi

# Install PM2 globally if not already installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    sudo npm install -g pm2
fi

# Install dependencies
npm install

# Set up environment variables (replace with your actual RDS details)
export DB_HOST="your-rds-endpoint.amazonaws.com"
export DB_USER="your_username"
export DB_PASSWORD="your_password"
export DB_NAME="cpreddy_db"
export PORT=80

# Set up database table
node setup-db.js

# Start the server with PM2
pm2 start server.js --name "cpreddy-website"
pm2 save

# Set up PM2 to start on boot
pm2 startup
