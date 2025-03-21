
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPos = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrollPos * 0.2}px)`;
      heroRef.current.style.opacity = `${1 - scrollPos * 0.002}`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[650px] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514516345957-556ca7c90a34?q=80&w=1740&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      
      {/* Content */}
      <div className="relative h-full container flex flex-col justify-center items-start text-white">
        <div className="max-w-lg pt-20" ref={heroRef}>
          <div className="overflow-hidden mb-2">
            <p className="font-serif italic text-lg md:text-xl animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>Welcome to</p>
          </div>
          
          <div className="overflow-hidden mb-4">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium animate-fade-up opacity-0 leading-[1.1] py-1" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              Elegance
            </h1>
          </div>
          
          <div className="overflow-hidden mb-6">
            <p className="text-lg md:text-xl leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              Experience fine dining in an atmosphere of sophisticated comfort, with seasonally inspired cuisine and impeccable service.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <a href="#menu" className="btn-primary">
              Explore Menu
            </a>
            <a href="#reservations" className="px-6 py-3 border border-white/50 hover:bg-white/10 rounded-md transition-all duration-300 backdrop-blur-sm">
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 animate-bounce">
        <span className="text-sm font-light mb-2">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
