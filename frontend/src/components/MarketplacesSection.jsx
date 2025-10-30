import React from 'react';
import { ShoppingCart } from 'lucide-react';

const MarketplacesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium mb-4">
            Wir bringen Sie erfolgreich auf die wichtigsten Marktplätze
          </p>
        </div>
        
        {/* Original Marketplace Logos Image */}
        <div className="flex justify-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/dks1pyq2_grafik.png"
            alt="Amazon, OTTO, Kaufland, eBay Marktplätze"
            className="max-w-4xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketplacesSection;