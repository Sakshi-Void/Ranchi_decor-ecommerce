import React, { useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: "1",
    name: "Vinyl Flooring Classic",
    price: 1299,
    rating: 4.5,
    images: [
      "/images/flooring/Vinyl_Flooring_1.jpg",
      "/images/flooring/Vinyl_Flooring_2.jpg",
      "/images/flooring/Wooden_Flooring_1.jpg",
    ],
    description: "Durable and stylish vinyl flooring for modern homes.",
  },
  {
    id: "2",
    name: "Vinyl Flooring Premium",
    price: 1499,
    rating: 4.7,
    images: [
      "/images/flooring/Vinyl_Flooring_2.jpg",
      "/images/flooring/Vinyl_Flooring_3.jpg",
    ],
    description: "Premium vinyl flooring with elegant finish.",
  },
  {
    id: "3",
    name: "Vinyl Flooring Matte",
    price: 1199,
    rating: 4.3,
    images: [
      "/images/flooring/Vinyl_Flooring_3.jpg",
      "/images/flooring/Wooden_Flooring_2.jpg",
    ],
    description: "Matte finish flooring for a subtle and modern look.",
  },
];

export default function ShopProduct() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [mainImage, setMainImage] = useState(product ? product.images[0] : "");

  if (!product) {
    return <div className="p-6 text-center text-red-500 text-lg">❌ Product not found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-12 bg-gray-50 min-h-screen">
      {/* Left: Images */}
      <div>
        <img
          src={mainImage}
          alt={product.name}
          className="w-full h-[450px] object-cover rounded-2xl shadow-lg border"
        />
        <div className="flex gap-3 mt-4">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="thumb"
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition 
                ${mainImage === img ? "border-red-500" : "border-gray-300 hover:border-red-400"}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right: Details */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-2xl text-red-600 font-semibold mt-2">₹{product.price}</p>
        <p className="text-gray-600 mt-1">⭐ {product.rating} / 5</p>
        <p className="mt-4 text-gray-700 leading-relaxed">{product.description}</p>

        <div className="flex gap-4 mt-6">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition">
            🛒 Add to Cart
          </button>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition">
            ⚡ Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
