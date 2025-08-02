#!/bin/bash

# EC2 Setup Script - Run this on your EC2 instance
set -e

echo "🚀 Setting up EC2 instance for portfolio deployment..."

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Docker
echo "🐳 Installing Docker..."
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker ubuntu
rm get-docker.sh

# Install Docker Compose
echo "🔧 Installing Docker Compose..."
sudo apt install docker-compose-plugin -y

# Install Nginx
echo "🌐 Installing Nginx..."
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx

# Install Node.js and Bun (backup option)
echo "📦 Installing Node.js and Bun..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
curl -fsSL https://bun.sh/install | bash

# Install useful tools
echo "🛠️ Installing additional tools..."
sudo apt install -y htop curl wget git unattended-upgrades certbot python3-certbot-nginx

# Setup firewall
echo "🔒 Configuring firewall..."
sudo ufw --force enable
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw allow 8080

# Setup automatic security updates
echo "🔄 Setting up automatic security updates..."
sudo dpkg-reconfigure -plow unattended-upgrades

# Create directories
echo "📁 Creating project directories..."
mkdir -p ~/portfolio-backups
mkdir -p ~/logs

echo "✅ EC2 setup completed!"
echo ""
echo "Next steps:"
echo "1. Clone your repository: git clone https://github.com/MonzurElahiShamim/shamim-devops-portfolio.git"
echo "2. Run the deployment script: ./scripts/deploy-ec2.sh"
echo "3. Configure your domain in Nginx"
echo "4. Setup SSL with: sudo certbot --nginx -d your-domain.com"
echo ""
echo "⚠️  Please logout and login again to use Docker without sudo"
