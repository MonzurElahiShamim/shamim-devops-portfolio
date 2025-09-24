# Monzur Elahi Shamim - DevOps Portfolio

A modern, responsive portfolio website showcasing my DevOps engineering skills and experience.

## About

This portfolio highlights my journey as an aspiring DevOps Engineer with hands-on experience in containerization, cloud infrastructure, and automation. Built with modern web technologies to demonstrate both technical skills and design sensibility.

## Technologies Used

- **Frontend**: React 18 with TypeScript
- **Package Manager**: npm (standardized for consistency)
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

- Node.js (v20 or higher)
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build  
- `npm run lint` - Run ESLint

## Deployment

This portfolio uses a simple branch-based deployment strategy:

- **main** - Development branch (Lovable.dev compatible)
- **production** - EC2 deployment branch  
- **gh-pages** - GitHub Pages deployment

### For Developers
Work on the `main` branch. It's optimized for development and compatible with Lovable.dev.

### For Deployments
See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for environment-specific deployment instructions.

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