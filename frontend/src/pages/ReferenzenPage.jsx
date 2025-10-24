import React from 'react';
import { Button } from '../components/ui/button';
import { caseStudies, testimonials } from '../mockData';
import { Star, ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

const ReferenzenPage = () => {
  const successMetrics = [
    {
      icon: TrendingUp,
      value: "230%",
      label: "Durchschnittliche Umsatzsteigerung",
      description: "In den ersten 12 Monaten der Zusammenarbeit"
    },
    {
      icon: Users,
      value: "49+",
      label: "Zufriedene Partnerunternehmen",
      description: "Aus verschiedenen Branchen und Größen"
    },
    {
      icon: Target,
      value: "95%",
      label: "Kundenzufriedenheit",
      description: "Würden uns weiterempfehlen"
    }
  ];

  const industries = [
    { name: "Elektronik & Technik", count: "12 Kunden" },
    { name: "Mode & Textilien", count: "8 Kunden" },
    { name: "Haus & Garten", count: "10 Kunden" },
    { name: "Sport & Outdoor", count: "6 Kunden" },
    { name: "Gesundheit & Beauty", count: "7 Kunden" },
    { name: "Lebensmittel & Getränke", count: "6 Kunden" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFDA00] to-[#FFC700] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Erfolgsgeschichten
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Erfahren Sie, wie wir Marken dabei helfen, auf Amazon, OTTO und weiteren Marktplätzen nachhaltig zu wachsen.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-[#FFDA00] transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFDA00] rounded-full mb-6">
                    <Icon size={32} className="text-black" />
                  </div>
                  <div className="text-5xl font-bold text-black mb-2">{metric.value}</div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">{metric.label}</div>
                  <p className="text-gray-600 text-sm">{metric.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ausgewählte Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detaillierte Einblicke in erfolgreiche Projekte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#FFDA00] to-[#FFC700] flex items-center justify-center">
                  <div className="text-6xl font-bold text-black">{study.company.charAt(0)}</div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {study.company}
                    </h3>
                    <span className="inline-block bg-[#FFDA00] text-black text-xs font-semibold px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Herausforderung</div>
                      <p className="text-sm text-gray-700">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Ergebnis</div>
                      <p className="text-sm font-bold text-[#FFDA00] text-lg">{study.result}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <p className="text-sm text-gray-600 italic">"{study.testimonial}"</p>
                  </div>

                  <Button className="w-full bg-black hover:bg-gray-900 text-[#FFDA00] font-semibold">
                    Case Study lesen
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Was unsere Kunden sagen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
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

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere Branchen-Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir betreuen Marken aus verschiedensten Bereichen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex justify-between items-center"
              >
                <div className="font-bold text-gray-900">{industry.name}</div>
                <div className="text-sm text-gray-600 bg-[#FFDA00] px-3 py-1 rounded-full">
                  {industry.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Erfolg durch Partnerschaft
            </h2>
            <p className="text-xl text-gray-300">
              Sehen Sie selbst, wie die Zusammenarbeit mit sellBridge funktioniert
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="bg-gray-800 rounded-2xl aspect-video flex items-center justify-center mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFDA00] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <p className="text-gray-400">Video-Testimonial</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl mb-2">"Die Zusammenarbeit mit sellBridge hat unser Marktplatz-Geschäft transformiert"</p>
            <p className="text-gray-400">- Bernd Avenarius, CEO</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Werden Sie unsere nächste Erfolgsgeschichte
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Lassen Sie uns gemeinsam Ihre Ziele erreichen
          </p>
          <Button className="bg-[#FFDA00] hover:bg-[#E5C400] text-black font-semibold text-lg px-8 py-6">
            Kostenloses Beratungsgespräch vereinbaren
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ReferenzenPage;