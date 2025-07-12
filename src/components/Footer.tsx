import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/MonzurElahiShamim",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/monzur-elahi-shamim/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:monzurelahi.shamim@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="py-12 px-6 bg-gradient-secondary border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Monzur Elahi Shamim
            </h3>
            <p className="text-muted-foreground max-w-md">
              Aspiring DevOps Engineer passionate about automation, containerization, and cloud infrastructure.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            © {currentYear} Monzur Elahi Shamim. Built with 
            <Heart className="h-4 w-4 text-red-400" /> 
            and modern web technologies.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;