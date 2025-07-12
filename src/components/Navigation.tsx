import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'About',
    href: '#about'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" onClick={e => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }} className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer">Monzur Elahi Shamim</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} onClick={e => {
            e.preventDefault();
            handleNavClick(item.href);
          }} className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                {item.name}
              </a>)}
            <Button variant="hero" size="sm">
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="px-6 py-4 space-y-4">
              {navItems.map(item => <a key={item.name} href={item.href} onClick={e => {
            e.preventDefault();
            handleNavClick(item.href);
          }} className="block text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                  {item.name}
                </a>)}
              <Button variant="hero" size="sm" className="w-full">
                Download CV
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;