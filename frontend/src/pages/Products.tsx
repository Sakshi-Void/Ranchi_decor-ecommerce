import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Flooring Solutions",
    slug: "flooring",
    images: [
      "/images/flooring/Vinyl_Flooring_1.jpg",
      "/images/flooring/Vinyl_Flooring_2.jpg",
      "/images/flooring/Wooden_Flooring_1.jpg",
    ],
  },
  {
    name: "Carpets & Rugs",
    slug: "carpets",
    images: [
      "/images/carpets/Carpet_Tiles_1.jpg",
      "/images/carpets/Carpet_Tiles_2.jpg",
      "/images/carpets/Customized_Carpet_1.jpg",
    ],
  },
  {
    name: "Wallpapers",
    slug: "wallpapers",
    images: [
      "/images/wallpapers/Customized_Wallpaper_1.jpg",
      "/images/wallpapers/Customized_Wallpaper_2.jpg",
      "/images/wallpapers/Standard_Wallpaper_1.jpg",
    ],
  },
  {
    name: "Window Blinds",
    slug: "blinds",
    images: [
      "/images/blinds/Roller_Blinds_1.jpg",
      "/images/blinds/Roman_Blinds_1.jpg",
      "/images/blinds/Vertical_Blinds_1.jpg",
    ],
  },
  {
    name: "Decorative Panels",
    slug: "panels",
    images: [
      "/images/panels/Fluted_Panels_1.jpg",
      "/images/panels/PVC_Panels_1.jpg",
      "/images/panels/VV_Marble_Sheets_1.jpg",
    ],
  },
  {
    name: "Artificial Greenery",
    slug: "greenery",
    images: [
      "/images/greenery/Artificial_Grass_1.jpg",
      "/images/greenery/Artificial_Grass_2.jpg",
      "/images/greenery/Vertical_Grass_Wall_1.jpg",
    ],
  },
];

export default function Products() {
  const [indexes, setIndexes] = useState<number[]>(categories.map(() => 0));

  // Auto rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((val, i) => (val + 1) % categories[i].images.length)
      );
    }, 1000); // 4 sec rotation for smooth feel
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">
        Our Products
      </h1>
      <p className="mt-3 text-lg text-gray-600 text-center">
        Explore our wide range of premium home decor solutions
      </p>

      {/* Category Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((cat, i) => (
          <Link
            key={cat.slug}
            to={`/category/${cat.slug}`}
            className="group relative rounded-2xl overflow-hidden shadow-lg 
                       transform transition duration-500 hover:-translate-y-2 
                       hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <img
                src={cat.images[indexes[i]]}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            </div>

            {/* Title */}
            <div className="absolute bottom-0 w-full text-center p-4">
              <h2 className="text-xl font-bold text-white drop-shadow-md transition-colors duration-300 group-hover:text-red-400">
                {cat.name}
              </h2>
            </div>

            {/* Red border effect */}
            <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-500 transition-all duration-500"></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
