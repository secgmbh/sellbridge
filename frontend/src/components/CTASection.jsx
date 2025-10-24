import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 bg-[#FFDA00] rounded-full flex items-center justify-center text-4xl font-bold text-black">
            LS
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Kostenloses Erstgespräch buchen
        </h2>
        
        <p className="text-xl text-gray-300 mb-8">
          Sprechen Sie mit unserem Geschäftsführer Lars Seuss
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#FFDA00] mb-6">
            Eignet sich für Marken, die:
          </h3>
          <ul className="text-left space-y-3 max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="text-[#FFDA00] mr-3 text-xl">✓</span>
              <span className="text-gray-200">Umsatz und Profit steigern wollen</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FFDA00] mr-3 text-xl">✓</span>
              <span className="text-gray-200">Absatzpotenziale anhand von Datenanalysen optimal nutzen möchten</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FFDA00] mr-3 text-xl">✓</span>
              <span className="text-gray-200">Zusätzliche Marktplätze erschließen wollen</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FFDA00] mr-3 text-xl">✓</span>
              <span className="text-gray-200">Eine Internationalisierung professionell umsetzen möchten</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FFDA00] mr-3 text-xl">✓</span>
              <span className="text-gray-200">Einen verlässlichen Partner für Account-Management und Advertising suchen</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/kontakt">
            <Button className="bg-[#FFDA00] hover:bg-[#E5C400] text-black font-semibold text-lg px-8 py-6">
              Termin auswählen
            </Button>
          </Link>
          <a href="tel:+491234567890">
            <Button variant="outline" className="border-2 border-[#FFDA00] text-[#FFDA00] hover:bg-[#FFDA00] hover:text-black font-semibold text-lg px-8 py-6">
              <Phone className="mr-2" size={20} />
              +49 123 456 7890
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;