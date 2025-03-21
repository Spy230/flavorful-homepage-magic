
import React, { useState } from 'react';
import MenuCard from './MenuCard';

// Данные меню
const menuItems = [
  // Закуски
  {
    id: 1,
    title: "Трюфельное аранчини",
    description: "Хрустящие рисовые шарики с дикими грибами, черным трюфелем и выдержанным пармезаном",
    price: "1600₽",
    category: "Закуска",
    image: "https://images.unsplash.com/photo-1635146037526-e3685949e7ac?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Тартар из тунца",
    description: "Свежий тунец ахи, авокадо, огурец, жареный кунжут, соус понзу",
    price: "1800₽",
    category: "Закуска",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=500&auto=format&fit=crop&q=60",
    isNew: true
  },
  {
    id: 3,
    title: "Буррата Капрезе",
    description: "Сливочная буррата, помидоры херитидж, базилик, выдержанный бальзамический уксус, оливковое масло",
    price: "1400₽",
    category: "Закуска",
    image: "https://images.unsplash.com/photo-1631894089132-cd678de1743d?w=500&auto=format&fit=crop&q=60"
  },
  
  // Основные блюда
  {
    id: 4,
    title: "Говяжья вырезка",
    description: "Говядина травяного откорма, трюфельное картофельное пюре, жареные сезонные овощи, соус из красного вина",
    price: "4200₽",
    category: "Основное",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    title: "Дикий лосось",
    description: "Обжаренный лосось, ризотто с весенним горошком, лимонный соус бер блан, свежие травы",
    price: "3600₽",
    category: "Основное",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Паппарделле с грибами",
    description: "Домашняя паста, рагу из диких грибов, трюфельное масло, пармиджано реджано",
    price: "2800₽",
    category: "Основное",
    image: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=500&auto=format&fit=crop&q=60",
    isNew: true
  },
  
  // Десерты
  {
    id: 7,
    title: "Шоколадное суфле",
    description: "Горький шоколад, крем англез с ванилью, свежие ягоды",
    price: "1400₽",
    category: "Десерт",
    image: "https://images.unsplash.com/photo-1611329695518-1763fc6d16f3?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    title: "Лимонный тарт",
    description: "Курд из лимона мейер, обжаренная меренга, засахаренные цитрусовые, песочная основа",
    price: "1200₽",
    category: "Десерт",
    image: "https://images.unsplash.com/photo-1551404417-c2d400149e48?w=500&auto=format&fit=crop&q=60"
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  
  const categories = ["Все", "Закуска", "Основное", "Десерт"];
  
  const filteredMenu = activeCategory === "Все" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Наше меню</h2>
          <p className="section-subtitle">Сезонные ингредиенты, тщательно приготовленные</p>
        </div>
        
        {/* Фильтр категорий */}
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
        
        {/* Сетка меню */}
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
            Забронировать столик
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
