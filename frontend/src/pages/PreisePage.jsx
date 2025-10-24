import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Check, X, ArrowRight } from 'lucide-react';

const PreisePage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfekt für Marken, die auf 1-2 Marktplätzen starten möchten",
      monthlyPrice: "999",
      yearlyPrice: "9.990",
      features: [
        { included: true, text: "Bis zu 2 Marktplätze" },
        { included: true, text: "Bis zu 100 Produkte" },
        { included: true, text: "Basis Produktdaten-Optimierung" },
        { included: true, text: "Bestandsautomatisierung" },
        { included: true, text: "Monatliche Reports" },
        { included: true, text: "E-Mail Support" },
        { included: false, text: "Dedicated Account Manager" },
        { included: false, text: "Advertising Management" },
        { included: false, text: "A/B Testing" },
        { included: false, text: "Internationalisierung" }
      ],
      cta: "Starter wählen",
      highlighted: false
    },
    {
      name: "Professional",
      description: "Für etablierte Marken mit Wachstumsambitionen",
      monthlyPrice: "2.499",
      yearlyPrice: "24.990",
      features: [
        { included: true, text: "Bis zu 5 Marktplätze" },
        { included: true, text: "Bis zu 500 Produkte" },
        { included: true, text: "Premium Produktdaten-Optimierung" },
        { included: true, text: "Bestandsautomatisierung" },
        { included: true, text: "Wöchentliche Reports" },
        { included: true, text: "Dedicated Account Manager" },
        { included: true, text: "Advertising Management (bis €5k Budget)" },
        { included: true, text: "A/B Testing" },
        { included: false, text: "Internationalisierung" },
        { included: false, text: "Individuelles Onboarding" }
      ],
      cta: "Professional wählen",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "Maßgeschneiderte Lösung für große Marken und Hersteller",
      monthlyPrice: "Individuell",
      yearlyPrice: "Individuell",
      features: [
        { included: true, text: "Unbegrenzte Marktplätze" },
        { included: true, text: "Unbegrenzte Produkte" },
        { included: true, text: "Full-Service Produktdaten-Management" },
        { included: true, text: "Erweiterte Automatisierung" },
        { included: true, text: "Echtzeit Reports & Custom Dashboards" },
        { included: true, text: "Dedicated Team" },
        { included: true, text: "Unbegrenztes Advertising Management" },
        { included: true, text: "Erweiterte Analytics & A/B Testing" },
        { included: true, text: "Internationalisierung" },
        { included: true, text: "Individuelles Onboarding & Workshops" }
      ],
      cta: "Angebot anfragen",
      highlighted: false
    }
  ];

  const additionalServices = [
    {
      name: "Content-Erstellung",
      description: "Professionelle Produktbilder, A+ Content, Brand Stores",
      price: "Ab €500/Produkt"
    },
    {
      name: "Internationalisierung",
      description: "Übersetzung und Anpassung für internationale Märkte",
      price: "Ab €1.500/Markt"
    },
    {
      name: "Performance Audit",
      description: "Umfassende Analyse Ihrer aktuellen Marktplatz-Performance",
      price: "€1.999 einmalig"
    },
    {
      name: "Workshop & Training",
      description: "Schulung Ihres Teams in Marktplatz-Best-Practices",
      price: "Ab €2.500/Tag"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFDA00] to-[#FFC700] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Transparente Preise
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-8">
              Wählen Sie das Paket, das zu Ihren Bedürfnissen passt. Keine versteckten Kosten, flexible Laufzeiten.
            </p>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-4">
            <span className={`font-semibold ${billingCycle === 'monthly' ? 'text-black' : 'text-gray-400'}`}>
              Monatlich
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-gray-300 rounded-full transition-colors duration-300 focus:outline-none"
              style={{ backgroundColor: billingCycle === 'yearly' ? '#FFDA00' : '#D1D5DB' }}
            >
              <span
                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300"
                style={{ transform: billingCycle === 'yearly' ? 'translateX(32px)' : 'translateX(0)' }}
              />
            </button>
            <span className={`font-semibold ${billingCycle === 'yearly' ? 'text-black' : 'text-gray-400'}`}>
              Jährlich
              <span className="ml-2 text-sm bg-[#FFDA00] text-black px-2 py-1 rounded-full">-17%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-[#FFDA00] to-[#FFC700] shadow-2xl transform scale-105'
                    : 'bg-white border-2 border-gray-200'
                } transition-all duration-300 hover:shadow-xl`}
              >
                {plan.highlighted && (
                  <div className="bg-black text-[#FFDA00] text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    BELIEBTESTES PAKET
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      {billingCycle === 'monthly' ? (
                        plan.monthlyPrice === 'Individuell' ? 'Individuell' : `€${plan.monthlyPrice}`
                      ) : (
                        plan.yearlyPrice === 'Individuell' ? 'Individuell' : `€${plan.yearlyPrice}`
                      )}
                    </span>
                    {plan.monthlyPrice !== 'Individuell' && (
                      <span className="ml-2 text-gray-600">
                        /{billingCycle === 'monthly' ? 'Monat' : 'Jahr'}
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  className={`w-full mb-6 font-semibold ${
                    plan.highlighted
                      ? 'bg-black hover:bg-gray-900 text-[#FFDA00]'
                      : 'bg-[#FFDA00] hover:bg-[#E5C400] text-black'
                  }`}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check size={20} className="text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X size={20} className="text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-400'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zusätzliche Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erweitern Sie Ihr Paket mit individuellen Zusatzleistungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#FFDA00]">{service.price}</span>
                  <Button variant="outline" className="border-[#FFDA00] text-[#FFDA00] hover:bg-[#FFDA00] hover:text-black">
                    Hinzufügen
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Häufige Fragen zu unseren Preisen
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Gibt es versteckte Kosten?</h3>
              <p className="text-gray-600">Nein, alle Kosten sind transparent aufgeführt. Es fallen keine Setup-Gebühren oder versteckten Kosten an.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Wie lange ist die Vertragslaufzeit?</h3>
              <p className="text-gray-600">Unsere Standardverträge haben eine Laufzeit von 12 Monaten. Danach verlängern sie sich automatisch um jeweils 6 Monate, falls nicht gekündigt wird.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Kann ich mein Paket später upgraden?</h3>
              <p className="text-gray-600">Ja, Sie können jederzeit auf ein höheres Paket upgraden. Die Differenz wird anteilig berechnet.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Was passiert bei Überschreitung der Produktanzahl?</h3>
              <p className="text-gray-600">Bei Überschreitung der im Paket enthaltenen Produktanzahl berechnen wir €5 pro zusätzlichem Produkt und Monat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Noch Fragen zu unseren Paketen?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Lassen Sie sich unverbindlich beraten und finden Sie das perfekte Paket für Ihre Bedürfnisse.
          </p>
          <Button className="bg-[#FFDA00] hover:bg-[#E5C400] text-black font-semibold text-lg px-8 py-6">
            Beratungsgespräch vereinbaren
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PreisePage;