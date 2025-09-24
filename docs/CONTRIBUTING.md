# Contributing to Portfolio

## Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Making Changes

1. Make your changes in the `src/` directory
2. Test your changes locally with `npm run dev`
3. Run linting with `npm run lint`
4. Build to ensure no errors: `npm run build`

## Branch Strategy

- **main** - Development branch (Lovable.dev compatible)
- **production** - Production deployment branch (EC2)
- **gh-pages** - GitHub Pages deployment

## Deployment

- Changes to `main` can be deployed via Lovable.dev
- Production deployments use the `production` branch
- GitHub Pages uses the `gh-pages` branch