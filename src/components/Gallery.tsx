
import React, { useEffect } from 'react';
import ImageReveal from './ImageReveal';

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60",
    alt: "Интерьер ресторана с теплым освещением"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1511018556340-d16986a1c49e?w=500&auto=format&fit=crop&q=60",
    alt: "Шеф-повар готовит блюдо на кухне"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=500&auto=format&fit=crop&q=60",
    alt: "Элегантная сервировка стола"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1507914372368-b2b085b925a1?w=500&auto=format&fit=crop&q=60",
    alt: "Приготовление фирменного коктейля"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500&auto=format&fit=crop&q=60",
    alt: "Терраса ресторана с возможностью обеда на открытом воздухе"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&auto=format&fit=crop&q=60",
    alt: "Крупный план красиво оформленного десерта"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Галерея</h2>
          <p className="section-subtitle">Взгляните на наше кулинарное искусство и атмосферу</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <ImageReveal
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="rounded-lg aspect-square"
              delay={index * 150}
              threshold={0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
