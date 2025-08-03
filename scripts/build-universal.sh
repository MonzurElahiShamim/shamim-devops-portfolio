#!/bin/bash

# Universal build script for all deployment environments
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to display usage
show_usage() {
    echo "🚀 Portfolio Build Script"
    echo ""
    echo "Usage: $0 [ENVIRONMENT]"
    echo ""
    echo "Environments:"
    echo "  ec2       Build for EC2 direct deployment (/var/www/html)"
    echo "  docker    Build application and Docker image"
    echo "  github    Build for GitHub Pages deployment"
    echo "  dev       Build for development/testing"
    echo ""
    echo "Examples:"
    echo "  $0 ec2      # Build for EC2 deployment"
    echo "  $0 docker   # Build for Docker deployment"
    echo "  $0 github   # Build for GitHub Pages"
    echo "  $0          # Interactive mode (ask for environment)"
    echo ""
}

# Function to select environment interactively
select_environment() {
    echo "🎯 Select deployment environment:"
    echo "  1) EC2 Direct Deployment"
    echo "  2) Docker Deployment"
    echo "  3) GitHub Pages"
    echo "  4) Development Build"
    echo ""
    
    while true; do
        read -p "Enter choice (1-4): " choice
        case $choice in
            1) echo "ec2"; return ;;
            2) echo "docker"; return ;;
            3) echo "github"; return ;;
            4) echo "dev"; return ;;
            *) echo "❌ Invalid choice. Please enter 1-4." ;;
        esac
    done
}

# Main execution
main() {
    echo -e "${BLUE}🚀 Portfolio Universal Build Script${NC}"
    echo "=================================="
    echo ""
    
    # Determine environment
    ENVIRONMENT=""
    if [ $# -eq 0 ]; then
        # Interactive mode
        ENVIRONMENT=$(select_environment)
    elif [ $# -eq 1 ]; then
        case $1 in
            ec2|docker|github|dev)
                ENVIRONMENT=$1
                ;;
            -h|--help|help)
                show_usage
                exit 0
                ;;
            *)
                echo -e "${RED}❌ Invalid environment: $1${NC}"
                echo ""
                show_usage
                exit 1
                ;;
        esac
    else
        echo -e "${RED}❌ Too many arguments${NC}"
        echo ""
        show_usage
        exit 1
    fi
    
    # Execute environment-specific build
    case $ENVIRONMENT in
        ec2)
            echo -e "${GREEN}🎯 Building for EC2 Direct Deployment${NC}"
            ./scripts/build-ec2.sh
            ;;
        docker)
            echo -e "${GREEN}🎯 Building for Docker Deployment${NC}"
            ./scripts/build-docker.sh
            ;;
        github)
            echo -e "${GREEN}🎯 Building for GitHub Pages${NC}"
            ./scripts/build-github.sh
            ;;
        dev)
            echo -e "${GREEN}🎯 Building for Development${NC}"
            echo "📦 Installing dependencies..."
            bun install
            echo "🏗️ Building application..."
            bun run build:dev
            echo -e "${GREEN}✅ Development build completed!${NC}"
            ;;
        *)
            echo -e "${RED}❌ Unknown environment: $ENVIRONMENT${NC}"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"
