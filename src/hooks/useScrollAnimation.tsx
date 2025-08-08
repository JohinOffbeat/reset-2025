import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in sections
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    fadeInSections.forEach((section) => {
      observer.observe(section);
    });

    // Sticky CTA visibility
    const stickyCTA = document.getElementById('sticky-cta');
    const heroSection = document.getElementById('hero');
    const ctaSection = document.getElementById('cta-final');

    const handleScroll = () => {
      if (stickyCTA && heroSection && ctaSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const ctaTop = ctaSection.offsetTop;
        const scrollY = window.scrollY;

        if (scrollY > heroBottom && scrollY < ctaTop - 200) {
          stickyCTA.classList.remove('hidden');
        } else {
          stickyCTA.classList.add('hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};