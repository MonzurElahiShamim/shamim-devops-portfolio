import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Use root path for production (EC2), subpath for GitHub Pages
  const base = process.env.DEPLOY_TARGET === 'ec2' ? '/' : '/shamim-devops-portfolio/';
  
  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
      // Plugin to remove GitHub Pages script for EC2 builds
      process.env.DEPLOY_TARGET === 'ec2' && {
        name: 'remove-github-pages-script',
        transformIndexHtml(html: string) {
          return html.replace(
            /<!-- GitHub Pages SPA script[\s\S]*?<\/script>/,
            '<!-- GitHub Pages script removed for EC2 deployment -->'
          );
        }
      }
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
