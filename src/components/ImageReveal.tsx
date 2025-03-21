
import React, { useEffect, useRef } from 'react';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  threshold?: number;
}

const ImageReveal: React.FC<ImageRevealProps> = ({ 
  src, 
  alt, 
  className = "", 
  delay = 0,
  threshold = 0.1
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (imgRef.current) {
                imgRef.current.classList.remove('opacity-0', 'scale-105');
                imgRef.current.classList.add('opacity-100', 'scale-100');
              }
              if (containerRef.current) {
                containerRef.current.classList.add('after:translate-x-full');
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '0px'
      }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [delay, threshold]);
  
  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className} after:absolute after:inset-0 after:bg-restaurant-100 after:transform after:translate-x-0 after:transition-transform after:duration-1000 after:ease-in-out`}
    >
      <img 
        ref={imgRef}
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover opacity-0 scale-105 transition-all duration-1000 ease-out"
      />
    </div>
  );
};

export default ImageReveal;
