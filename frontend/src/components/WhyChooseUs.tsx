import React from 'react';
import { Award, Users, Palette, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Years of Experience",
      description: "Over a decade of expertise in interior solutions and customer satisfaction"
    },
    {
      icon: Users,
      title: "Premium Quality",
      description: "Only the finest materials and products from trusted manufacturers worldwide"
    },
    {
      icon: Palette,
      title: "Customization Options",
      description: "Tailored solutions to match your unique style and specific requirements"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates with transparent pricing and flexible payment options"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-red-500">Ranchi Decor</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine quality, expertise, and affordability to deliver exceptional interior solutions 
            that transform your spaces into beautiful, functional environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;