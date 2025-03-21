
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center py-32">
        <div className="text-center max-w-md px-6">
          <h1 className="font-display text-6xl font-medium text-restaurant-900 mb-4">404</h1>
          <p className="text-xl text-restaurant-600 mb-8 font-serif italic">Page not found</p>
          <p className="mb-8 text-muted-foreground">
            We couldn't find the page you were looking for. Perhaps you might want to return to our homepage or make a reservation?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="btn-primary">
              Return Home
            </a>
            <a href="/#reservations" className="btn-outline">
              Make a Reservation
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
