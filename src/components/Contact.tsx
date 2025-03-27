
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-cafe-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-6 slide-up">
            <div className="bg-cafe-gold/10 text-cafe-gold rounded-full px-4 py-1 text-xs inline-flex items-center mx-auto">
              <MapPin className="h-3 w-3 mr-1" />
              <span>FIND US</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 slide-up-delay-1">
            Visit Our <span className="text-cafe-gold">Cafe</span>
          </h2>
          
          <p className="text-cafe-dark/80 slide-up-delay-2">
            We're conveniently located in the heart of the city. Stop by for a warm cup of coffee 
            and a slice of cake in our cozy atmosphere.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 slide-up-delay-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-cafe-gold/10 h-[400px]">
              {/* Replace with your actual map embed or a map image */}
              <img 
                src="https://images.unsplash.com/photo-1559769671-42d134bfd2d9?q=80&w=1974" 
                alt="Cafe location map" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-2 slide-up-delay-3">
            <div className="bg-white rounded-xl shadow-sm border border-cafe-gold/10 p-8">
              <h3 className="text-xl font-serif text-cafe-brown mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-cafe-gold/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-cafe-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-cafe-dark/70 text-sm">
                      123 Bakery Street<br />
                      Downtown, City 10001<br />
                      Country
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-cafe-gold/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Phone className="h-5 w-5 text-cafe-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-cafe-dark/70 text-sm">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-cafe-dark/60 text-xs mt-1">
                      Available during business hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-cafe-gold/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Mail className="h-5 w-5 text-cafe-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-cafe-dark/70 text-sm">
                      hello@cakencoffee.com
                    </p>
                    <p className="text-cafe-dark/60 text-xs mt-1">
                      For inquiries and special orders
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-cafe-gold/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Clock className="h-5 w-5 text-cafe-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Hours</h4>
                    <p className="text-cafe-dark/70 text-sm">
                      Monday - Thursday: 7:00 AM - 7:00 PM<br />
                      Friday - Saturday: 7:00 AM - 9:00 PM<br />
                      Sunday: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
