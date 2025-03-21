
import React from 'react';

interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  image?: string;
  category: string;
  isNew?: boolean;
}

const MenuCard: React.FC<MenuCardProps> = ({ 
  title, 
  description, 
  price, 
  image,
  category,
  isNew = false
}) => {
  return (
    <div className="group glass-card p-5 transition-all duration-300 hover:shadow-md flex flex-col h-full">
      {image && (
        <div className="relative overflow-hidden rounded-md mb-4 aspect-[4/3]">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {isNew && (
            <div className="absolute top-2 right-2 bg-restaurant-600 text-white text-xs px-2 py-1 rounded-full">
              New
            </div>
          )}
        </div>
      )}
      
      <div className="flex-1">
        <div className="text-sm text-restaurant-500 mb-1">{category}</div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-xl font-medium">{title}</h3>
          <span className="menu-price whitespace-nowrap ml-2">{price}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default MenuCard;
