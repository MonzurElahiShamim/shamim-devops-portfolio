import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Trophy, Target } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { getAssetPath } from "@/lib/utils";
import { memo, useMemo } from "react";

const HeroSection = memo(() => {
  // Memoize the background style to prevent recreation on every render
  const backgroundStyle = useMemo(() => ({
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={backgroundStyle}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Monzur Elahi</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Shamim
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Aspiring DevOps Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            DevOps enthusiast skilled in containerization, cloud infrastructure, and automation, with experience deploying scalable data platforms and building CI/CD pipelines to streamline operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto"
              asChild
            >
              <a href={getAssetPath("resume.pdf")} download="Monzur_Elahi_Shamim_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button 
              variant="glow" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/MonzurElahiShamim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="h-8 w-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/monzur-elahi-shamim/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="https://www.hackerrank.com/profile/monzureelahi032" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Trophy className="h-8 w-8" />
            </a>
            <a 
              href="https://leetcode.com/u/ltcdr032/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Target className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;