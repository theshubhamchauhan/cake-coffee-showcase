
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cafe-dark text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center text-3xl font-serif mb-4">
              <span className="text-white">Cake</span>
              <span className="text-cafe-gold font-light italic mx-1">N</span>
              <span className="text-white">Coffee</span>
            </div>
            
            <p className="text-white/70 text-sm mb-6">
              A charming café offering handcrafted cakes and premium coffee in a warm,
              inviting atmosphere. Visit us for a delightful experience.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cafe-gold/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cafe-gold/20 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cafe-gold/20 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-cafe-gold transition-colors duration-300 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-cafe-gold transition-colors duration-300 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-white/70 hover:text-cafe-gold transition-colors duration-300 text-sm">
                  Menu
                </a>
              </li>
              <li>
                <a href="#hours" className="text-white/70 hover:text-cafe-gold transition-colors duration-300 text-sm">
                  Hours
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-cafe-gold transition-colors duration-300 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-white">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to our newsletter for updates on seasonal menus, events, and special offers.
            </p>
            
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:border-cafe-gold transition-colors duration-300"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-cafe-gold hover:bg-cafe-gold/90 text-cafe-dark font-medium py-2 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                <Coffee className="h-4 w-4 mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>© {currentYear} Cake N Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
