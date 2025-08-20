#!/bin/bash

# AWS EC2 Infrastructure Setup Script with Enhanced Error Handling
# This script creates the necessary AWS resources for portfolio deployment

set -euo pipefail

# Error handling function
handle_error() {
    echo "❌ Error occurred in AWS infrastructure script at line $1"
    echo "🔄 Please check your AWS credentials and permissions"
    exit 1
}

# Set up error trap
trap 'handle_error $LINENO' ERR

# Configuration
REGION="us-east-1"
INSTANCE_TYPE="t3.micro"
AMI_ID="ami-0c7217cdde317cfec"  # Ubuntu 22.04 LTS in us-east-1
KEY_NAME="portfolio-key"
SECURITY_GROUP_NAME="portfolio-sg"
INSTANCE_NAME="portfolio-server"

# Validate AWS CLI is installed and configured
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    exit 1
fi

if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS CLI is not configured. Please run 'aws configure' first."
    exit 1
fi

echo "🚀 Setting up AWS infrastructure for portfolio deployment..."

# Check if AWS CLI is installed and configured
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    echo "📖 Instructions: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
    exit 1
fi

# Check AWS configuration
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS CLI is not configured. Please run 'aws configure' first."
    exit 1
fi

echo "✅ AWS CLI is configured"

# Create key pair if it doesn't exist
echo "🔑 Creating SSH key pair..."
if ! aws ec2 describe-key-pairs --key-names $KEY_NAME --region $REGION &> /dev/null; then
    aws ec2 create-key-pair \
        --key-name $KEY_NAME \
        --region $REGION \
        --query 'KeyMaterial' \
        --output text > ${KEY_NAME}.pem
    chmod 400 ${KEY_NAME}.pem
    echo "✅ Key pair created: ${KEY_NAME}.pem"
else
    echo "ℹ️  Key pair already exists"
fi

# Create security group
echo "🔒 Creating security group..."
if ! SECURITY_GROUP_ID=$(aws ec2 create-security-group \
    --group-name "$SECURITY_GROUP_NAME" \
    --description "Security group for portfolio server" \
    --region "$REGION" \
    --query 'GroupId' \
    --output text 2>/dev/null); then
    
    # If creation failed, try to get existing one
    if ! SECURITY_GROUP_ID=$(aws ec2 describe-security-groups \
        --group-names "$SECURITY_GROUP_NAME" \
        --region "$REGION" \
        --query 'SecurityGroups[0].GroupId' \
        --output text 2>/dev/null); then
        echo "❌ Failed to create or find security group: $SECURITY_GROUP_NAME"
        exit 1
    fi
    echo "ℹ️  Using existing security group"
else
    echo "✅ Created new security group"
fi

echo "✅ Security group: $SECURITY_GROUP_ID"

# Add security group rules with error handling
echo "🌐 Configuring security group rules..."

# SSH access
if ! aws ec2 authorize-security-group-ingress \
    --group-id "$SECURITY_GROUP_ID" \
    --protocol tcp \
    --port 22 \
    --cidr 0.0.0.0/0 \
    --region "$REGION" 2>/dev/null; then
    echo "ℹ️  SSH rule may already exist"
fi
    --cidr 0.0.0.0/0 \
    --region $REGION 2>/dev/null || echo "SSH rule already exists"

# HTTP access
aws ec2 authorize-security-group-ingress \
    --group-id $SECURITY_GROUP_ID \
    --protocol tcp \
    --port 80 \
    --cidr 0.0.0.0/0 \
    --region $REGION 2>/dev/null || echo "HTTP rule already exists"

# HTTPS access
aws ec2 authorize-security-group-ingress \
    --group-id $SECURITY_GROUP_ID \
    --protocol tcp \
    --port 443 \
    --cidr 0.0.0.0/0 \
    --region $REGION 2>/dev/null || echo "HTTPS rule already exists"

