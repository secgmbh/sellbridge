import React from 'react';
import { ShoppingCart } from 'lucide-react';

const MarketplacesSection = () => {
  const marketplaces = [
    { name: 'Amazon', color: '#FF9900' },
    { name: 'OTTO', color: '#D40000' },
    { name: 'Kaufland', color: '#D40E14' },
    { name: 'eBay', color: '#E53238' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium mb-4">
            Wir bringen Sie erfolgreich auf die wichtigsten Marktplätze
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {marketplaces.map((marketplace, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-full max-w-[200px] h-32 flex items-center justify-center group"
            >
              <div className="text-center">
                <ShoppingCart 
                  size={40} 
                  className="mx-auto mb-2 transition-colors duration-300" 
                  style={{ color: marketplace.color }}
                />
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FFDA00] transition-colors">
                  {marketplace.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplacesSection;