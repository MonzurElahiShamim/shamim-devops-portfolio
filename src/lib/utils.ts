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
  
  // In production, check the hostname to determine deployment target
  if (import.meta.env.PROD) {
    const hostname = window.location.hostname;
    
    // If on GitHub Pages domain, use the repo path
    if (hostname.includes('github.io')) {
      return `/shamim-devops-portfolio/${cleanPath}`;
    }
  }
  
  // In development or EC2 deployment, use the path as-is with leading slash
  return `/${cleanPath}`;
}
