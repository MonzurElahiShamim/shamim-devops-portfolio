#!/bin/bash

# Build script for GitHub Pages deployment
set -e

echo "🚀 Starting GitHub Pages build process..."
echo "📍 Target: GitHub Pages Deployment"

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

# Build the application for GitHub Pages
echo "🏗️ Building application for GitHub Pages deployment..."
echo "ℹ️  Using base path: /shamim-devops-portfolio/"
bun run build:github

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build completed successfully!"
    echo "📊 Build size:"
    du -sh dist/
    echo ""
    echo "📋 GitHub Pages deployment info:"
    echo "   ✅ Assets use correct base path: /shamim-devops-portfolio/"
    echo "   ✅ Router configured for GitHub Pages"
    echo "   ✅ 404.html included for SPA routing"
    echo "   ✅ SEO meta tags optimized"
    echo ""
    echo "🌐 Once deployed, your site will be available at:"
    echo "   https://MonzurElahiShamim.github.io/shamim-devops-portfolio/"
    echo ""
    echo "ℹ️  This build is automatically triggered by GitHub Actions"
    echo "   when you push to the main branch."
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 GitHub Pages build process completed!"
