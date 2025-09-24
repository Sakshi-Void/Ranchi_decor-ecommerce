import React from 'react';

const PopularCategories = () => {
  const categories = [
    {
      name: "Flooring Solutions",
      count: "12 Products",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Wallpapers",
      count: "8 Products", 
      image: "https://images.pexels.com/photos/6480297/pexels-photo-6480297.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Carpets & Rugs",
      count: "15 Products",
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Window Blinds",
      count: "6 Products",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Decorative Panels",
      count: "9 Products",
      image: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Artificial Greenery",
      count: "7 Products",
      image: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of premium interior solutions designed to transform every space
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                {/* Outer hover ring */}
                <div className="absolute inset-0 rounded-full border-4 border-red-500 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                
                {/* Inner circle image */}
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-sm relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-red-500 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-colors duration-300 transform hover:scale-105 shadow-lg">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