# Development server (optional)
aws ec2 authorize-security-group-ingress \
    --group-id $SECURITY_GROUP_ID \
    --protocol tcp \
    --port 8080 \
    --cidr 0.0.0.0/0 \
    --region $REGION 2>/dev/null || echo "Port 8080 rule already exists"

# Create user data script for initial setup
USER_DATA=$(cat << 'EOF'
#!/bin/bash
apt update
apt install -y git curl

# Create portfolio user
useradd -m -s /bin/bash portfolio
usermod -aG sudo portfolio

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
usermod -aG docker ubuntu
usermod -aG docker portfolio

# Install Docker Compose
apt install -y docker-compose-plugin

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Create log directory
mkdir -p /var/log/portfolio
chown ubuntu:ubuntu /var/log/portfolio
EOF
)

# Launch EC2 instance
echo "🚀 Launching EC2 instance..."
INSTANCE_ID=$(aws ec2 run-instances \
    --image-id $AMI_ID \
    --count 1 \
    --instance-type $INSTANCE_TYPE \
    --key-name $KEY_NAME \
    --security-group-ids $SECURITY_GROUP_ID \
    --user-data "$USER_DATA" \
    --region $REGION \
    --tag-specifications "ResourceType=instance,Tags=[{Key=Name,Value=$INSTANCE_NAME}]" \
    --query 'Instances[0].InstanceId' \
    --output text)

echo "✅ Instance launched: $INSTANCE_ID"

# Wait for instance to be running
echo "⏳ Waiting for instance to be running..."
aws ec2 wait instance-running --instance-ids $INSTANCE_ID --region $REGION

# Get instance public IP
PUBLIC_IP=$(aws ec2 describe-instances \
    --instance-ids $INSTANCE_ID \
    --region $REGION \
    --query 'Reservations[0].Instances[0].PublicIpAddress' \
    --output text)

echo "✅ Instance is running!"

# Allocate and associate Elastic IP
echo "🌐 Allocating Elastic IP..."
ALLOCATION_ID=$(aws ec2 allocate-address \
    --domain vpc \
    --region $REGION \
    --query 'AllocationId' \
    --output text)

ELASTIC_IP=$(aws ec2 describe-addresses \
    --allocation-ids $ALLOCATION_ID \
    --region $REGION \
    --query 'Addresses[0].PublicIp' \
    --output text)

aws ec2 associate-address \
    --instance-id $INSTANCE_ID \
    --allocation-id $ALLOCATION_ID \
    --region $REGION

echo "✅ Elastic IP allocated and associated: $ELASTIC_IP"

# Create output summary
echo ""
echo "🎉 AWS Infrastructure Setup Complete!"
echo ""
echo "📋 Summary:"
echo "  Region: $REGION"
echo "  Instance ID: $INSTANCE_ID"
echo "  Instance Type: $INSTANCE_TYPE"
echo "  Public IP: $ELASTIC_IP"
echo "  Security Group: $SECURITY_GROUP_ID"
echo "  SSH Key: ${KEY_NAME}.pem"
echo ""
echo "🔑 Connect to your instance:"
echo "  ssh -i ${KEY_NAME}.pem ubuntu@$ELASTIC_IP"
echo ""
echo "📝 Next steps:"
echo "  1. Wait 2-3 minutes for instance initialization"
echo "  2. Connect via SSH using the command above"
echo "  3. Clone your repository and run deployment scripts"
echo "  4. Update DNS records to point to: $ELASTIC_IP"
echo ""
echo "💰 Cost estimate: ~\$8-15/month for t3.micro"
echo ""
echo "🗑️  To clean up resources later:"
echo "  aws ec2 terminate-instances --instance-ids $INSTANCE_ID --region $REGION"
echo "  aws ec2 release-address --allocation-id $ALLOCATION_ID --region $REGION"
echo "  aws ec2 delete-security-group --group-id $SECURITY_GROUP_ID --region $REGION"
echo "  aws ec2 delete-key-pair --key-name $KEY_NAME --region $REGION"
