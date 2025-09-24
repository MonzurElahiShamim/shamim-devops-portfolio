#!/bin/bash

# Simple setup script for portfolio development

echo "🚀 Setting up portfolio development environment..."

# Check Node.js version
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 20+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

echo "🔍 Running linter to check code quality..."
npm run lint

echo "🏗️ Testing build process..."
npm run build

echo "🧹 Cleaning up build files..."
rm -rf dist

echo ""
echo "✅ Setup complete! You can now:"
echo "   npm run dev    # Start development server"
echo "   npm run build  # Build for production"
echo "   npm run lint   # Check code quality"
echo ""
echo "🌐 Development server will be available at http://localhost:8080"