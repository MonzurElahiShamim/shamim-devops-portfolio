# EC2 Quick Deployment Reference

## Super Quick Deployment (30 seconds)

```bash
# 1. Build for EC2
npm run build:ec2

# 2. Follow the script instructions, or manually:
ssh myst-e1 "mkdir -p /tmp/deploy" && \
scp -r dist/* myst-e1:/tmp/deploy/ && \
ssh myst-e1 "sudo rm -rf /var/www/html/* && sudo cp -r /tmp/deploy/* /var/www/html/ && sudo chown -R ubuntu:ubuntu /var/www/html && rm -rf /tmp/deploy"

# 3. Test
curl -I http://54.163.193.39
```

## One-Liner Deployment

```bash
npm run build:ec2 && ssh myst-e1 "mkdir -p /tmp/deploy" && scp -r dist/* myst-e1:/tmp/deploy/ && ssh myst-e1 "sudo rm -rf /var/www/html/* && sudo cp -r /tmp/deploy/* /var/www/html/ && sudo chown -R ubuntu:ubuntu /var/www/html && rm -rf /tmp/deploy" && echo "✅ Deployed to http://54.163.193.39"
```

## Essential URLs
- **Website**: http://54.163.193.39
- **Domain**: https://devopswithmonzur.engineer
- **Resume**: http://54.163.193.39/resume.pdf

## Troubleshooting Commands

```bash
# Check if site is running
curl -I http://54.163.193.39

# Check nginx status
ssh myst-e1 "sudo systemctl status nginx"

# Check nginx logs
ssh myst-e1 "sudo tail -f /var/log/nginx/error.log"

# Fix permissions
ssh myst-e1 "sudo chown -R ubuntu:ubuntu /var/www/html"

# Restart nginx
ssh myst-e1 "sudo systemctl restart nginx"
```

## Build Options
- `npm run build:ec2` - EC2 deployment (recommended)
- `npm run build:github` - GitHub Pages
- `npm run build:docker` - Docker container
- `npm run build:universal` - Interactive choice
