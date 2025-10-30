import React from 'react';
import { ShoppingCart } from 'lucide-react';

const MarketplacesSection = () => {
  const marketplaces = [
    { 
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      maxHeight: 'max-h-16'
    },
    { 
      name: 'OTTO', 
      logo: 'https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/ns4vjl5t_Unbenannt2.png',
      maxHeight: 'max-h-24'
    },
    { 
      name: 'Kaufland', 
      logo: 'https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/hb469b5t_Unbenannt.png',
      maxHeight: 'max-h-24'
    },
    { 
      name: 'eBay', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg',
      maxHeight: 'max-h-16'
    },
    { 
      name: 'OBI', 
      logo: 'https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/luieocu2_Screenshot%202025-10-30%20093705.png',
      maxHeight: 'max-h-24' // Größer, wie OTTO und Kaufland
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
        
        {/* Marketplace Logos Grid - 5 Logos nebeneinander */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {marketplaces.map((marketplace, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full max-w-[220px] h-40 flex items-center justify-center border-2 border-gray-100 hover:border-[#FFDA00]"
            >
              <img 
                src={marketplace.logo}
                alt={`${marketplace.name} Logo`}
                className={`max-w-full ${marketplace.maxHeight} object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplacesSection;