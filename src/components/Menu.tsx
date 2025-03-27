
import { useState } from 'react';
import { Cake, Coffee, ShoppingBag } from 'lucide-react';

type MenuCategory = 'cakes' | 'pastries' | 'coffee';

const menuItems = {
  cakes: [
    { name: 'Classic Chocolate Cake', price: '$6.50', description: 'Rich chocolate sponge with dark chocolate ganache' },
    { name: 'Vanilla Bean Cheesecake', price: '$7.00', description: 'Creamy cheesecake with Madagascar vanilla' },
    { name: 'Red Velvet Delight', price: '$6.50', description: 'Velvety cake with cream cheese frosting' },
    { name: 'Carrot Cake', price: '$6.00', description: 'Spiced carrot cake with walnut and cream cheese' },
    { name: 'Lemon Drizzle', price: '$5.50', description: 'Zesty lemon sponge with lemon syrup' },
  ],
  pastries: [
    { name: 'Butter Croissant', price: '$3.50', description: 'Flaky French-style butter croissant' },
    { name: 'Almond Pain au Chocolat', price: '$4.00', description: 'Chocolate-filled pastry with almond flakes' },
    { name: 'Cinnamon Roll', price: '$4.50', description: 'Soft roll with cinnamon and cream cheese glaze' },
    { name: 'Mixed Berry Danish', price: '$4.25', description: 'Buttery pastry with seasonal berries' },
    { name: 'Savory Cheese Scone', price: '$3.75', description: 'Cheddar and herb scone, served warm' },
  ],
  coffee: [
    { name: 'Espresso', price: '$2.80', description: 'Single shot of our signature blend' },
    { name: 'Cappuccino', price: '$4.25', description: 'Espresso with steamed milk and silky foam' },
    { name: 'Café Latte', price: '$4.50', description: 'Espresso with steamed milk and light foam' },
    { name: 'Flat White', price: '$4.25', description: 'Double espresso with velvety microfoam milk' },
    { name: 'Cold Brew', price: '$4.75', description: '24-hour slow-steeped coffee, served over ice' },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('cakes');
  
  return (
    <section id="menu" className="py-20 bg-cafe-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-6 slide-up">
            <div className="bg-cafe-gold/10 text-cafe-gold rounded-full px-4 py-1 text-xs inline-flex items-center mx-auto">
              <ShoppingBag className="h-3 w-3 mr-1" />
              <span>OUR OFFERINGS</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 slide-up-delay-1">
            Explore Our <span className="text-cafe-gold">Delicious</span> Menu
          </h2>
          
          <p className="text-cafe-dark/80 slide-up-delay-2">
            Each item on our menu is crafted with care using premium ingredients. Our recipes blend traditional techniques with creative twists to create memorable flavors.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 slide-up-delay-2">
          <div className="inline-flex p-1 bg-cafe-gold/10 rounded-full">
            <button
              className={`flex items-center px-6 py-2 rounded-full text-sm ${
                activeCategory === 'cakes' 
                  ? 'bg-cafe-gold text-white' 
                  : 'text-cafe-dark hover:bg-cafe-gold/20'
              } transition-all duration-300`}
              onClick={() => setActiveCategory('cakes')}
            >
              <Cake className="h-4 w-4 mr-2" />
              Cakes
            </button>
            
            <button
              className={`flex items-center px-6 py-2 rounded-full text-sm ${
                activeCategory === 'pastries' 
                  ? 'bg-cafe-gold text-white' 
                  : 'text-cafe-dark hover:bg-cafe-gold/20'
              } transition-all duration-300`}
              onClick={() => setActiveCategory('pastries')}
            >
              <Cake className="h-4 w-4 mr-2" />
              Pastries
            </button>
            
            <button
              className={`flex items-center px-6 py-2 rounded-full text-sm ${
                activeCategory === 'coffee' 
                  ? 'bg-cafe-gold text-white' 
                  : 'text-cafe-dark hover:bg-cafe-gold/20'
              } transition-all duration-300`}
              onClick={() => setActiveCategory('coffee')}
            >
              <Coffee className="h-4 w-4 mr-2" />
              Coffee
            </button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {menuItems[activeCategory].map((item, index) => (
              <div key={item.name} className="menu-item fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif">{item.name}</h3>
                  <span className="font-medium text-cafe-gold ml-4">{item.price}</span>
                </div>
                <p className="text-cafe-dark/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-14 slide-up">
          <div className="fancy-separator mb-8">
            <span>♦</span>
          </div>
          <p className="text-cafe-dark/70 text-sm max-w-lg mx-auto">
            Kindly note that our menu changes seasonally to incorporate the freshest ingredients. 
            Special orders and customizations are available with 48 hours notice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
