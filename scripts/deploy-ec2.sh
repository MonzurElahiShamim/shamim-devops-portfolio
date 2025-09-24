#!/bin/bash
# EC2 Deployment Script for Portfolio

set -e

echo "🚀 Starting EC2 deployment..."

# Build for production (EC2)
echo "📦 Building application for EC2..."
npm run build:ec2

# Copy files to nginx directory
echo "📋 Copying files to nginx..."
sudo cp -r dist/* /var/www/html/

# Set proper permissions
echo "🔐 Setting proper permissions..."
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

# Test nginx configuration
echo "🔍 Testing nginx configuration..."
sudo nginx -t

# Reload nginx
echo "🔄 Reloading nginx..."
sudo systemctl reload nginx

echo "✅ Deployment completed successfully!"
echo "🌐 Your portfolio should now be accessible at https://monzurs.me"