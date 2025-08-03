#!/bin/bash
set -e

echo "🚀 Building and deploying from local machine..."

# Ensure we have dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    bun install
fi

# Build for production (EC2 mode)
echo "🔨 Building for production..."
bun run build --mode production

# Verify build succeeded
if [ ! -f "dist/index.html" ]; then
    echo "❌ Build failed - dist/index.html not found"
    exit 1
fi

# Prepare temporary directory on EC2
echo "📤 Preparing deployment..."
ssh myst-e1 "mkdir -p /tmp/deploy"

# Transfer files
echo "📡 Transferring files..."
scp -r dist/* myst-e1:/tmp/deploy/

# Create backup and deploy
echo "🚀 Deploying to server..."
ssh myst-e1 "
    # Create backup
    sudo cp -r /var/www/html /var/www/html.backup.\$(date +%Y%m%d_%H%M%S)
    
    # Deploy new version
    sudo rm -rf /var/www/html/*
    sudo cp -r /tmp/deploy/* /var/www/html/
    sudo chown -R ubuntu:ubuntu /var/www/html
    
    # Cleanup
    rm -rf /tmp/deploy
"

# Cleanup local build
rm -rf dist

echo "✅ Deployment complete!"
echo "🌐 Website: http://54.163.193.39"
echo "🌐 Domain: https://devopswithmonzur.engineer"

# Quick test
if curl -s -f http://54.163.193.39 >/dev/null; then
    echo "✅ Website is responding correctly"
else
    echo "⚠️  Website test failed - please check manually"
fi
