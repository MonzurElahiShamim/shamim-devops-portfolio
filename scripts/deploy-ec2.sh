#!/bin/bash

# Portfolio Deployment Script for EC2
set -e

echo "🚀 Deploying portfolio to EC2..."

# Configuration
CONTAINER_NAME="portfolio"
IMAGE_NAME="portfolio:latest"
PORT="3000"
DOMAIN=${1:-"your-domain.com"}

# Check if running on EC2
if [ ! -f /sys/hypervisor/uuid ] || [ "$(head -c 3 /sys/hypervisor/uuid)" != "ec2" ]; then
    echo "⚠️  This script is designed for EC2. Proceeding anyway..."
fi

# Stop existing container if running
echo "🛑 Stopping existing container..."
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Build Docker image
echo "🏗️ Building Docker image..."
docker build -t $IMAGE_NAME .

# Run the container
echo "🚀 Starting new container..."
docker run -d \
  --name $CONTAINER_NAME \
  --restart unless-stopped \
  -p $PORT:80 \
  --memory="512m" \
  --cpus="0.5" \
  $IMAGE_NAME

# Wait for container to start
echo "⏳ Waiting for container to start..."
sleep 10

# Check if container is running
if docker ps | grep -q $CONTAINER_NAME; then
    echo "✅ Container is running successfully!"
else
    echo "❌ Container failed to start. Checking logs..."
    docker logs $CONTAINER_NAME
    exit 1
fi

# Setup/Update Nginx configuration
echo "🌐 Configuring Nginx..."
sudo tee /etc/nginx/sites-available/portfolio > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    location / {
        proxy_pass http://localhost:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        
        # Timeout settings
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Health check endpoint
    location /health {
        access_log off;
        return 200 "healthy\\n";
        add_header Content-Type text/plain;
    }

    # Static assets caching
    location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)\$ {
        proxy_pass http://localhost:$PORT;
        proxy_set_header Host \$host;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Enable the site
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
echo "🔍 Testing Nginx configuration..."
if sudo nginx -t; then
    echo "✅ Nginx configuration is valid"
    sudo systemctl reload nginx
else
    echo "❌ Nginx configuration error!"
    exit 1
fi

# Clean up old Docker images
echo "🧹 Cleaning up old Docker images..."
docker image prune -f

# Create backup
echo "💾 Creating backup..."
BACKUP_NAME="portfolio-backup-$(date +%Y%m%d-%H%M%S).tar.gz"
tar -czf ~/portfolio-backups/$BACKUP_NAME . --exclude=node_modules --exclude=.git --exclude=dist

# Test deployment
echo "🧪 Testing deployment..."
sleep 5

if curl -f http://localhost:$PORT > /dev/null 2>&1; then
    echo "✅ Local deployment test passed!"
else
    echo "❌ Local deployment test failed!"
    echo "Container logs:"
    docker logs $CONTAINER_NAME --tail 20
    exit 1
fi

# Display status
echo ""
echo "🎉 Deployment completed successfully!"
echo ""
echo "📊 Status:"
echo "  Container: $(docker ps --format 'table {{.Names}}\t{{.Status}}' | grep $CONTAINER_NAME)"
echo "  Image: $IMAGE_NAME"
echo "  Port: $PORT"
echo "  Domain: $DOMAIN"
echo ""
echo "🌐 Your portfolio should be available at:"
echo "  http://$DOMAIN"
echo "  http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4 2>/dev/null || echo 'your-ec2-ip')"
echo ""
echo "📝 Next steps:"
echo "  1. Update your domain DNS to point to this EC2 instance"
echo "  2. Setup SSL: sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
echo "  3. Test HTTPS: https://$DOMAIN"
echo ""
echo "🔧 Useful commands:"
echo "  View logs: docker logs $CONTAINER_NAME"
echo "  Restart: docker restart $CONTAINER_NAME"
echo "  Update: git pull && ./scripts/deploy-ec2.sh $DOMAIN"
