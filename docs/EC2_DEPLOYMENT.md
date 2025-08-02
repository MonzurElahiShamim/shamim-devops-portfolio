# AWS EC2 Deployment Guide

## Prerequisites

1. **AWS Account** with EC2 access
2. **Domain name** (optional but recommended)
3. **SSH Key Pair** for EC2 access
4. **AWS CLI** installed locally (optional)

---

## Step 1: Launch EC2 Instance

### 1.1 Create EC2 Instance
```bash
# Recommended specifications:
- Instance Type: t3.micro (free tier) or t3.small
- AMI: Ubuntu 22.04 LTS
- Storage: 20GB GP3
- Security Group: Allow HTTP (80), HTTPS (443), SSH (22)
```

### 1.2 Security Group Configuration
```bash
# Inbound Rules:
- SSH (22): Your IP / 0.0.0.0/0 (for remote access)
- HTTP (80): 0.0.0.0/0 (for web traffic)
- HTTPS (443): 0.0.0.0/0 (for secure web traffic)
- Custom TCP (8080): 0.0.0.0/0 (for development server, optional)
```

---

## Step 2: Connect to EC2 Instance

```bash
# Connect via SSH
ssh -i your-key.pem ubuntu@your-ec2-public-ip

# Update system packages
sudo apt update && sudo apt upgrade -y
```

---

## Step 3: Install Required Software

### 3.1 Install Docker and Docker Compose
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker ubuntu
newgrp docker

# Install Docker Compose V2
sudo apt install docker-compose-plugin -y

# Verify installations
docker --version
docker compose version
```

### 3.2 Install Nginx (Reverse Proxy)
```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 3.3 Install Node.js and Bun (for direct deployment option)
```bash
# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Bun
curl -fsSL https://bun.sh/install | bash
echo 'export PATH="$HOME/.bun/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

---

## Step 4: Clone and Setup Your Repository

```bash
# Clone your repository
git clone https://github.com/MonzurElahiShamim/shamim-devops-portfolio.git
cd shamim-devops-portfolio

