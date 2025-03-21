
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass-card' : 'py-6'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="font-display text-2xl font-medium">
          Elegance
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#reservations" className="nav-link">Reservations</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-restaurant-800 focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen py-4 border-b border-restaurant-100' : 'max-h-0'
        }`}
      >
        <div className="container flex flex-col space-y-4 px-4">
          <a href="#home" onClick={toggleMobileMenu} className="nav-link py-2">Home</a>
          <a href="#about" onClick={toggleMobileMenu} className="nav-link py-2">About</a>
          <a href="#menu" onClick={toggleMobileMenu} className="nav-link py-2">Menu</a>
          <a href="#gallery" onClick={toggleMobileMenu} className="nav-link py-2">Gallery</a>
          <a href="#reservations" onClick={toggleMobileMenu} className="nav-link py-2">Reservations</a>
          <a href="#contact" onClick={toggleMobileMenu} className="nav-link py-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
