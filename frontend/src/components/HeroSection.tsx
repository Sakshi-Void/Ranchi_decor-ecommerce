import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-red-100/50 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-10 w-24 h-24 bg-green-100/50 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 z-10">
          <div className="inline-block bg-red-500 text-white text-sm px-4 py-2 rounded-full font-medium">
            ON SALE TOMORROW
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Premium Interior & 
            <span className="text-red-500"> Flooring</span> Solutions
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg">
            Transform your spaces with our premium flooring, wallpapers, carpets, window blinds, and decorative solutions for homes, offices, and commercial spaces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Shop Now
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-red-500 hover:text-red-500 transition-all duration-300">
              View Gallery
            </button>
          </div>
        </div>

        {/* Right Image with Discount Badge */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Premium Interior Design"
              className="w-full h-[600px] object-cover"
            />
            
            {/* Discount Badge */}
            <div className="absolute top-8 right-8 bg-red-500 text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg animate-pulse">
              <span className="text-2xl font-bold">25%</span>
              <span className="text-sm font-medium">OFF</span>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-800">Premium Quality Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-red-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-green-400 rounded-full opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;