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

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

#### Environment-Specific Build Scripts

- `npm run build:ec2` - Build and deploy to EC2 (includes deployment instructions)
- `npm run build:github` - Build for GitHub Pages with correct base path
- `npm run build:docker` - Build Docker image and run container
- `npm run build:universal` - Interactive script to choose deployment target

## Deployment

The project supports multiple deployment environments with dedicated build scripts:

### EC2 Deployment
```bash
npm run build:ec2
# Follow the on-screen instructions to copy files to /var/www/html
```

### GitHub Pages
```bash
npm run build:github
# Builds with correct base path for GitHub Pages
```

### Docker Deployment
```bash
npm run build:docker
# Builds and runs the Docker container
```

### Other Hosting Services
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