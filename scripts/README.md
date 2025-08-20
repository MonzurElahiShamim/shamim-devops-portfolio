# Scripts Directory

This directory contains build and deployment scripts for the portfolio.

## 🚀 Simplified Deployment (Recommended)

Use these scripts from the **project root** directory:

### Main Deployment Scripts
- `./deploy-local.sh` - Build locally and deploy to EC2 (30 seconds)
- `./deploy-server.sh` - Deploy from EC2 server via git (30 seconds)

### Quick Commands
```bash
# Deploy from local machine
./deploy-local.sh

# Deploy from EC2 server  
ssh myst-e1 "cd /home/ubuntu/shamim-devops-portfolio && ./deploy-server.sh"
```

## 📦 Build Scripts (For Specific Environments)

### Active Build Scripts
- `build-ec2.sh` - Build for EC2 deployment
- `build-github.sh` - Build for GitHub Pages  
- `build-docker.sh` - Build Docker image
- `build.sh` - Default (points to EC2 build)

### Usage
```bash
# Build for EC2
./scripts/build-ec2.sh

# Build for GitHub Pages
./scripts/build-github.sh

# Build Docker image
./scripts/build-docker.sh
```

## 🔧 Legacy/Complex Scripts

These scripts are maintained for reference but **not recommended** for daily use:

- `build-universal.sh` - Multi-environment build selector (complex)
- `deploy-ec2.sh` - Old Docker-based deployment (deprecated)
- `setup-ec2.sh` - Initial EC2 setup (one-time use)
- `setup-dev.sh` - Development environment setup
- `create-aws-infrastructure.sh` - AWS infrastructure creation
- `monitor-portfolio.sh` - Portfolio monitoring

## 🎯 Daily Workflow

1. **Make changes** in your code
2. **Test locally** with `bun run dev`
3. **Commit and push** your changes
4. **Deploy** with `./deploy-local.sh` (30 seconds)

## 📚 Documentation

- See `docs/EC2_DEPLOYMENT_GUIDE.md` for comprehensive deployment guide
- See `docs/EC2_QUICK_DEPLOY.md` for quick reference

---

**Focus**: Keep it simple, fast, and reliable! 🚀
