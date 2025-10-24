import React from 'react';
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
              <span className="text-[#FFDA00]"> Amazon, OTTO</span> & Co.
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
              <Button className="bg-[#FFDA00] hover:bg-[#E5C400] text-black font-semibold text-lg px-8 py-6">
                Kostenloses Erstgespräch buchen
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 hover:border-[#FFDA00] text-gray-700 font-semibold text-lg px-8 py-6">
                Mehr über uns erfahren
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative z-10">
            <div className="relative bg-gradient-to-br from-[#FFDA00] to-[#FFC700] rounded-3xl p-12 shadow-2xl">
              <div className="text-center">
                <div className="text-8xl mb-6">📦</div>
                <h3 className="text-3xl font-bold text-black mb-4">Effizient & Automatisiert</h3>
                <p className="text-xl text-gray-900">
                  Verkaufen auf über 23 Marktplätzen mit nur einer Plattform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;