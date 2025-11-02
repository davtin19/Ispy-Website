
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black tracking-wider text-white">
            i<span className="text-red-500">Spy</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" onClick={handleNavClick} className="text-gray-300 hover:text-red-500 transition-colors duration-300">About</a>
            <a href="#features" onClick={handleNavClick} className="text-gray-300 hover:text-red-500 transition-colors duration-300">Features</a>
            <a href="#experience" onClick={handleNavClick} className="text-gray-300 hover:text-red-500 transition-colors duration-300">Experience</a>
            <a href="#roadmap" onClick={handleNavClick} className="text-gray-300 hover:text-red-500 transition-colors duration-300">Roadmap</a>
            <a href="#team" onClick={handleNavClick} className="text-gray-300 hover:text-red-500 transition-colors duration-300">Team</a>
          </nav>
          <a href="#contact" onClick={handleNavClick} className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
