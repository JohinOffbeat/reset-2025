import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Why", href: "#why" },
  { label: "Trajectory", href: "#trajectory" },
  { label: "Life Wheel", href: "#life-wheel" },
  { label: "FAQ", href: "#faq" },
  { label: "Reserve", href: "#cta-final" }
];

export const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-heading text-xl text-accent-glow">
            RESET 2025
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-subheading text-muted-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <Button 
  variant="ember" 
  size="sm"
  onClick={() => window.open("https://rzp.io/rzp/reset-2025", "_blank")}
  className="text-xs px-4"
>
  RESERVE
</Button>

        </div>
      </div>
    </nav>
  );
};