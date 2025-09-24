# Simple Deployment Guide

## Recommended: Vercel (Easiest)

### Setup (5 minutes):
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import your repository
4. Deploy automatically

### Custom Domain:
1. Add `devopswithmonzur.engineer` in Vercel dashboard
2. Update DNS to point to Vercel

### That's it! Every push to main = automatic deployment.

## Alternative: Netlify

### Setup:
1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Build command: `npm run build`
4. Publish directory: `dist`

## Local Development:
```bash
npm install
npm run dev
```

## Build Test:
```bash
npm run build
npm run preview
```

No Docker, no EC2 setup, no complex scripts needed!