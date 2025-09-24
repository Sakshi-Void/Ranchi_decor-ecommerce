// import React, { useState, useEffect } from 'react';
// import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// const BestSellers = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const products = [
//     {
//       id: 1,
//       name: "Premium Vinyl Flooring",
//       image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
//       category: "Flooring",
//       rating: 4.9,
//       reviews: 124,
//       tag: "Best Seller"
//     },
//     {
//       id: 2,
//       name: "Luxury Wall Carpet",
//       image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600",
//       category: "Carpets",
//       rating: 4.8,
//       reviews: 89,
//       tag: "Most Popular"
//     },
//     {
//       id: 3,
//       name: "Designer Wallpaper Collection",
//       image: "https://images.pexels.com/photos/6480297/pexels-photo-6480297.jpeg?auto=compress&cs=tinysrgb&w=600",
//       category: "Wallpapers",
//       rating: 4.7,
//       reviews: 156,
//       tag: "Trending"
//     },
//     {
//       id: 4,
//       name: "Modern Window Blinds",
//       image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
//       category: "Blinds",
//       rating: 4.9,
//       reviews: 73,
//       tag: "New Arrival"
//     }
//   ];

//   // Auto slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 2));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + Math.ceil(products.length / 2)) % Math.ceil(products.length / 2));
//   };

//   // Show 2 products per slide on desktop, 1 on mobile
//   const getVisibleProducts = () => {
//     if (window.innerWidth < 768) {
//       // Mobile: 1 per slide
//       return [products[currentSlide]];
//     } else {
//       // Desktop: 2 per slide
//       return products.slice(currentSlide * 2, currentSlide * 2 + 2);
//     }
//   };

//   const visibleProducts = getVisibleProducts();

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Best Sellers</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Discover our most popular products trusted by hundreds of satisfied customers
//           </p>
//         </div>

//         <div className="relative max-w-6xl mx-auto">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-300"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-300"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>

//           {/* Products Slider */}
//           <div className="flex transition-transform duration-700 ease-in-out gap-8">
//             {visibleProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden border flex-shrink-0 w-full md:w-1/2"
//               >
//                 <div className="relative">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
//                       {product.tag}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm text-red-500 font-medium">{product.category}</span>
//                     <div className="flex items-center space-x-1">
//                       <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                       <span className="text-sm text-gray-600">{product.rating}</span>
//                     </div>
//                   </div>

//                   <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-500 transition-colors duration-300">
//                     {product.name}
//                   </h3>

//                   <p className="text-sm text-gray-500 mb-4">{product.reviews} customer reviews</p>

//                   <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-all duration-300">
//                     Request Quote
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Slide Indicators */}
//           <div className="flex justify-center mt-8 space-x-2">
//             {Array.from({ length: Math.ceil(products.length / 2) }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                   index === currentSlide ? 'bg-red-500' : 'bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="text-center mt-12">
//           <button className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-colors duration-300 transform hover:scale-105 shadow-lg">
//             View All Best Sellers
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestSellers;

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: "Premium Vinyl Flooring",
      images: [
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3656396/pexels-photo-3656396.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      category: "Flooring",
      rating: 4.9,
      reviews: 124,
      tag: "Best Seller",
    },
    {
      id: 2,
      name: "Luxury Wall Carpet",
      images: [
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/6585752/pexels-photo-6585752.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      category: "Carpets",
      rating: 4.8,
      reviews: 89,
      tag: "Most Popular",
    },
    {
      id: 3,
      name: "Designer Wallpaper Collection",
      images: [
        "https://images.pexels.com/photos/6480297/pexels-photo-6480297.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      category: "Wallpapers",
      rating: 4.7,
      reviews: 156,
      tag: "Trending",
    },
    {
      id: 4,
      name: "Modern Window Blinds",
      images: [
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2017556/pexels-photo-2017556.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      category: "Blinds",
      rating: 4.9,
      reviews: 73,
      tag: "New Arrival",
    },
  ];

  const itemsPerSlide = 2; // ek slide me 2 cards
  const [currentSlide, setCurrentSlide] = useState(0);

  // Track image index for each product
  const [imageIndexes, setImageIndexes] = useState(
    products.map(() => 0)
  );

  // Rotate images inside each card
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prev) =>
        prev.map((index, i) => (index + 1) % products[i].images.length)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [products]);

  // Next/Prev card slide
  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(products.length / itemsPerSlide)
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(products.length / itemsPerSlide)) %
        Math.ceil(products.length / itemsPerSlide)
    );
  };

  const visibleProducts = products.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Best Sellers</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Prev button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards */}
          <div className="flex gap-6 overflow-hidden">
            {visibleProducts.map((product, i) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border flex-shrink-0 w-full md:w-1/2"
              >
                <div className="relative">
                  <img
                    src={product.images[imageIndexes[product.id - 1]]}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {product.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-red-500 font-medium">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-red-500 transition">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-4">
                    {product.reviews} customer reviews
                  </p>

                  <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-red-500 hover:text-white transition">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
