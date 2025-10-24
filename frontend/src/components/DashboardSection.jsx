import React from 'react';
import { dashboardFeatures } from '../mockData';
import { Eye, Users, FileBarChart, Folder } from 'lucide-react';
import { Button } from './ui/button';

const iconMap = {
  'eye': Eye,
  'users': Users,
  'file-bar-chart': FileBarChart,
  'folder': Folder
};

const DashboardSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
                Live-Dashboard &
                <br />
                <span className="text-[#FFDA00]">Persönlicher Support</span>
                <div className="absolute -bottom-2 left-0 w-32 h-1 bg-[#FFDA00]"></div>
              </h2>
            </div>
            <p className="mt-6 text-xl text-gray-300 mb-8">
              Behalten Sie jederzeit den Überblick über Ihre Marktplatz-Performance und profitieren Sie von persönlicher Betreuung.
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-8">
              {dashboardFeatures.map((feature) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div key={feature.id} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#FFDA00] rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-black" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button className="bg-[#FFDA00] hover:bg-[#E5C400] text-black font-semibold text-lg px-8 py-6">
              Dashboard-Demo ansehen
            </Button>
          </div>

          {/* Right Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Performance Übersicht</h3>
                  <span className="text-sm text-gray-500">Live</span>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#FFDA00] to-[#FFC700] rounded-xl p-4">
                    <div className="text-sm text-black mb-1">Umsatz heute</div>
                    <div className="text-2xl font-bold text-black">€12,450</div>
                    <div className="text-xs text-green-700 mt-1">↑ +18%</div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-1">Bestellungen</div>
                    <div className="text-2xl font-bold text-gray-900">87</div>
                    <div className="text-xs text-green-600 mt-1">↑ +12%</div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-1">Conversion Rate</div>
                    <div className="text-2xl font-bold text-gray-900">4.2%</div>
                    <div className="text-xs text-green-600 mt-1">↑ +0.8%</div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-1">Aktive Listings</div>
                    <div className="text-2xl font-bold text-gray-900">342</div>
                    <div className="text-xs text-gray-600 mt-1">Stabil</div>
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="bg-gray-50 rounded-xl p-4 h-40 flex items-end justify-between space-x-2">
                  {[65, 45, 75, 55, 85, 70, 90].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#FFDA00] rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;