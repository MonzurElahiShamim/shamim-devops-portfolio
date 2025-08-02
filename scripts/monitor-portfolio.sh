#!/bin/bash

# Portfolio monitoring and maintenance script
set -e

CONTAINER_NAME="portfolio"
LOG_FILE="~/logs/portfolio-monitor.log"

echo "📊 Portfolio System Status - $(date)" | tee -a $LOG_FILE

echo "🐳 Docker Status:" | tee -a $LOG_FILE
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | grep -E "(NAMES|$CONTAINER_NAME)" | tee -a $LOG_FILE

echo "" | tee -a $LOG_FILE
echo "💾 System Resources:" | tee -a $LOG_FILE
echo "Memory Usage:" | tee -a $LOG_FILE
free -h | tee -a $LOG_FILE

echo "" | tee -a $LOG_FILE
echo "Disk Usage:" | tee -a $LOG_FILE
df -h / | tee -a $LOG_FILE

echo "" | tee -a $LOG_FILE
echo "🌐 Service Status:" | tee -a $LOG_FILE
systemctl is-active nginx | sed 's/^/Nginx: /' | tee -a $LOG_FILE
systemctl is-active docker | sed 's/^/Docker: /' | tee -a $LOG_FILE

echo "" | tee -a $LOG_FILE
echo "🔍 Application Health Check:" | tee -a $LOG_FILE
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Application is responding" | tee -a $LOG_FILE
else
    echo "❌ Application is not responding" | tee -a $LOG_FILE
    echo "Container logs (last 10 lines):" | tee -a $LOG_FILE
    docker logs $CONTAINER_NAME --tail 10 | tee -a $LOG_FILE
fi

echo "" | tee -a $LOG_FILE
echo "📈 Recent Activity:" | tee -a $LOG_FILE
echo "Nginx access log (last 5 entries):" | tee -a $LOG_FILE
sudo tail -5 /var/log/nginx/access.log | tee -a $LOG_FILE

echo "" | tee -a $LOG_FILE
echo "⚠️  Error Log Check:" | tee -a $LOG_FILE
ERROR_COUNT=$(sudo grep -c "error" /var/log/nginx/error.log 2>/dev/null || echo "0")
echo "Nginx errors in last 24h: $ERROR_COUNT" | tee -a $LOG_FILE

if [ "$ERROR_COUNT" -gt "0" ]; then
    echo "Recent errors:" | tee -a $LOG_FILE
    sudo tail -5 /var/log/nginx/error.log | tee -a $LOG_FILE
fi

echo "" | tee -a $LOG_FILE
echo "🧹 Cleanup Status:" | tee -a $LOG_FILE
UNUSED_IMAGES=$(docker images -f "dangling=true" -q | wc -l)
echo "Unused Docker images: $UNUSED_IMAGES" | tee -a $LOG_FILE

if [ "$UNUSED_IMAGES" -gt "5" ]; then
    echo "Cleaning up unused images..." | tee -a $LOG_FILE
    docker image prune -f | tee -a $LOG_FILE
fi

echo "" | tee -a $LOG_FILE
echo "📊 Performance Metrics:" | tee -a $LOG_FILE
echo "Load Average: $(uptime | awk -F'load average:' '{print $2}')" | tee -a $LOG_FILE
echo "Uptime: $(uptime -p)" | tee -a $LOG_FILE

echo "" | tee -a $LOG_FILE
echo "🔄 Status Check Complete - $(date)" | tee -a $LOG_FILE
echo "----------------------------------------" | tee -a $LOG_FILE
