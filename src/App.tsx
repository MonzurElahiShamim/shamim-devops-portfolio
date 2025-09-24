import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Determine the correct basename based on build configuration
const getBasename = () => {
  // In production, check the current hostname to determine deployment target
  if (import.meta.env.PROD) {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    // Only use subpath for GitHub Pages with the specific path
    if (hostname.includes('github.io') || pathname.startsWith('/shamim-devops-portfolio')) {
      return "/shamim-devops-portfolio";
    }
    
    // For root domains (monzurs.me, EC2 IP, custom domains), use root path
    return "";
  }
  
  // In development, use root path
  return "";
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={getBasename()}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
