import React from 'react';
import { caseStudies } from '../mockData';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const CaseStudiesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
              Erfolgsgeschichten
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFDA00]"></div>
            </h2>
          </div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Unsere Kunden auf Amazon, OTTO und weiteren Marktplätzen
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#FFDA00] to-[#FFC700] flex items-center justify-center">
                <div className="text-4xl font-bold text-black">{study.company.charAt(0)}</div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#FFDA00] transition-colors">
                  {study.company}
                </h3>
                <div className="text-sm text-gray-500 mb-4">{study.industry}</div>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Herausforderung</div>
                    <p className="text-sm text-gray-700">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Ergebnis</div>
                    <p className="text-sm font-bold text-[#FFDA00]">{study.result}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600 italic">"{study.testimonial}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="bg-[#FFDA00] hover:bg-[#E5C400] text-black font-semibold text-lg px-8 py-6">
            Alle Case Studies ansehen
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;