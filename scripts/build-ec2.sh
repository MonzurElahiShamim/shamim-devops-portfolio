#!/bin/bash

# Build script for EC2 direct deployment
set -e

echo "🚀 Starting EC2 build process..."
echo "📍 Target: EC2 Direct Deployment (/var/www/html)"

# Check if bun is installed
if ! command -v bun &> /dev/null; then
    echo "❌ Bun is not installed. Please install it first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
bun install

# Run linting
echo "🔍 Running linter..."
bun run lint

# Build the application for EC2
echo "🏗️ Building application for EC2 deployment..."
echo "ℹ️  Using base path: / (root)"
bun run build:ec2

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build completed successfully!"
    echo "📊 Build size:"
    du -sh dist/
    echo ""
    echo "📋 Next steps for EC2 deployment:"
    echo "   1. Copy dist/* to /var/www/html:"
    echo "      sudo rm -rf /var/www/html/*"
    echo "      sudo cp -r dist/* /var/www/html/"
    echo "   2. Set proper permissions:"
    echo "      sudo chown -R www-data:www-data /var/www/html"
    echo "      sudo chmod -R 755 /var/www/html"
    echo "   3. Test: http://your-ec2-ip"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 EC2 build process completed!"
