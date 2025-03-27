
import { Coffee, Clock, CalendarDays } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619546952812-520e98064a52?q=80&w=2070')] bg-cover bg-center opacity-15"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block fade-in">
            <div className="bg-cafe-gold/10 text-cafe-gold rounded-full px-4 py-1 text-xs inline-flex items-center">
              <CalendarDays className="h-3 w-3 mr-1" />
              <span>ESTABLISHED 2010</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-tight tracking-tight fade-in-delay-1">
            Artisanal Cakes <br className="hidden md:block" />
            <span className="text-cafe-gold">&</span> Premium Coffee
          </h1>
          
          <p className="text-cafe-dark/80 max-w-2xl mx-auto mb-10 text-lg fade-in-delay-2">
            A charming café offering handcrafted cakes, artisanal pastries, and specialty coffee in a warm, inviting atmosphere.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 fade-in-delay-3">
            <a 
              href="#menu" 
              className="bg-cafe-brown text-white px-8 py-3 rounded-md hover:bg-cafe-dark transition-colors duration-300 w-full sm:w-auto text-center"
            >
              View Menu
            </a>
            <a 
              href="#contact" 
              className="border border-cafe-gold text-cafe-dark px-8 py-3 rounded-md hover:bg-cafe-gold/10 transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Find Us
            </a>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 slide-up">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border border-cafe-gold/10 shadow-sm hover:border-cafe-gold/30 transition-all duration-300">
            <div className="w-10 h-10 bg-cafe-gold/10 rounded-full flex items-center justify-center mb-4">
              <Coffee className="h-5 w-5 text-cafe-gold" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Premium Quality</h3>
            <p className="text-cafe-dark/70 text-sm">
              We source only the finest ingredients and beans for our cakes and coffee.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border border-cafe-gold/10 shadow-sm hover:border-cafe-gold/30 transition-all duration-300">
            <div className="w-10 h-10 bg-cafe-gold/10 rounded-full flex items-center justify-center mb-4">
              <CalendarDays className="h-5 w-5 text-cafe-gold" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Fresh Daily</h3>
            <p className="text-cafe-dark/70 text-sm">
              All our cakes and pastries are baked fresh every morning.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border border-cafe-gold/10 shadow-sm hover:border-cafe-gold/30 transition-all duration-300">
            <div className="w-10 h-10 bg-cafe-gold/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-5 w-5 text-cafe-gold" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Cozy Ambiance</h3>
            <p className="text-cafe-dark/70 text-sm">
              A warm, inviting space for you to enjoy your favorite treats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
