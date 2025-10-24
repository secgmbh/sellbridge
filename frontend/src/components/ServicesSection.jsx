import React from 'react';
import { services } from '../mockData';
import { Database, RefreshCw, MessageSquare, FileText, TrendingUp, BarChart } from 'lucide-react';

const iconMap = {
  'database': Database,
  'refresh-cw': RefreshCw,
  'message-square': MessageSquare,
  'file-text': FileText,
  'trending-up': TrendingUp,
  'bar-chart': BarChart
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
              Unsere Leistungen
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFDA00]"></div>
            </h2>
          </div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Einfach erklärt - Full-Service Lösungen für Ihren Marktplatz-Erfolg
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#FFDA00] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFDA00] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-black" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;