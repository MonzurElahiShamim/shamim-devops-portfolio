#!/bin/bash

# Build script for Docker deployment
set -e

echo "🚀 Starting Docker build process..."
echo "📍 Target: Docker Container Deployment"

# Check if docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install it first."
    exit 1
fi

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

# Build the application for Docker
echo "🏗️ Building application for Docker deployment..."
echo "ℹ️  Using base path: / (root)"
bun run build:ec2

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Application build completed successfully!"
    echo "📊 Build size:"
    du -sh dist/
    echo ""
    
    # Build Docker image
    echo "🐳 Building Docker image..."
    docker build -t portfolio:latest .
    
    # Check if Docker build was successful
    if [ $? -eq 0 ]; then
        echo "✅ Docker image built successfully!"
        echo ""
        echo "📋 Next steps for Docker deployment:"
        echo "   1. Run the container:"
        echo "      docker run -d -p 80:80 --name portfolio portfolio:latest"
        echo "   2. Or use docker-compose:"
        echo "      docker-compose -f docker/docker-compose.yml up -d"
        echo "   3. Test: http://localhost"
        echo ""
        echo "🔍 Docker image info:"
        docker images portfolio:latest
    else
        echo "❌ Docker build failed!"
        exit 1
    fi
else
    echo "❌ Application build failed!"
    exit 1
fi

echo "🎉 Docker build process completed!"
