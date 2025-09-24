// import React, { useState } from "react";
// import { Sofa, Bed, Bath, Utensils, Briefcase } from "lucide-react";

// const LifestyleNavigation = () => {
//   const [activeCategory, setActiveCategory] = useState("Furniture");

//   const categories = [
//     { icon: Briefcase, name: "Furniture" },
//     { icon: Sofa, name: "Living Room" },
//     { icon: Bed, name: "Bedroom" },
//     { icon: Bath, name: "Bathroom" },
//     { icon: Utensils, name: "Dining Room" },
//   ];

//   return (
//     <section className="py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-center space-x-16 border-b">
//           {categories.map((category, index) => {
//             const isActive = activeCategory === category.name;
//             return (
//               <button
//                 key={index}
//                 onClick={() => setActiveCategory(category.name)}
//                 className="flex flex-col items-center group focus:outline-none"
//               >
//                 {/* Circle with icon */}
//                 <div
//                   className={`flex items-center justify-center w-20 h-20 rounded-full mb-3 transition-all duration-300 ${
//                     isActive
//                       ? "bg-red-500 text-white shadow-md"
//                       : "text-gray-600 group-hover:text-red-500"
//                   }`}
//                 >
//                   <category.icon className="w-10 h-10" strokeWidth={1.5} />
//                 </div>

//                 {/* Text */}
//                 <span
//                   className={`text-base font-semibold transition-colors ${
//                     isActive ? "text-black" : "text-gray-600 group-hover:text-red-500"
//                   }`}
//                 >
//                   {category.name}
//                 </span>

//                 {/* underline */}
//                 <div
//                   className={`h-1 w-full mt-3 rounded-full transition-all ${
//                     isActive ? "bg-red-500" : "bg-transparent"
//                   }`}
//                 />
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LifestyleNavigation;


import React, { useState } from "react";

import FurnitureIcon from "../icons/furniture.svg?react";
import LivingRoomIcon from "../icons/living-room.svg?react";
import BedroomIcon from "../icons/bedroom.svg?react";
import BathroomIcon from "../icons/bathroom.svg?react";
import DiningRoomIcon from "../icons/dining-room.svg?react";

const LifestyleNavigation = () => {
  const [activeCategory, setActiveCategory] = useState("Furniture");

  const categories = [
    { icon: FurnitureIcon, name: "Furniture" },
    { icon: LivingRoomIcon, name: "Living Room" },
    { icon: BedroomIcon, name: "Bedroom" },
    { icon: BathroomIcon, name: "Bathroom" },
    { icon: DiningRoomIcon, name: "Dining Room" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-16 border-b">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.name;
            const Icon = category.icon; 
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(category.name)}
                className="flex flex-col items-center group focus:outline-none"
              >
                {/* Circle with icon */}
                <div
                  className={`flex items-center justify-center w-20 h-20 rounded-full mb-3 transition-all duration-300 ${
                    isActive
                      ? "bg-red-500 text-white shadow-md"
                      : "text-gray-600 group-hover:text-red-500"
                  }`}
                >
                  <Icon className="w-18 h-18" /> {/* ✅ SVG icon render */}
                </div>

                {/* Text */}
                <span
                  className={`text-base font-semibold transition-colors ${
                    isActive
                      ? "text-black"
                      : "text-gray-600 group-hover:text-red-500"
                  }`}
                >
                  {category.name}
                </span>

                {/* underline */}
                <div
                  className={`h-1 w-full mt-3 rounded-full transition-all ${
                    isActive ? "bg-red-500" : "bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LifestyleNavigation;
