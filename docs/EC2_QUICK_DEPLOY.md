# EC2 Quick Deploy Guide

## Prerequisites
- EC2 instance running (54.163.193.39)
- SSH access configured (`ssh myst-e1`)
- Domain pointing to EC2 (devopswithmonzur.engineer)

## 30-Second Deployment

### Method 1: Git Clone on EC2 (Recommended)

**One-time setup:**
```bash
ssh myst-e1 "git clone https://github.com/mdmonzurul/shamim-devops-portfolio.git /home/ubuntu/shamim-devops-portfolio"
```

**Deploy (every time you make changes):**
```bash
ssh myst-e1 "cd /home/ubuntu/shamim-devops-portfolio && ./deploy-server.sh"
```

### Method 2: Local Build + Transfer

**Deploy:**
```bash
./deploy-local.sh
```

## Create Deployment Scripts

**Server-side script** (create once on EC2):
```bash
ssh myst-e1
cat > /home/ubuntu/shamim-devops-portfolio/deploy-server.sh << 'EOF'
#!/bin/bash
set -e
echo "🚀 Deploying from server..."
git pull origin main
bun install
bun run build --mode production
sudo cp -r /var/www/html /var/www/html.backup.$(date +%Y%m%d_%H%M%S)
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/
sudo chown -R ubuntu:ubuntu /var/www/html
rm -rf dist
echo "✅ Done! Visit: http://54.163.193.39"
EOF
chmod +x deploy-server.sh
```

**Local script** (create once locally):
```bash
cat > deploy-local.sh << 'EOF'
#!/bin/bash
set -e
echo "🚀 Building and deploying..."
bun run build --mode production
ssh myst-e1 "sudo cp -r /var/www/html /var/www/html.backup.$(date +%Y%m%d_%H%M%S)"
scp -r dist/* myst-e1:/tmp/deploy/
ssh myst-e1 "sudo rm -rf /var/www/html/* && sudo cp -r /tmp/deploy/* /var/www/html/ && sudo chown -R ubuntu:ubuntu /var/www/html && rm -rf /tmp/deploy"
rm -rf dist
echo "✅ Done! Visit: http://54.163.193.39"
EOF
chmod +x deploy-local.sh
```

## Quick Commands

**Status Check:**
```bash
curl -I http://54.163.193.39
```

**View Logs:**
```bash
ssh myst-e1 "sudo tail -f /var/log/nginx/access.log"
```

**Restart Services:**
```bash
ssh myst-e1 "sudo systemctl restart nginx"
```

## Emergency Rollback
```bash
# List backups
ssh myst-e1 "ls -t /var/www/html.backup.*"

# Restore (replace TIMESTAMP)
ssh myst-e1 "sudo cp -r /var/www/html.backup.TIMESTAMP/* /var/www/html/"
```

## Daily Workflow
1. Make changes locally
2. Commit and push: `git add . && git commit -m "update" && git push`
3. Deploy: `ssh myst-e1 "cd /home/ubuntu/shamim-devops-portfolio && ./deploy-server.sh"`

That's it! 30 seconds from code to live. 🚀Deployment Reference

## Super Quick Git Deployment

```bash
# One-time setup (only needed once)
ssh myst-e1 "cd /home/ubuntu && git clone https://github.com/MonzurElahiShamim/shamim-devops-portfolio.git && cd shamim-devops-portfolio && bun install"

# Regular deployment (after making changes)
ssh myst-e1 "cd /home/ubuntu/shamim-devops-portfolio && git pull && bun install && bun run build --mode production && sudo cp -r /var/www/html /var/www/html.backup.\$(date +%Y%m%d_%H%M%S) && sudo rm -rf /var/www/html/* && sudo cp -r dist/* /var/www/html/ && sudo chown -R ubuntu:ubuntu /var/www/html && rm -rf dist"
```

## Even Quicker with Deployment Script

```bash
# Create the script (one-time)
ssh myst-e1 "/home/ubuntu/deploy-portfolio.sh"

# Use the script (every deployment)
ssh myst-e1 "/home/ubuntu/deploy-portfolio.sh"
```

## Deployment Methods Ranked by Speed

1. **🥇 Git Clone + Script**: `ssh myst-e1 "/home/ubuntu/deploy-portfolio.sh"`
2. **🥈 Git Clone Manual**: Multiple commands on server
3. **🥉 Build Scripts**: `npm run build:ec2` (requires file transfer)
4. **Manual SCP**: Slowest, most steps

## Quick Verification

```bash
# Test if deployment worked
curl -I http://54.163.193.39
curl -I http://54.163.193.39/resume.pdf

# Or open in browser
open http://54.163.193.39
```

## Emergency Rollback

```bash
# Find latest backup and restore
ssh myst-e1 "ls -la /var/www/ | grep backup | tail -1"
ssh myst-e1 "sudo rm -rf /var/www/html/* && sudo cp -r /var/www/html.backup.TIMESTAMP/* /var/www/html/"
```

## Server Details

- **IP**: 54.163.193.39
- **Domain**: https://devopswithmonzur.engineer
- **SSH**: `ssh myst-e1`
- **Web Directory**: `/var/www/html/`
- **Project Directory**: `/home/ubuntu/shamim-devops-portfolio/`

---

*For detailed deployment guide, see [EC2_DEPLOYMENT_GUIDE.md](EC2_DEPLOYMENT_GUIDE.md)*
