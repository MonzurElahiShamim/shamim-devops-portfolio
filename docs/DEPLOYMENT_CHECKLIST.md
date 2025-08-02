# EC2 Deployment Checklist

## Pre-Deployment Checklist

### AWS Setup
- [ ] AWS Account created and configured
- [ ] EC2 instance launched (t3.micro/t3.small recommended)
- [ ] Security Group configured (ports 22, 80, 443, 8080)
- [ ] SSH Key Pair created and downloaded
- [ ] Elastic IP allocated and associated (recommended)

### Domain Setup (Optional but Recommended)
- [ ] Domain name purchased
- [ ] DNS A records configured to point to EC2 IP
- [ ] Subdomain configured (www)

## Deployment Steps

### 1. Initial EC2 Setup
```bash
# Connect to EC2
ssh -i your-key.pem ubuntu@your-ec2-ip

# Clone repository
git clone https://github.com/MonzurElahiShamim/shamim-devops-portfolio.git
cd shamim-devops-portfolio

# Run setup script
./scripts/setup-ec2.sh

# Logout and login again for Docker permissions
exit
ssh -i your-key.pem ubuntu@your-ec2-ip
cd shamim-devops-portfolio
```

### 2. Deploy Application
```bash
# Deploy with domain (replace with your domain)
./scripts/deploy-ec2.sh your-domain.com

# Or deploy with IP only
./scripts/deploy-ec2.sh $(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)
```

### 3. Setup SSL Certificate
```bash
# Install SSL certificate (replace with your domain)
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Test SSL renewal
sudo certbot renew --dry-run
```

### 4. Verify Deployment
- [ ] Application accessible via HTTP
- [ ] Application accessible via HTTPS (if SSL configured)
- [ ] All pages load correctly
- [ ] Contact form works (if backend configured)
- [ ] Performance is acceptable

## Post-Deployment Checklist

### Security
- [ ] Firewall configured and enabled
- [ ] SSH key authentication only (password disabled)
- [ ] Regular security updates enabled
- [ ] SSL certificate installed and auto-renewal configured
- [ ] Security headers configured in Nginx

### Monitoring
- [ ] Basic monitoring script setup
- [ ] Log rotation configured
- [ ] Backup strategy implemented
- [ ] Alerts configured (optional)

### Performance
- [ ] Gzip compression enabled
- [ ] Static file caching configured
- [ ] CDN setup (optional)
- [ ] Performance testing completed

### Maintenance
- [ ] Update script created and tested
- [ ] Backup strategy implemented
- [ ] Monitoring cron jobs setup
- [ ] Documentation updated

## Useful Commands

### Application Management
```bash
# Check application status
docker ps
./scripts/monitor-portfolio.sh

# View application logs
docker logs portfolio

# Restart application
docker restart portfolio

# Update application
git pull origin main
./scripts/deploy-ec2.sh your-domain.com
```

### System Management
```bash
# Check system resources
htop
df -h
free -h

# Check nginx status
sudo systemctl status nginx
sudo nginx -t

# View nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### SSL Management
```bash
# Check SSL certificates
sudo certbot certificates

# Renew SSL certificates
sudo certbot renew

# Test SSL configuration
curl -I https://your-domain.com
```

## Troubleshooting

### Common Issues

1. **Application not accessible**
   - Check security group allows ports 80/443
   - Verify container is running: `docker ps`
   - Check nginx configuration: `sudo nginx -t`

2. **SSL certificate issues**
   - Ensure domain points to correct IP
   - Check DNS propagation: `nslookup your-domain.com`
   - Verify certbot installation

3. **Performance issues**
   - Check system resources: `htop`
   - Review container logs: `docker logs portfolio`
   - Monitor nginx logs for errors

4. **Docker issues**
   - Restart Docker service: `sudo systemctl restart docker`
   - Clean up resources: `docker system prune -f`

## Quick Commands Reference

```bash
# Full deployment from scratch
./scripts/setup-ec2.sh
./scripts/deploy-ec2.sh your-domain.com

# Quick update
git pull && ./scripts/deploy-ec2.sh your-domain.com

# Health check
./scripts/monitor-portfolio.sh

# Emergency restart
docker restart portfolio && sudo systemctl restart nginx
```

## Cost Optimization Tips

1. Use t3.micro for free tier eligibility
2. Setup CloudWatch for resource monitoring
3. Use Elastic IP to avoid charges for IP changes
4. Regular cleanup of Docker images and logs
5. Monitor data transfer usage

## Security Best Practices

1. Keep system packages updated
2. Use strong SSH keys
3. Disable password authentication
4. Regular security audits
5. Monitor access logs
6. Use HTTPS only
7. Implement proper backup strategy

Remember to replace all placeholder values (domains, IPs, etc.) with your actual values!
