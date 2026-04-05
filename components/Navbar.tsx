'use client';

import { useState, useEffect } from 'react';
import { Phone, Facebook, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition to solid when scrolled past the top bar (approx 40px)
      setIsScrolled(window.scrollY > 40);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'fixed top-0 left-0 bg-asphalt-black shadow-lg py-3'
            : 'absolute top-0 left-0 py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo - Left */}
          <div className="font-black text-2xl tracking-tighter uppercase text-white relative z-50">
            JJ's <span className="text-slime-green">Lawncare</span>
          </div>
          
          {/* Desktop Links - Centered */}
          <div className="hidden md:flex items-center gap-8 font-black uppercase tracking-widest text-sm text-white absolute left-1/2 transform -translate-x-1/2">
            <a href="#services" className="hover:text-slime-green transition-colors">Services</a>
            <a href="#about" className="hover:text-slime-green transition-colors">About</a>
            <a href="#contact" className="hover:text-slime-green transition-colors">Estimate</a>
          </div>

          {/* Desktop Links - Right */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://facebook.com/JJslawn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-slime-green transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="tel:+17547792837"
              className="flex items-center gap-2 text-white font-bold tracking-wider hover:text-slime-green transition-colors"
            >
              <Phone className="w-5 h-5 text-slime-green" />
              (754) 779-2837
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 text-slime-green hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-asphalt-black/95 backdrop-blur-lg transition-transform duration-300 ease-in-out flex flex-col justify-center items-center md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-10 font-black uppercase tracking-widest text-3xl text-slime-green">
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors transform hover:scale-110">Services</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors transform hover:scale-110">About</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors transform hover:scale-110">Estimate</a>
          
          <div className="w-24 h-1 bg-white/10 my-4"></div>
          
          <a href="tel:+17547792837" className="flex items-center gap-3 text-white text-xl hover:text-slime-green transition-colors">
            <Phone className="w-6 h-6 text-slime-green" />
            (754) 779-2837
          </a>
          <a href="https://facebook.com/JJslawn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slime-green transition-colors mt-2">
            <Facebook className="w-8 h-8" />
          </a>
        </div>
      </div>
    </>
  );
}
