# 🚀 Monzur Elahi Shamim - DevOps Portfolio

A modern, responsive portfolio website showcasing DevOps engineering skills and experience with multiple deployment strategies and containerization support.

[![CI/CD Pipeline](https://github.com/MonzurElahiShamim/shamim-devops-portfolio/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/MonzurElahiShamim/shamim-devops-portfolio/actions/workflows/ci-cd.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://monzurs.me/shamim-devops-portfolio/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-blue)](https://hub.docker.com)

## 🌐 Live Deployments

| Platform | URL | Status |
|----------|-----|--------|
| **Primary Domain** | [monzurs.me](https://monzurs.me) | 🟢 Live (EC2) |
| **GitHub Pages** | [monzurs.me/shamim-devops-portfolio](https://monzurs.me/shamim-devops-portfolio/) | 🟢 Auto-deploy |
| **Alt Domain** | [devopswithmonzur.engineer](https://devopswithmonzur.engineer) | 🟢 Live (EC2) |

## 🛠️ Tech Stack

### **Frontend**
- **React 18** with TypeScript for type safety
- **Vite 7.x** for lightning-fast builds and HMR
- **Tailwind CSS** with custom design system
- **shadcn/ui** component library for consistency
- **Lucide React** icons with custom SVGs

### **DevOps & Infrastructure**
- **Docker** multi-stage builds with nginx
- **GitHub Actions** CI/CD pipeline
- **AWS EC2** production deployment
- **GitHub Pages** automatic deployment
- **nginx** reverse proxy and static serving

### **Development**
- **ESLint** with modern TypeScript rules
- **npm** package manager (standardized)
- **Git** with conventional commit messages
- **VS Code** development container support

## ✨ Features

### **User Experience**
- 🎨 Modern dark theme with tech-inspired design
- 📱 Fully responsive across all device sizes
- ⚡ Optimized loading with code splitting
- 🎯 Smooth scrolling navigation
- 💫 Interactive animations and micro-interactions
- 🔧 Professional project showcase with live demos
- 📧 Contact integration with social links

### **Developer Experience**
- 🐳 Full Docker containerization support
- 🚀 Multiple deployment strategies
- 🔄 Automated CI/CD pipeline
- 📊 Security scanning with Trivy
- 🧹 Automated code quality checks
- 📝 Comprehensive documentation

### **DevOps Features**
- 🔐 Security headers and best practices
- 💾 Asset optimization and caching
- 📈 Performance monitoring ready
- 🏗️ Infrastructure as Code ready
- 🔍 Health checks and monitoring
- 🌍 CDN-ready static assets

## 🚀 Quick Start

### **Prerequisites**
- **Node.js** 20+ (LTS recommended)
- **npm** 10+ (included with Node.js)
- **Docker** (optional, for containerization)

### **Local Development**

```bash
# Clone the repository
git clone https://github.com/MonzurElahiShamim/shamim-devops-portfolio.git
cd shamim-devops-portfolio

# Install dependencies
npm ci --legacy-peer-deps

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

### **Available Scripts**

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for GitHub Pages deployment |
| `npm run build:ec2` | Build for EC2 deployment (root path) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run lint:fix` | Auto-fix linting issues |

### **Docker Scripts**

| Script | Description |
|--------|-------------|
| `npm run docker:build` | Build Docker image |
| `npm run docker:run` | Run production container |
| `npm run docker:dev` | Run development container |
| `npm run docker:prod` | Run production with docker-compose |

## 🚀 Deployment Strategies

This portfolio supports **multiple deployment strategies** with automatic CI/CD:

### **1. 🔄 GitHub Pages (Automatic)**
```bash
# Automatic on every push to main branch
# ✅ Live at: https://monzurs.me/shamim-devops-portfolio/
```
- **Trigger**: Every `git push origin main`
- **Build**: Standard build with GitHub Pages routing
- **URL**: `monzurs.me/shamim-devops-portfolio/`
- **Status**: 🟢 Fully automated

### **2. 🖥️ EC2 Deployment (Manual)**
```bash
# On your EC2 instance
cd shamim-devops-portfolio
./scripts/deploy-ec2.sh
```
- **Trigger**: Manual deployment script
- **Build**: EC2-optimized build (root path)  
- **URL**: `monzurs.me` (root domain)
- **Features**: Automated pull, build, deploy, cleanup

### **3. 🐳 Docker Deployment**

#### **Quick Docker Run**
```bash
# Build and run locally
npm run docker:build
npm run docker:run

# Or with docker commands
docker build -t portfolio:latest .
docker run -p 3000:80 portfolio:latest
```

#### **Docker Compose**
```bash
# Production deployment
docker-compose up portfolio

# Development with live reload  
docker-compose up dev
```

#### **Production Docker (EC2/Cloud)**
```bash
# Pull and run on any Docker-enabled server
docker pull your-registry/portfolio:latest
docker run -d -p 80:80 --name portfolio portfolio:latest
```

### **4. 🔧 Manual Deployment Options**

#### **Static File Hosting**
```bash
npm run build
# Upload dist/ folder to any static host
```

#### **Nginx/Apache**
```bash
npm run build:ec2  # For root domain
sudo cp -r dist/* /var/www/html/
```

## 🔐 CI/CD Pipeline

The GitHub Actions workflow provides:

- ✅ **Automated Testing** - Lint and build validation
- ✅ **Security Scanning** - Trivy vulnerability scanning  
- ✅ **Docker Build & Test** - Container validation
- ✅ **Multi-environment Builds** - GitHub Pages + EC2 ready
- ✅ **Automated GitHub Pages** - Deploy on every push
- ✅ **Deployment Guides** - Automated EC2 instructions

## 📁 Project Structure

```
shamim-devops-portfolio/
├── 📂 .github/workflows/     # CI/CD automation
│   ├── ci.yml               # Basic CI pipeline  
│   └── ci-cd.yml            # Full deployment pipeline
├── 📂 docs/                 # Documentation
│   ├── CONTRIBUTING.md      # Contribution guidelines
│   └── DEPLOYMENT.md        # Deployment guide
├── 📂 public/               # Static assets
│   ├── favicon.ico         # Site icons
│   ├── profile-photo.jpg   # Profile image
│   └── resume.pdf          # Resume download
├── 📂 scripts/              # Automation scripts
│   ├── deploy-ec2.sh       # EC2 deployment
│   ├── create-aws-infrastructure.sh
│   └── monitor-portfolio.sh
├── 📂 src/                  # Source code
│   ├── 📂 components/       # React components
│   │   ├── 📂 ui/          # shadcn/ui components
│   │   ├── HeroSection.tsx  # Landing section
│   │   ├── AboutSection.tsx # About section
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── ContactSection.tsx
│   ├── 📂 assets/           # Images and media
│   ├── 📂 lib/              # Utilities
│   ├── 📂 hooks/            # Custom React hooks
│   └── 📂 pages/            # Page components
├── 🐳 Dockerfile            # Container definition
├── 🐳 docker-compose.yml    # Container orchestration
├── 🌐 nginx.conf            # Nginx configuration
├── ⚙️ vite.config.ts        # Build configuration
└── 📦 package.json          # Dependencies & scripts
```

## 🔧 Configuration

### **Environment Variables**
- `DEPLOY_TARGET=ec2` - Build for EC2 (root path)
- `NODE_ENV=production` - Production build mode

### **Build Outputs**
- **GitHub Pages**: `/shamim-devops-portfolio/` base path
- **EC2**: `/` root path  
- **Docker**: nginx-served static files

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for detailed guidelines.

## 📊 Performance & Security

- ⚡ **Lighthouse Score**: 95+ performance
- 🔒 **Security Headers**: CSP, HSTS, X-Frame-Options
- 📦 **Bundle Size**: Optimized with code splitting
- 🖼️ **Image Optimization**: WebP with fallbacks
- 💾 **Caching Strategy**: 1-year asset caching
- 🔍 **SEO Ready**: Meta tags, sitemap, robots.txt

## 📞 Contact & Links

- 🌐 **Portfolio**: [monzurs.me](https://monzurs.me)
- 💼 **LinkedIn**: [monzur-elahi-shamim](https://www.linkedin.com/in/monzur-elahi-shamim/)
- 💻 **GitHub**: [MonzurElahiShamim](https://github.com/MonzurElahiShamim)
- 📧 **Email**: Available on portfolio contact page
- 📄 **Resume**: [Download PDF](https://monzurs.me/resume.pdf)

## 📄 License

This project is **open source** and available under the [MIT License](LICENSE).

---

<div align="center">

**🚀 Built with modern DevOps practices by [Monzur Elahi Shamim](https://monzurs.me)**

*Showcasing containerization, CI/CD, and cloud deployment expertise*

</div>