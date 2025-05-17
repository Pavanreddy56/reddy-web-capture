
# C.P REDDY IT Solutions Website AWS EC2 Deployment Guide

This guide explains how to deploy the C.P REDDY IT Solutions website on an AWS EC2 instance with RDS database connectivity using Apache and PHP.

## Prerequisites

1. AWS EC2 instance running (Ubuntu recommended)
2. AWS RDS MySQL database instance
3. Security groups configured to allow:
   - HTTP (port 80) and HTTPS (port 443) traffic to your EC2 instance
   - MySQL (port 3306) traffic from your EC2 instance to your RDS instance

## Deployment Steps

### 1. Connect to your EC2 instance

```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```

### 2. Clone the repository

```bash
git clone your-repository-url
cd your-repository-folder
```

### 3. Update deployment script with your RDS details

Open `deploy.sh` and update the following variables with your actual RDS information:

```bash
export DB_HOST="your-rds-endpoint.amazonaws.com"
export DB_USER="your_username"
export DB_PASSWORD="your_password"
export DB_NAME="cpreddy_db"
```

### 4. Make the deployment script executable

```bash
chmod +x deploy.sh
```

### 5. Run the deployment script

```bash
./deploy.sh
```

### 6. Verify deployment

1. Open a web browser and navigate to your EC2 instance's public IP address
2. The website should be visible and the contact form should be functional
3. Test the form to ensure data is being stored in the RDS database

### 7. Setting up a Domain Name (Optional)

If you have a domain name for your website:

1. Create an Elastic IP and associate it with your EC2 instance
2. Update your domain's DNS records to point to your EC2 instance's IP address
3. Configure Apache for your domain name:

```bash
sudo nano /etc/apache2/sites-available/cpreddy.conf
```

Add:

```
<VirtualHost *:80>
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com
    DocumentRoot /var/www/html
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Then enable the site:

```bash
sudo a2ensite cpreddy.conf
sudo systemctl reload apache2
```

### 8. Setting up HTTPS with Let's Encrypt (Optional)

To secure your website with HTTPS:

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-apache
sudo certbot --apache -d yourdomain.com -d www.yourdomain.com
```

## Troubleshooting

- If the website doesn't load, check Apache status with `sudo systemctl status apache2`
- If form submissions fail, verify RDS connection settings in `db-config.php`
- Check Apache error logs: `sudo tail -f /var/log/apache2/error.log`
- Check PHP error logs: `sudo tail -f /var/log/php/error.log`

## Database Management

To connect to your RDS database and manage data:

```bash
mysql -h your-rds-endpoint.amazonaws.com -u your_username -p'your_password' cpreddy_db
```

Common database commands:

```sql
-- View all contacts
SELECT * FROM contacts;

-- Export contacts to CSV
SELECT * FROM contacts INTO OUTFILE '/tmp/contacts.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
```
