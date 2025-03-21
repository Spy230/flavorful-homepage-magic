
import React, { useState } from 'react';
import MenuCard from './MenuCard';

// Sample menu data
const menuItems = [
  // Appetizers
  {
    id: 1,
    title: "Truffle Arancini",
    description: "Crispy risotto balls with wild mushrooms, black truffle, and aged parmesan",
    price: "$16",
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1635146037526-e3685949e7ac?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Tuna Tartare",
    description: "Fresh ahi tuna, avocado, cucumber, toasted sesame, ponzu sauce",
    price: "$18",
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=500&auto=format&fit=crop&q=60",
    isNew: true
  },
  {
    id: 3,
    title: "Burrata Caprese",
    description: "Creamy burrata, heirloom tomatoes, basil, aged balsamic, olive oil",
    price: "$14",
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1631894089132-cd678de1743d?w=500&auto=format&fit=crop&q=60"
  },
  
  // Main Courses
  {
    id: 4,
    title: "Beef Tenderloin",
    description: "Grass-fed beef, truffle mashed potatoes, roasted seasonal vegetables, red wine reduction",
    price: "$42",
    category: "Main",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    title: "Wild-Caught Salmon",
    description: "Pan-seared salmon, spring pea risotto, lemon beurre blanc, fresh herbs",
    price: "$36",
    category: "Main",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Mushroom Pappardelle",
    description: "House-made pasta, wild mushroom ragout, truffle butter, parmigiano reggiano",
    price: "$28",
    category: "Main",
    image: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=500&auto=format&fit=crop&q=60",
    isNew: true
  },
  
  // Desserts
  {
    id: 7,
    title: "Chocolate Soufflé",
    description: "Bittersweet chocolate, vanilla bean crème anglaise, fresh berries",
    price: "$14",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1611329695518-1763fc6d16f3?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    title: "Lemon Tart",
    description: "Meyer lemon curd, toasted meringue, candied citrus, shortbread crust",
    price: "$12",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1551404417-c2d400149e48?w=500&auto=format&fit=crop&q=60"
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Appetizer", "Main", "Dessert"];
  
  const filteredMenu = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">Seasonal ingredients, thoughtfully prepared</p>
        </div>
        
        {/* Category Filter */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-restaurant-700 text-white'
                  : 'bg-white hover:bg-restaurant-50 text-restaurant-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMenu.map((item) => (
            <MenuCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              category={item.category}
              isNew={item.isNew}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#reservations" className="btn-primary">
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