# Make scripts executable
chmod +x scripts/*.sh
```

---

## Step 5: Choose Deployment Method

## Option A: Docker Deployment (Recommended)

### 5.1 Build and Run with Docker
```bash
# Build the Docker image
docker build -t portfolio:latest .

# Run the container
docker run -d \
  --name portfolio \
  --restart unless-stopped \
  -p 3000:80 \
  portfolio:latest

# Check if container is running
docker ps
```

### 5.2 Or use Docker Compose
```bash
# Run with Docker Compose (production)
docker compose -f docker/docker-compose.yml up -d

# Check status
docker compose -f docker/docker-compose.yml ps
```

## Option B: Direct Build Deployment

### 5.1 Install Dependencies and Build
```bash
# Install dependencies
bun install

# Build the application
bun run build

# Copy build files to nginx directory
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/
```

---

## Step 6: Configure Nginx Reverse Proxy

### 6.1 Create Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

### 6.2 Add Configuration (for Docker deployment)
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # Replace with your domain

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 6.3 Enable the Site
```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

---

## Step 7: Setup SSL Certificate (Let's Encrypt)

### 7.1 Install Certbot
```bash
sudo apt install certbot python3-certbot-nginx -y
```

### 7.2 Obtain SSL Certificate
```bash
# Replace with your domain
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Test automatic renewal
sudo certbot renew --dry-run
```

---

## Step 8: Setup Monitoring and Logging

### 8.1 Setup Log Rotation
```bash
sudo nano /etc/logrotate.d/portfolio
```

Add:
```
/var/log/nginx/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 root root
    postrotate
        systemctl reload nginx
    endscript
}
```

### 8.2 Setup Basic Monitoring
```bash
# Install htop for system monitoring
sudo apt install htop -y

# Check system resources
htop
```

---

## Step 9: Setup Automatic Updates and Backups

### 9.1 Create Update Script
```bash
nano ~/update-portfolio.sh
```

Add:
```bash
#!/bin/bash
cd /home/ubuntu/shamim-devops-portfolio

# Pull latest changes
git pull origin main

# Rebuild and restart container
docker compose -f docker/docker-compose.yml down
docker compose -f docker/docker-compose.yml build --no-cache
docker compose -f docker/docker-compose.yml up -d

# Clean up old images
docker image prune -f

echo "Portfolio updated successfully!"
```

### 9.2 Make Script Executable
```bash
chmod +x ~/update-portfolio.sh
```

### 9.3 Setup Automatic Security Updates
```bash
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure -plow unattended-upgrades
```

---

## Step 10: Configure Domain and DNS

### 10.1 Point Domain to EC2
```
# In your domain registrar's DNS settings:
A Record: @ -> your-ec2-public-ip
A Record: www -> your-ec2-public-ip
```

### 10.2 Setup Elastic IP (Recommended)
```bash
# In AWS Console:
1. Go to EC2 > Elastic IPs
2. Allocate new Elastic IP
3. Associate with your EC2 instance
4. Update DNS records with Elastic IP
```

---

## Step 11: Testing and Verification

### 11.1 Test the Deployment
```bash
# Check if services are running
sudo systemctl status nginx
docker ps

# Test from command line
curl -I http://your-domain.com
curl -I https://your-domain.com

# Check SSL certificate
curl -vI https://your-domain.com
```

### 11.2 Performance Testing
```bash
# Install apache2-utils for testing
sudo apt install apache2-utils -y

# Simple load test
ab -n 100 -c 10 http://your-domain.com/
```

---

## Step 12: Setup Continuous Deployment (Optional)

### 12.1 Create GitHub Webhook Endpoint
```bash
# Install webhook handler
sudo apt install webhook -y

# Create webhook script
nano ~/webhook-deploy.sh
```

Add:
```bash
#!/bin/bash
cd /home/ubuntu/shamim-devops-portfolio
git pull origin main
./update-portfolio.sh
```

### 12.2 Configure Webhook Service
```bash
# Create webhook configuration
nano ~/hooks.json
```

Add:
```json
[
  {
    "id": "portfolio-deploy",
    "execute-command": "/home/ubuntu/webhook-deploy.sh",
    "command-working-directory": "/home/ubuntu/shamim-devops-portfolio",
    "pass-arguments-to-command": [],
    "trigger-rule": {
      "match": {
        "type": "payload-hash-sha1",
        "secret": "your-webhook-secret",
        "parameter": {
          "source": "header",
          "name": "X-Hub-Signature-SHA1"
        }
      }
    }
  }
]
```

---

## Troubleshooting

### Common Issues and Solutions

1. **Port 80/443 not accessible:**
   ```bash
   sudo ufw status
   sudo ufw allow 80
   sudo ufw allow 443
   ```

2. **Docker permission denied:**
   ```bash
   sudo usermod -aG docker $USER
   newgrp docker
   ```

3. **Nginx configuration errors:**
   ```bash
   sudo nginx -t
   sudo systemctl status nginx
   sudo journalctl -u nginx
   ```

4. **SSL certificate issues:**
   ```bash
   sudo certbot certificates
   sudo certbot renew --force-renewal
   ```

5. **Check application logs:**
   ```bash
   docker logs portfolio
   sudo tail -f /var/log/nginx/error.log
   ```

---

## Security Best Practices

1. **Regular Updates:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   docker image prune -f
   ```

2. **Firewall Configuration:**
   ```bash
   sudo ufw enable
   sudo ufw default deny incoming
   sudo ufw default allow outgoing
   sudo ufw allow ssh
   sudo ufw allow 'Nginx Full'
   ```

3. **SSH Hardening:**
   ```bash
   sudo nano /etc/ssh/sshd_config
   # Disable password authentication
   # Change default SSH port
   sudo systemctl restart ssh
   ```

4. **Regular Backups:**
   ```bash
   # Create backup script
   tar -czf portfolio-backup-$(date +%Y%m%d).tar.gz shamim-devops-portfolio/
   ```

---

## Cost Optimization

1. **Use t3.micro** for free tier eligibility
2. **Setup CloudWatch** for monitoring
3. **Use Elastic IP** to avoid IP changes
4. **Regular cleanup** of old Docker images
5. **Monitor data transfer** costs

---

Your portfolio will be accessible at:
- **HTTP:** http://your-domain.com
- **HTTPS:** https://your-domain.com
- **Direct IP:** http://your-ec2-ip

Remember to replace placeholders with your actual values!
