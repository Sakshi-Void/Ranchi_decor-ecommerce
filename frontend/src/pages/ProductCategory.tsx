// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// interface Product {
//   id: string;
//   category: string;
//   name: string;
//   description: string;
//   price: number;
//   rating: number;
//   image: string;
// }

// const renderStars = (rating: number) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     stars.push(
//       <span
//         key={i}
//         className={i <= Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}
//       >
//         ★
//       </span>
//     );
//   }
//   return stars;
// };

// export default function ProductCategory() {
//   const { id } = useParams<{ id: string }>();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/products.json")
//       .then((res) => res.json())
//       .then((data: Product[]) => {
//         setProducts(data.filter((p) => p.category === id));
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [id]);

//   if (loading) {
//     return <p className="text-center mt-10 text-gray-500">Loading...</p>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center capitalize">{id}</h1>
//       <p className="mt-2 text-gray-600 text-center">
//         Explore our premium {id} collection.
//       </p>

//       {products.length > 0 ? (
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((p) => (
//             <Link
//               to={`/product/${p.id}`}
//               key={p.id}
//               className="relative rounded-3xl overflow-hidden bg-white shadow-md 
//                          flex flex-col transform transition duration-300
//                          hover:-translate-y-2 hover:shadow-xl
//                          before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-transparent
//                          before:transition-all before:duration-300
//                          hover:before:border-red-500"
//             >
//               {/* Product Image */}
//               <div className="w-full h-56 sm:h-64 md:h-72 flex items-center justify-center bg-gray-50 overflow-hidden">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="max-h-full max-w-full object-contain p-2 transition-transform duration-500 hover:scale-110"
//                 />
//               </div>

//               {/* Product Details */}
//               <div className="p-4 flex flex-col flex-grow text-left">
//                 <h2 className="text-base md:text-lg font-semibold line-clamp-2">
//                   {p.name}
//                 </h2>
//                 <p className="text-sm text-gray-600 mt-1 line-clamp-2">
//                   {p.description}
//                 </p>

//                 {/* Price */}
//                 <div className="mt-2 text-red-600 font-bold text-lg">₹{p.price}</div>

//                 {/* Rating */}
//                 <div className="flex items-center text-sm mt-1">
//                   {renderStars(p.rating)}
//                   <span className="ml-2 text-gray-500">{p.rating}</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       ) : (
//         <p className="mt-6 text-center text-gray-500">
//           No products found for this category.
//         </p>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

// ⭐ Rating stars render helper
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}
    >
      ★
    </span>
  ));
};

export default function ProductCategory() {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data.filter((p) => p.category === id));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }

  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center capitalize">{id}</h1>
      <p className="mt-2 text-gray-600 text-center">
        Explore our premium {id} collection.
      </p>

      {/* Product Grid */}
      {products.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <Link
              to={`/product/${p.id}`}
              key={p.id}
              className="relative rounded-3xl overflow-hidden bg-white shadow-md 
                         flex flex-col transform transition duration-300
                         hover:-translate-y-2 hover:shadow-xl
                         before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-transparent
                         before:transition-all before:duration-300
                         hover:before:border-red-500"
            >
              {/* Product Image */}
              <div className="w-full h-56 sm:h-64 md:h-72 flex items-center justify-center bg-gray-50 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain p-2 transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Product Details */}
              <div className="p-4 flex flex-col flex-grow text-left">
                <h2 className="text-base md:text-lg font-semibold line-clamp-2">
                  {p.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {p.description}
                </p>

                {/* Price */}
                <div className="mt-2 text-red-600 font-bold text-lg">₹{p.price}</div>

                {/* Rating */}
                <div className="flex items-center text-sm mt-1">
                  {renderStars(p.rating)}
                  <span className="ml-2 text-gray-500">{p.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mt-6 text-center text-gray-500">
          No products found for this category.
        </p>
      )}
    </div>
  );
}
