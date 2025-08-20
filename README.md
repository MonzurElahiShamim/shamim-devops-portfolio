# Monzur Elahi Shamim - DevOps Portfolio

A modern, responsive portfolio website showcasing my DevOps engineering skills and experience.

## About

This portfolio highlights my journey as an aspiring DevOps Engineer with hands-on experience in containerization, cloud infrastructure, and automation. Built with modern web technologies to demonstrate both technical skills and design sensibility.

## Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds
- **Icons**: Lucide React icons
- **Animations**: Custom CSS animations and transitions

## Features

- 🎨 Modern dark theme with tech-inspired design
- 📱 Fully responsive across all devices
- ⚡ Fast loading with optimized assets
- 🎯 Smooth scrolling navigation
- 💫 Interactive animations and hover effects
- 🔧 Professional project showcase
- 📧 Contact integration

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Getting Started

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd shamim-devops-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production (EC2)
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint

### Build Scripts for Different Environments

- `./scripts/build-ec2.sh` - Build for EC2 deployment
- `./scripts/build-github.sh` - Build for GitHub Pages
- `./scripts/build-docker.sh` - Build Docker image
- `./deploy-local.sh` - Complete local-to-EC2 deployment
- `./deploy-server.sh` - Deploy from EC2 server (git pull)

## Deployment

### 🚀 Simplified Deployment (Recommended)

**Quick 30-second deployment:**

```bash
# Method 1: Deploy from local machine
./deploy-local.sh

# Method 2: Deploy from EC2 server
ssh myst-e1 "cd /home/ubuntu/shamim-devops-portfolio && ./deploy-server.sh"
```

**Daily workflow:**
1. Make changes locally
2. Commit and push: `git add . && git commit -m "update" && git push`
3. Deploy: `./deploy-local.sh`

### Environment-Specific Builds

```bash
# Build for EC2
./scripts/build-ec2.sh

# Build for GitHub Pages  
./scripts/build-github.sh

# Build Docker image
./scripts/build-docker.sh
```

### � Documentation

- **[Complete EC2 Deployment Guide](docs/EC2_DEPLOYMENT_GUIDE.md)** - Full deployment process
- **[Quick Deployment Reference](docs/EC2_QUICK_DEPLOY.md)** - 30-second commands
- **[Scripts README](scripts/README.md)** - All available scripts

### Live Deployment

- **🌐 Website**: http://54.163.193.39
- **🌐 Domain**: https://devopswithmonzur.engineer
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **AWS S3**: Upload build files to S3 bucket with static website hosting

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── HeroSection.tsx # Landing section
│   ├── AboutSection.tsx# About me section
│   └── ...             # Other sections
├── assets/             # Images and static files
├── lib/                # Utility functions
└── pages/              # Page components
```

## Contact

- **GitHub**: [MonzurElahiShamim](https://github.com/MonzurElahiShamim)
- **LinkedIn**: [monzur-elahi-shamim](https://www.linkedin.com/in/monzur-elahi-shamim/)

---

*Built with ❤️ by Monzur Elahi Shamim*