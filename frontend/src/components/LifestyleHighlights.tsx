// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { FaCouch, FaBed, FaBath, FaChair } from "react-icons/fa";
// import { MdOutlineWeekend } from "react-icons/md";

// const LifestyleHighlights = () => {
//   const roomCategories = [
//     { icon: FaCouch, name: "Living Room", active: true },
//     { icon: FaBed, name: "Bedroom", active: false },
//     { icon: FaBath, name: "Bathroom", active: false },
//     { icon: FaChair, name: "Dining Room", active: false },
//     { icon: MdOutlineWeekend, name: "Office", active: false },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Lifestyle Highlights
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Discover how our premium solutions can transform every room in your
//             home or office
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-12">
//           {/* Living Room */}
//           <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg">
//             <img
//               src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
//               alt="Living Room"
//               className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//             <div className="absolute top-6 left-6">
//               <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
//                 TRENDING
//               </span>
//             </div>
//             <div className="absolute bottom-6 left-6 right-6">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 Living Room
//               </h3>
//               <p className="text-white/80 mb-4">
//                 Create stunning living spaces with our premium flooring and
//                 decor solutions
//               </p>
//               <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center">
//                 Shop Now <ArrowRight className="w-4 h-4 ml-2" />
//               </button>
//             </div>
//           </div>

//           {/* Bedroom */}
//           <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg">
//             <img
//               src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800"
//               alt="Bedroom"
//               className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//             <div className="absolute top-6 left-6">
//               <span className="bg-green-400 text-white text-sm px-3 py-1 rounded-full font-medium">
//                 NEW IN
//               </span>
//             </div>
//             <div className="absolute bottom-6 left-6 right-6">
//               <h3 className="text-2xl font-bold text-white mb-2">Bedroom</h3>
//               <p className="text-white/80 mb-4">
//                 Transform bedrooms into cozy retreats with luxury carpets and
//                 panels
//               </p>
//               <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center">
//                 Shop Now <ArrowRight className="w-4 h-4 ml-2" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Room Categories Navigation */}
//         <div className="flex justify-center">
//           <div className="bg-gray-100 rounded-full p-2 flex space-x-2 overflow-x-auto">
//             {roomCategories.map((category, index) => (
//               <button
//                 key={index}
//                 className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
//                   category.active
//                     ? "bg-red-500 text-white shadow-lg"
//                     : "text-gray-600 hover:text-red-500 hover:bg-white"
//                 }`}
//               >
//                 <category.icon className="w-5 h-5" />
//                 <span className="font-medium">{category.name}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LifestyleHighlights;



import React from "react";
import { ArrowRight } from "lucide-react";

const LifestyleHighlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lifestyle Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our premium solutions can transform every room in your
            home or office
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Living Room */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Living Room"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute top-6 left-6">
              <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                TRENDING
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Living Room
              </h3>
              <p className="text-white/80 mb-4">
                Create stunning living spaces with our premium flooring and
                decor solutions
              </p>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center">
                Shop Now <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Bedroom */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Bedroom"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute top-6 left-6">
              <span className="bg-green-400 text-white text-sm px-3 py-1 rounded-full font-medium">
                NEW IN
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-2">Bedroom</h3>
              <p className="text-white/80 mb-4">
                Transform bedrooms into cozy retreats with luxury carpets and
                panels
              </p>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center">
                Shop Now <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleHighlights;
