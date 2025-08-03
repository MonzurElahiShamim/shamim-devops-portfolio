# EC2 Deployment Guide

Simple, modular deployment process for your portfolio.

## Prerequisites

- SSH access to your EC2 instance: `ssh myst-e1`
- Git repository with latest changes

## Choose Your Deployment Method

### Method 1: Git Clone on EC2 (Recommended - Simple & Fast)

**One-time setup:**
```bash
# SSH into EC2 and clone repo
ssh myst-e1
cd /home/ubuntu
git clone https://github.com/MonzurElahiShamim/shamim-devops-portfolio.git
cd shamim-devops-portfolio

# Install Bun (if not installed)
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# Install dependencies
bun install
```

**Regular deployment (30 seconds):**
```bash
ssh myst-e1 "cd /home/ubuntu/shamim-devops-portfolio && ./deploy-server.sh"
```

### Method 2: Local Build + Transfer

**Quick deployment:**
```bash
npm run build:ec2
# Follow the script instructions
```

## Create Simple Deployment Scripts

### Server-Side Script (Recommended)

Create this once on your EC2:

```bash
# SSH into EC2 and create the deployment script
ssh myst-e1
cat > /home/ubuntu/shamim-devops-portfolio/deploy-server.sh << 'EOF'
#!/bin/bash
set -e

echo "🚀 Deploying portfolio..."

# Pull latest changes
git pull origin main

# Install dependencies (only if needed)
if [ package.json -nt node_modules/.package-lock ]; then
    echo "📦 Installing dependencies..."
    bun install
    touch node_modules/.package-lock
fi

# Build
echo "🔨 Building..."
bun run build --mode production

# Backup current site
sudo cp -r /var/www/html /var/www/html.backup.$(date +%Y%m%d_%H%M%S) 2>/dev/null || true

# Deploy
echo "🚀 Deploying..."
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/
sudo chown -R ubuntu:ubuntu /var/www/html

# Cleanup
rm -rf dist

echo "✅ Done! Visit: http://54.163.193.39"
EOF

chmod +x /home/ubuntu/shamim-devops-portfolio/deploy-server.sh
```

Now you can deploy with just:
```bash
ssh myst-e1 "cd /home/ubuntu/shamim-devops-portfolio && ./deploy-server.sh"
```

### Local Deployment Script (Alternative)

Create this in your local project:

```bash
cat > deploy-local.sh << 'EOF'
#!/bin/bash
set -e

echo "� Building and deploying to EC2..."

# Build locally
bun run build --mode production

# Deploy to EC2
ssh myst-e1 "sudo cp -r /var/www/html /var/www/html.backup.$(date +%Y%m%d_%H%M%S) 2>/dev/null || true"
ssh myst-e1 "sudo rm -rf /var/www/html/*"
scp -r dist/* myst-e1:/tmp/deploy/
ssh myst-e1 "sudo mv /tmp/deploy/* /var/www/html/ && sudo chown -R ubuntu:ubuntu /var/www/html"

echo "✅ Done! Visit: http://54.163.193.39"
EOF

chmod +x deploy-local.sh
```

## Troubleshooting

### Common Issues

**Git pull conflicts:**
```bash
ssh myst-e1 "cd /home/ubuntu/shamim-devops-portfolio && git reset --hard origin/main"
```

**Build fails:**
```bash
ssh myst-e1 "cd /home/ubuntu/shamim-devops-portfolio && rm -rf node_modules && bun install"
```

**Blank page after deployment:**
- Check: `curl -I http://54.163.193.39`
- Verify assets: `ssh myst-e1 "ls -la /var/www/html/assets/"`

**Download buttons not working:**
- Test: `curl -I http://54.163.193.39/resume.pdf`
- Fix permissions: `ssh myst-e1 "sudo chown -R ubuntu:ubuntu /var/www/html"`

### Rollback if Needed

```bash
# Find latest backup
ssh myst-e1 "ls -t /var/www/html.backup.* | head -1"

# Restore (replace TIMESTAMP with actual timestamp)
ssh myst-e1 "sudo rm -rf /var/www/html/* && sudo cp -r /var/www/html.backup.TIMESTAMP/* /var/www/html/"
```

## Optional: Simple GitHub Actions (Minimal)

Only if you want automatic deployment on push:

`.github/workflows/deploy-ec2.yml`:
```yaml
name: Deploy to EC2
on:
  push:
    branches: [ main ]
    
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        run: |
          echo "${{ secrets.EC2_SSH_KEY }}" > key.pem
          chmod 600 key.pem
          ssh -i key.pem -o StrictHostKeyChecking=no ubuntu@54.163.193.39 "cd /home/ubuntu/shamim-devops-portfolio && ./deploy-server.sh"
```

**Setup secrets in GitHub:**
- `EC2_SSH_KEY`: Your private SSH key content

## Daily Workflow

1. **Make changes locally**
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "your changes"
   git push origin main
   ```
3. **Deploy:**
   ```bash
   ssh myst-e1 "cd /home/ubuntu/shamim-devops-portfolio && ./deploy-server.sh"
   ```

That's it! Simple, fast, and reliable. 🚀
