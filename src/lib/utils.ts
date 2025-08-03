import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the correct path for assets based on the environment
 * In development: returns the path as-is
 * In production (GitHub Pages): adds the base path prefix
 * In production (EC2): uses root path
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, check if this is GitHub Pages deployment
  if (import.meta.env.PROD) {
    // Check if this is a GitHub Pages build (has the base path in meta tags)
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const isGitHubPages = canonicalLink?.getAttribute('href')?.includes('github.io');
    
    if (isGitHubPages) {
      return `/shamim-devops-portfolio/${cleanPath}`;
    }
  }
  
  // In development or EC2 deployment, use the path as-is with leading slash
  return `/${cleanPath}`;
}
