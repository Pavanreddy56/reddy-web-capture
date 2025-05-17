
# C P REDDY Website AWS EC2 Deployment Guide

This guide explains how to deploy the C P REDDY IT company website on an AWS EC2 instance with RDS database connectivity.

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
3. Check the PM2 process to ensure the server is running:
   ```bash
   pm2 status
   ```

### 7. View logs (if needed)

```bash
pm2 logs cpreddy-website
```

## Troubleshooting

- If the website doesn't load, check if your security group allows traffic on port 80
- If form submissions fail, verify RDS connection settings and ensure the EC2 security group has access to the RDS instance
- Check server logs with `pm2 logs cpreddy-website`

## Important Commands

- Restart the server: `pm2 restart cpreddy-website`
- Stop the server: `pm2 stop cpreddy-website`
- Start the server: `pm2 start cpreddy-website`
- View logs: `pm2 logs cpreddy-website`
