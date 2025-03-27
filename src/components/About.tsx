
import { Cake, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070" 
                alt="Inside Cake N Coffee cafe" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-cafe-gold/10"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white p-4 md:p-6 rounded-lg shadow-lg w-40 md:w-64 slide-up-delay-1">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-cafe-gold/10 rounded-full flex items-center justify-center mr-3">
                  <Coffee className="h-4 w-4 text-cafe-gold" />
                </div>
                <span className="text-cafe-brown font-serif font-medium">Since 2010</span>
              </div>
              <p className="text-sm text-cafe-dark/70">Bringing smiles with our cakes and coffee for over a decade.</p>
            </div>
          </div>
          
          <div className="lg:pl-6">
            <div className="mb-6 slide-up">
              <div className="bg-cafe-gold/10 text-cafe-gold rounded-full px-4 py-1 text-xs inline-flex items-center">
                <Cake className="h-3 w-3 mr-1" />
                <span>OUR STORY</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 slide-up-delay-1">
              A Passion for <span className="text-cafe-gold">Artisanal</span> Baking & Coffee
            </h2>
            
            <div className="slide-up-delay-2">
              <p className="text-cafe-dark/80 mb-6">
                Cake N Coffee was founded in 2010 with a simple mission: to create a warm, inviting space where people could enjoy exceptional cakes and premium coffee. What started as a small family business has grown into a beloved community spot known for its quality and charm.
              </p>
              
              <p className="text-cafe-dark/80 mb-6">
                Our master baker and coffee specialist work tirelessly to perfect each recipe, using only the finest ingredients sourced locally whenever possible. We believe in traditional methods combined with innovative techniques to create memorable flavors.
              </p>
              
              <div className="fancy-separator my-8">
                <span>♦</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2 text-cafe-brown">Our Vision</h3>
                  <p className="text-cafe-dark/70 text-sm">
                    To create a welcoming haven where the art of baking and coffee-making brings people together.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2 text-cafe-brown">Our Promise</h3>
                  <p className="text-cafe-dark/70 text-sm">
                    Quality ingredients, handcrafted with care, served with a smile – every single day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
