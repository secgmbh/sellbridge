import React from 'react';
import { ShoppingCart } from 'lucide-react';

const MarketplacesSection = () => {
  const marketplaces = [
    { 
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      bgColor: 'bg-white'
    },
    { 
      name: 'OTTO', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Otto_logo.svg',
      bgColor: 'bg-white'
    },
    { 
      name: 'Kaufland', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Kaufland_201x_logo.svg',
      bgColor: 'bg-white'
    },
    { 
      name: 'eBay', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg',
      bgColor: 'bg-white'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Wir bringen Sie erfolgreich auf die wichtigsten Marktplätze
          </h2>
        </div>
        
        {/* Marketplace Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {marketplaces.map((marketplace, index) => (
            <div
              key={index}
              className={`${marketplace.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full max-w-[250px] h-40 flex items-center justify-center border-2 border-gray-100 hover:border-[#FFDA00]`}
            >
              <img 
                src={marketplace.logo}
                alt={`${marketplace.name} Logo`}
                className="max-w-full max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplacesSection;