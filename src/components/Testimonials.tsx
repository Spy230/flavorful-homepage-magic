
import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "An exquisite culinary journey from start to finish. The chef's tasting menu was an experience I won't soon forget.",
    author: "Emily Johnson",
    role: "Food Critic"
  },
  {
    id: 2,
    quote: "The attention to detail in both food and service is unmatched. Truly a gem in the city's dining scene.",
    author: "Michael Chen",
    role: "Local Food Blogger"
  },
  {
    id: 3,
    quote: "We celebrated our anniversary here and were treated to an unforgettable evening. The wine pairing was perfect.",
    author: "Sarah & David Martinez",
    role: "Regular Patrons"
  },
  {
    id: 4,
    quote: "Innovative cuisine that respects tradition while pushing boundaries. Each dish tells a story.",
    author: "James Wilson",
    role: "Executive Chef"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      startAutoRotation();
    }
  };
  
  const startAutoRotation = () => {
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 6000);
  };
  
  useEffect(() => {
    startAutoRotation();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=500&auto=format&fit=crop&q=60')] bg-cover bg-center"></div>
      
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">What our guests say about their experience</p>
        </div>
        
        <div className="max-w-3xl mx-auto relative overflow-hidden h-[280px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute w-full transition-all duration-700 ease-in-out ${
                index === activeIndex 
                  ? 'opacity-100 translate-x-0' 
                  : index < activeIndex 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="glass-card text-center px-8 py-12">
                <p className="text-xl md:text-2xl font-display italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-restaurant-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-restaurant-700 w-5' : 'bg-restaurant-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
