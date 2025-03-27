
import { Clock, CalendarDays } from 'lucide-react';

const businessHours = [
  { day: 'Monday', hours: '7:00 AM - 7:00 PM' },
  { day: 'Tuesday', hours: '7:00 AM - 7:00 PM' },
  { day: 'Wednesday', hours: '7:00 AM - 7:00 PM' },
  { day: 'Thursday', hours: '7:00 AM - 7:00 PM' },
  { day: 'Friday', hours: '7:00 AM - 9:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 9:00 PM' },
  { day: 'Sunday', hours: '8:00 AM - 6:00 PM' },
];

const Hours = () => {
  return (
    <section id="hours" className="py-20 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1974')] bg-cover bg-fixed bg-center opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 slide-up">
              <div className="bg-cafe-gold/10 text-cafe-gold rounded-full px-4 py-1 text-xs inline-flex items-center mx-auto">
                <Clock className="h-3 w-3 mr-1" />
                <span>BUSINESS HOURS</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 slide-up-delay-1">
              When to <span className="text-cafe-gold">Visit</span> Us
            </h2>
            
            <p className="text-cafe-dark/80 slide-up-delay-2">
              We're open seven days a week to serve you our artisanal cakes and premium coffee.
              Extended hours on weekends for your convenience.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-sm border border-cafe-gold/10 p-8 md:p-10 slide-up-delay-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif text-cafe-brown mb-6 flex items-center">
                  <CalendarDays className="h-5 w-5 mr-2 text-cafe-gold" />
                  Weekly Schedule
                </h3>
                
                <div className="space-y-4">
                  {businessHours.map((item) => (
                    <div 
                      key={item.day} 
                      className="flex justify-between items-center pb-2 border-b border-cafe-gold/10 hover:border-cafe-gold/30 transition-colors duration-300"
                    >
                      <span className="font-medium">{item.day}</span>
                      <span className="text-cafe-dark/70">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif text-cafe-brown mb-6 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-cafe-gold" />
                    Special Notes
                  </h3>
                  
                  <div className="space-y-4 text-cafe-dark/80">
                    <p>
                      We open our doors early for those who need their morning coffee fix. 
                      Our kitchen starts baking at 5:00 AM to ensure everything is fresh for your arrival.
                    </p>
                    <p>
                      The last cake orders are taken 30 minutes before closing, and the last coffee orders 15 minutes before closing.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-cafe-gold/10 rounded-lg">
                  <p className="text-cafe-dark/80 text-sm">
                    <strong>Holiday Hours:</strong> Please note that our hours may vary during holidays. 
                    Check our social media or call us for the most up-to-date information.
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

export default Hours;
