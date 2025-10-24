import React from 'react';
import { benefits } from '../mockData';
import { TrendingUp, Search, DollarSign } from 'lucide-react';
import { Button } from './ui/button';

const iconMap = {
  'trending-up': TrendingUp,
  'search': Search,
  'dollar-sign': DollarSign
};

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
              Erfolg auf Marktplätzen
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFDA00]"></div>
            </h2>
          </div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Warum Marken mit uns erfolgreicher verkaufen
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div
                key={benefit.id}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-[#FFDA00] to-[#FFC700] rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  {/* Stat */}
                  <div className="text-5xl font-bold text-black mb-4">
                    {benefit.stat}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                      <Icon size={32} className="text-[#FFDA00]" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-900">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-[#FFDA00] hover:bg-[#E5C400] text-black font-semibold text-lg px-8 py-6">
            Erstgespräch buchen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;