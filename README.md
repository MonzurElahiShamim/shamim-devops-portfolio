# Monzur Elahi Shamim - DevOps Portfolio

Professional portfolio showcasing DevOps engineering expertise with modern deployment strategies and containerization.

[![CI/CD Pipeline](https://github.com/MonzurElahiShamim/shamim-devops-portfolio/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/MonzurElahiShamim/shamim-devops-portfolio/actions/workflows/ci-cd.yml)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-monzurs.me-brightgreen)](https://monzurs.me)

## Live Demo
**🌐 [monzurs.me](https://monzurs.me)** | **📄 [GitHub Pages](https://monzurs.me/shamim-devops-portfolio/)**

## Tech Stack
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Infrastructure**: Docker, nginx, AWS EC2, GitHub Actions
- **DevOps**: CI/CD Pipeline, Multi-environment deployments
## Quick Start

```bash
# Clone and setup
git clone https://github.com/MonzurElahiShamim/shamim-devops-portfolio.git
cd shamim-devops-portfolio
npm ci --legacy-peer-deps

# Development
npm run dev              # Start dev server at localhost:5173

# Production builds  
npm run build           # GitHub Pages build
npm run build:ec2       # EC2 build (root path)

# Docker
npm run docker:build    # Build container
npm run docker:run      # Run container at localhost:3000
```

## Deployment

### GitHub Pages (Automatic)
Deploys automatically on every push to `main` branch → [monzurs.me/shamim-devops-portfolio](https://monzurs.me/shamim-devops-portfolio/)

### EC2 (Manual)
```bash
# On EC2 instance
./scripts/deploy-ec2.sh
```bash
# Build and run locally
npm run docker:build
npm run docker:run

# Or with docker commands
```

### Docker
```bash
# Build and run
docker build -t portfolio .
docker run -p 3000:80 portfolio

# Or with compose
docker-compose up portfolio
```

## Features
- Modern React 18 + TypeScript architecture
- Responsive design with Tailwind CSS
- Multi-environment deployment (GitHub Pages + EC2)
- Docker containerization with nginx
- Automated CI/CD pipeline with security scanning
- Professional portfolio showcase

## Project Structure
```
src/
├── components/    # React components & UI library
├── assets/       # Static files and images  
├── pages/        # Application pages
└── lib/          # Utilities and configurations
```

## Documentation
- **Deployment Guide**: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)
- **Contributing**: [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)

## Contact
- **Portfolio**: [monzurs.me](https://monzurs.me)
- **LinkedIn**: [monzur-elahi-shamim](https://www.linkedin.com/in/monzur-elahi-shamim/)
- **GitHub**: [MonzurElahiShamim](https://github.com/MonzurElahiShamim)

---
*Professional DevOps portfolio showcasing modern deployment strategies and containerization expertise.*