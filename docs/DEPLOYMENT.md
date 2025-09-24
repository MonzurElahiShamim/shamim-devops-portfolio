# Deployment Guide

## Main Branch (Development)
- Compatible with Lovable.dev
- Uses GitHub Pages URLs in HTML meta tags
- Simple `npm run dev` and `npm run build`

## Production Branch (EC2)
- Optimized for monzurs.me domain
- Simplified deployment process
- Single `npm run deploy` command

## GitHub Pages Branch
- Automatic deployment from `gh-pages` branch
- Uses GitHub Actions for deployment
- Compatible with main branch build output

## Quick Deployment

### Development/Testing
```bash
npm run build
npm run preview
```

### Production (EC2)
```bash
git checkout production
npm run deploy
```

### GitHub Pages
```bash
git checkout gh-pages
npm run build
# GitHub Actions handles the rest
```