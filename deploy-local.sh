#!/bin/bash
set -euo pipefail  # Enhanced error handling: -u for undefined vars, -o pipefail for pipe failures

# Error handling function
handle_error() {
    echo "❌ Error occurred in script at line $1"
    echo "� Cleaning up..."
    rm -rf dist 2>/dev/null || true
    ssh myst-e1 "rm -rf /tmp/deploy" 2>/dev/null || true
    exit 1
}

# Set up error trap
trap 'handle_error $LINENO' ERR

echo "�🚀 Building and deploying from local machine..."

# Validate SSH connection first
if ! ssh -o ConnectTimeout=10 myst-e1 "echo 'SSH connection OK'" >/dev/null 2>&1; then
    echo "❌ Cannot connect to EC2 instance. Please check your SSH configuration."
    exit 1
fi

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
if ! ssh myst-e1 "mkdir -p /tmp/deploy"; then
    echo "❌ Failed to create deployment directory on EC2"
    exit 1
fi

# Transfer files
echo "📡 Transferring files..."
if ! scp -r dist/* "myst-e1:/tmp/deploy/"; then
    echo "❌ Failed to transfer files to EC2"
    exit 1
fi

# Create backup and deploy
echo "🚀 Deploying to server..."
if ! ssh myst-e1 "
    # Create backup
    sudo cp -r /var/www/html /var/www/html.backup.\$(date +%Y%m%d_%H%M%S) || { echo 'Backup failed'; exit 1; }
    
    # Deploy new version
    sudo rm -rf /var/www/html/* || { echo 'Failed to clear web directory'; exit 1; }
    sudo cp -r /tmp/deploy/* /var/www/html/ || { echo 'Failed to copy new files'; exit 1; }
    sudo chown -R ubuntu:ubuntu /var/www/html || { echo 'Failed to set permissions'; exit 1; }
    
    # Cleanup
    rm -rf /tmp/deploy || true
"; then
    echo "❌ Deployment failed on EC2"
    exit 1
fi

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
