#!/bin/bash

# Simplified build script for EC2 deployment
# For other environments, use the appropriate script directly

echo "🚀 Building for EC2 deployment..."
echo "ℹ️  For Docker: ./scripts/build-docker.sh"
echo "ℹ️  For GitHub Pages: ./scripts/build-github.sh"
echo ""

# Execute EC2 build script
exec ./scripts/build-ec2.sh

# Default build script (EC2 deployment)
# This is a wrapper for build-ec2.sh for backward compatibility

echo "� Redirecting to EC2 build script..."
echo "ℹ️  Use ./scripts/build-universal.sh for other environments"
echo ""

# Execute EC2 build script
exec ./scripts/build-ec2.sh
