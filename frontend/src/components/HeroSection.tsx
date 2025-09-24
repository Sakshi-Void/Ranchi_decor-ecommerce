import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const phrases = [
    "Premium Interior Solutions",
    "Stylish Flooring & Wallpapers",
    "Modern Home & Office Decor",
    "Luxury Carpets & Window Blinds",
    "Complete Interior Products for You",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3000); // 3s per phrase
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 z-10">
          <div className="inline-block bg-red-500 text-white text-sm px-4 py-2 rounded-full font-medium">
            ON SALE TOMORROW
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight flex flex-wrap">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-red-600 via-black to-red-800 bg-clip-text text-transparent"
              >
                {phrases[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </h1>

          <p className="text-lg text-gray-600 max-w-lg mt-4">
            Transform your spaces with our premium flooring, wallpapers, carpets, window blinds, and decorative solutions for homes, offices, and commercial spaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Shop Now
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-red-500 hover:text-red-500 transition-all duration-300">
              View Gallery
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Premium Interior Design"
              className="w-full h-[600px] object-cover"
            />

            <div className="absolute top-8 right-8 bg-red-500 text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg animate-pulse">
              <span className="text-2xl font-bold">25%</span>
              <span className="text-sm font-medium">OFF</span>
            </div>

            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-800">
                  Premium Quality Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
