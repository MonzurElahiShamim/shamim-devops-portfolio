#!/bin/bash

# Development setup script
set -e

echo "🔧 Setting up development environment..."

# Check if bun is installed
if ! command -v bun &> /dev/null; then
    echo "❌ Bun is not installed. Installing bun..."
    curl -fsSL https://bun.sh/install | bash
    source ~/.bashrc
fi

# Install dependencies
echo "📦 Installing dependencies..."
bun install

# Check if Docker is available
if command -v docker &> /dev/null; then
    echo "🐳 Docker is available"
    echo "Run 'docker-compose -f docker/docker-compose.yml --profile dev up' for containerized development"
else
    echo "⚠️ Docker not found. Install Docker for containerized development."
fi

echo "🎯 Development environment ready!"
echo "Run 'bun run dev' to start the development server"
