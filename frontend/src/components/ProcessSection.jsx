import React from 'react';
import { Link } from 'react-router-dom';
import { processSteps } from '../mockData';
import { UserPlus, Link as LinkIcon, Rocket, Activity } from 'lucide-react';
import { Button } from './ui/button';

const iconMap = {
  'user-plus': UserPlus,
  'link': LinkIcon,
  'rocket': Rocket,
  'activity': Activity
};

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
              Unser Ablauf
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFDA00]"></div>
            </h2>
          </div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            So funktioniert sellBridge - In 4 einfachen Schritten zum Erfolg
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#FFDA00] transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.id} className="relative">
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#FFDA00]">
                    {/* Step Number */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-[#FFDA00] rounded-full flex items-center justify-center shadow-lg">
                          <Icon size={36} className="text-black" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-black text-[#FFDA00] rounded-full flex items-center justify-center font-bold text-lg">
                          {step.id}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow for mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-1 h-8 bg-[#FFDA00]"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/ablauf">
            <Button className="bg-black hover:bg-gray-900 text-[#FFDA00] font-semibold text-lg px-8 py-6">
              Workflow ansehen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;