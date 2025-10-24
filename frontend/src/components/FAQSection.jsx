import React from 'react';
import { faqData } from '../mockData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
              Häufig gestellte Fragen
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFDA00]"></div>
            </h2>
          </div>
          <p className="mt-6 text-xl text-gray-600">
            Alles, was Sie über sellBridge wissen müssen
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border-b border-gray-200 last:border-0">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#FFDA00] transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;