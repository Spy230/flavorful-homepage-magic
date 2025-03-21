
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Reservation from '@/components/Reservation';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer для анимаций появления
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const revealCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal-container');
    
    elements.forEach((el) => {
      revealObserver.observe(el);
    });
    
    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Раздел о нас */}
      <section id="about" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-container">
              <div className="reveal-content">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1605522469906-3fe226b356bc?w=500&auto=format&fit=crop&q=60" 
                    alt="Шеф-повар готовит еду" 
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-white p-4 shadow-lg rounded-lg hidden md:block">
                    <img 
                      src="https://images.unsplash.com/photo-1610026930555-56ea6f5c9c22?w=500&auto=format&fit=crop&q=60" 
                      alt="Крупный план ингредиента" 
                      className="w-32 h-32 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal-container">
              <div className="reveal-content">
                <h2 className="section-title">Наша история</h2>
                <p className="section-subtitle">Страсть к кулинарному совершенству</p>
                <p className="mb-6 text-muted-foreground">
                  Основанный в 2010 году титулованным шеф-поваром Даниэлем Лораном, ресторан Elegance родился из видения создать гастрономический опыт, который сочетает кулинарные инновации с вневременными техниками.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Мы закупаем лучшие сезонные ингредиенты у местных фермеров и производителей, превращая их в блюда, которые подчеркивают их естественный вкус и демонстрируют наш творческий подход.
                </p>
                <p className="text-muted-foreground">
                  Каждая деталь нашего ресторана — от тщательно продуманного обеденного зала до тщательно подобранной винной карты — предназначена для создания незабываемого впечатления, которое задействует все чувства.
                </p>
                
                <div className="mt-8 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="font-display text-3xl text-restaurant-800 font-medium">13</div>
                    <div className="text-sm text-muted-foreground">Лет совершенства</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-3xl text-restaurant-800 font-medium">27</div>
                    <div className="text-sm text-muted-foreground">Отмеченных наградами блюд</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-3xl text-restaurant-800 font-medium">5</div>
                    <div className="text-sm text-muted-foreground">Звезд Мишлен</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Menu />
      <Gallery />
      
      {/* Особые предложения */}
      <section className="py-24 bg-restaurant-800 text-white relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-20"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center glass-card bg-white/5 p-8 reveal-container">
              <div className="reveal-content">
                <div className="bg-restaurant-600 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="font-display text-xl mb-3">Частные обеды</h3>
                <p className="text-white/80">
                  Проводите особые мероприятия в наших элегантных залах для частных обедов с индивидуальным меню и личным обслуживанием.
                </p>
              </div>
            </div>
            
            <div className="text-center glass-card bg-white/5 p-8 reveal-container">
              <div className="reveal-content" style={{ transitionDelay: "0.2s" }}>
                <div className="bg-restaurant-600 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl mb-3">Стол шеф-повара</h3>
                <p className="text-white/80">
                  Получите интимный вид на нашу кухню с дегустационным меню, которое подается нашим шеф-поваром.
                </p>
              </div>
            </div>
            
            <div className="text-center glass-card bg-white/5 p-8 reveal-container">
              <div className="reveal-content" style={{ transitionDelay: "0.4s" }}>
                <div className="bg-restaurant-600 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl mb-3">Кулинарные мероприятия</h3>
                <p className="text-white/80">
                  Присоединяйтесь к нашим сезонным винным ужинам, сотрудничеству с приглашенными шеф-поварами и тематическим дегустационным мероприятиям.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Reservation />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Index;
