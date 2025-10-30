import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-yellow-50 to-white overflow-hidden">
      {/* Decorative yellow element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFDA00] opacity-10 transform skew-x-12 translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="inline-block bg-[#FFDA00] text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Full-Service Marktplatz-Management
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Erfolgreich verkaufen auf
              <span className="text-[#FFDA00]"> OBI, Mediamarkt</span> & Co.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              sellBridge ist Ihre professionelle Marktplatz-Agentur mit Boutique-Betreuung. 
              Wir steigern Ihre Sichtbarkeit, verbessern die Performance und entlasten Ihr Team.
            </p>

            {/* Key Points */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#FFDA00] flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">Über 5 Jahre Marktplatz-Expertise</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#FFDA00] flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">49+ erfolgreiche Partnerunternehmen</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#FFDA00] flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">Integration von 23+ Marktplätzen</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#FFDA00] flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">Durchschnittlich 230% Umsatzwachstum</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kontakt">
                <Button className="bg-[#FFDA00] hover:bg-[#E5C400] text-black font-semibold text-lg px-8 py-6">
                  Kostenloses Erstgespräch buchen
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/leistungen">
                <Button variant="outline" className="border-2 border-gray-300 hover:border-[#FFDA00] text-gray-700 font-semibold text-lg px-8 py-6">
                  Mehr erfahren
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative z-10">
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 border-8 border-[#FFDA00]">
              {/* Dashboard Mock */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-center pb-4 border-b-2 border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900">Performance Dashboard</h3>
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Live</span>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#FFDA00] to-[#FFC700] rounded-xl p-4">
                    <div className="text-sm text-black mb-1 font-medium">Umsatz heute</div>
                    <div className="text-3xl font-bold text-black">€24,580</div>
                    <div className="text-xs text-green-800 mt-1 font-semibold">↑ +28%</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                    <div className="text-sm text-gray-600 mb-1 font-medium">Bestellungen</div>
                    <div className="text-3xl font-bold text-gray-900">187</div>
                    <div className="text-xs text-green-600 mt-1 font-semibold">↑ +15%</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                    <div className="text-sm text-gray-600 mb-1 font-medium">Conversion</div>
                    <div className="text-3xl font-bold text-gray-900">4.8%</div>
                    <div className="text-xs text-green-600 mt-1 font-semibold">↑ +1.2%</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                    <div className="text-sm text-gray-600 mb-1 font-medium">Produkte</div>
                    <div className="text-3xl font-bold text-gray-900">842</div>
                    <div className="text-xs text-gray-600 mt-1 font-semibold">Aktiv</div>
                  </div>
                </div>

                {/* Chart */}
                <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                  <div className="text-sm font-semibold text-gray-700 mb-3">Verkäufe (7 Tage)</div>
                  <div className="flex items-end justify-between h-24 space-x-2">
                    {[65, 45, 75, 55, 85, 70, 90].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#FFDA00] to-[#FFC700] rounded-t transition-all hover:opacity-80"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Marketplaces */}
                <div className="flex justify-between items-center pt-2">
                  <div className="text-xs text-gray-500 font-medium">Aktive Marktplätze:</div>
                  <div className="flex space-x-2">
                    {['A', 'O', 'K', 'E'].map((letter, i) => (
                      <div key={i} className="w-8 h-8 bg-[#FFDA00] rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {letter}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;