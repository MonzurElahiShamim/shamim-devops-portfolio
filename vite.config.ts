import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Define URLs based on deployment target
  const isGitHubPages = mode === 'github-pages';
  const baseUrl = isGitHubPages 
    ? 'https://MonzurElahiShamim.github.io/shamim-devops-portfolio/'
    : 'https://devopswithmonzur.engineer/';
  const imageUrl = isGitHubPages
    ? 'https://MonzurElahiShamim.github.io/shamim-devops-portfolio/profile-photo.jpg'
    : 'https://devopswithmonzur.engineer/assets/profile-photo-D7i5VI1V.jpg';

  return {
    // Set base path based on deployment target
    base: isGitHubPages ? '/shamim-devops-portfolio/' : '/',
    
    // Define environment variables for HTML template
    define: {
      __CANONICAL_URL__: JSON.stringify(baseUrl),
      __OG_IMAGE_URL__: JSON.stringify(imageUrl),
    },
    
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
