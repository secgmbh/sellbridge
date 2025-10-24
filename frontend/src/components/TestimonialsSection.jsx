import React from 'react';
import { testimonials } from '../mockData';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
              Das sagen unsere Kunden
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFDA00]"></div>
            </h2>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#FFDA00]"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote size={40} className="text-[#FFDA00]" />
              </div>
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#FFDA00] text-[#FFDA00]" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.position}</div>
                <div className="text-sm text-[#FFDA00] font-semibold">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;