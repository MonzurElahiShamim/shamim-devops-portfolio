#!/bin/bash

# Default build script (EC2 deployment)
# This is a wrapper for build-ec2.sh for backward compatibility

echo "� Redirecting to EC2 build script..."
echo "ℹ️  Use ./scripts/build-universal.sh for other environments"
echo ""

# Execute EC2 build script
exec ./scripts/build-ec2.sh
