
import React, { useEffect } from 'react';
import ImageReveal from './ImageReveal';

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60",
    alt: "Restaurant interior with warm lighting"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1511018556340-d16986a1c49e?w=500&auto=format&fit=crop&q=60",
    alt: "Chef preparing dish in kitchen"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=500&auto=format&fit=crop&q=60",
    alt: "Elegant dining table setting"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1507914372368-b2b085b925a1?w=500&auto=format&fit=crop&q=60",
    alt: "Signature cocktail preparation"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500&auto=format&fit=crop&q=60",
    alt: "Restaurant terrace with outdoor dining"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&auto=format&fit=crop&q=60",
    alt: "Close-up of a beautifully plated dessert"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">A glimpse of our culinary artistry and ambiance</p>
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
