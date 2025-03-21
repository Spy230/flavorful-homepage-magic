
import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-restaurant-900 text-white">
      <div className="container">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Restaurant Info */}
          <div>
            <h3 className="font-display text-2xl mb-6">Elegance</h3>
            <p className="mb-6 text-restaurant-100">
              A fine dining experience offering seasonal, locally-inspired cuisine in an atmosphere of sophisticated comfort.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-restaurant-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-restaurant-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-restaurant-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 text-restaurant-400" />
                <span>123 Gourmet Street<br />Culinary District<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-restaurant-400" />
                <span>(212) 555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-restaurant-400" />
                <span>info@elegancerestaurant.com</span>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="font-display text-xl mb-6">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-0.5 text-restaurant-400" />
                <div>
                  <p className="font-medium">Lunch</p>
                  <p>Mon - Fri: 11:30 AM - 2:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-0.5 text-restaurant-400" />
                <div>
                  <p className="font-medium">Dinner</p>
                  <p>Mon - Thurs: 5:30 PM - 10:00 PM</p>
                  <p>Fri - Sat: 5:30 PM - 11:00 PM</p>
                  <p>Sun: 5:00 PM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-display text-xl mb-6">Stay Updated</h3>
            <p className="mb-4 text-restaurant-100">
              Subscribe to our newsletter for special events, new menu items, and exclusive offers.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-restaurant-800 border-restaurant-700 border rounded-md py-2 px-3 text-white placeholder:text-restaurant-400 focus:outline-none focus:ring-1 focus:ring-restaurant-500"
              />
              <button 
                type="submit" 
                className="w-full bg-restaurant-600 hover:bg-restaurant-500 transition-colors py-2 px-4 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="py-6 border-t border-restaurant-800 text-center text-sm text-restaurant-400">
          <p>&copy; {new Date().getFullYear()} Elegance Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
