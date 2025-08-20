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
bun run build --mode production

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build completed successfully!"
    echo "📊 Build size:"
    du -sh dist/
    echo ""
    echo "📋 Next steps for EC2 deployment:"
    echo "   1. Use simplified deployment:"
    echo "      ./deploy-local.sh"
    echo "   2. Or deploy from EC2 server:"
    echo "      ssh myst-e1 'cd /home/ubuntu/shamim-devops-portfolio && ./deploy-server.sh'"
    echo "   3. Test: http://54.163.193.39"
    echo ""
    echo "ℹ️  Recommended: Use ./deploy-local.sh for one-command deployment"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 EC2 build process completed!"
