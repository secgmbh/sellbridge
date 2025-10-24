import React from 'react';
import { stats } from '../mockData';

const StatsSection = () => {
  return (
    <section className="py-20 bg-[#FFDA00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-black mb-1">
                {stat.label}
              </div>
              <div className="text-gray-800">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;