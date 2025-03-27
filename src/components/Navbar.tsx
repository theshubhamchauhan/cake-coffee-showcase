
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Menu', href: '#menu' },
    { title: 'Hours', href: '#hours' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a 
          href="#home" 
          className="text-cafe-dark font-serif text-2xl md:text-3xl font-medium tracking-tight"
        >
          Cake <span className="text-cafe-gold font-light italic">N</span> Coffee
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-cafe-dark hover:text-cafe-gold transition-colors duration-300 text-sm tracking-wide"
            >
              {link.title}
            </a>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-cafe-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 glass md:hidden py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-cafe-dark hover:text-cafe-gold transition-colors duration-300 py-2 text-sm tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
