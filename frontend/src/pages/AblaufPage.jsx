import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { UserPlus, Link as LinkIcon, Rocket, Activity, CheckCircle, Clock, Users, BarChart3 } from 'lucide-react';

const AblaufPage = () => {
  const processSteps = [
    {
      number: 1,
      title: "Erstgespräch & Analyse",
      icon: Users,
      duration: "1-2 Tage",
      description: "In einem persönlichen Gespräch lernen wir Ihre Marke, Produkte und Ziele kennen. Wir analysieren Ihre aktuelle Marktplatz-Präsenz und identifizieren Optimierungspotenziale.",
      tasks: [
        "Kostenlose Erstberatung (30-60 Min)",
        "Analyse Ihrer aktuellen Performance",
        "Identifikation von Wachstumschancen",
        "Erstellung eines individuellen Strategievorschlags",
        "Transparente Kosten- und Zeitplanung"
      ]
    },
    {
      number: 2,
      title: "Onboarding & Integration",
      icon: LinkIcon,
      duration: "1-2 Wochen",
      description: "Wir integrieren Ihre Systeme und richten alle notwendigen Zugänge ein. Ihre Produktdaten werden übernommen und für die Marktplätze optimiert.",
      tasks: [
        "Einrichtung aller Zugänge und API-Schnittstellen",
        "Import Ihrer Produktdaten",
        "Integration Ihrer ERP/Warenwirtschaftssysteme",
        "Einrichtung des sellBridge Dashboards",
        "Kick-off Meeting mit Ihrem persönlichen Team"
      ]
    },
    {
      number: 3,
      title: "Optimierung & Go-Live",
      icon: Rocket,
      duration: "2-4 Wochen",
      description: "Ihre Produkte werden für maximale Sichtbarkeit optimiert und auf den ausgewählten Marktplätzen live geschaltet. Parallel starten wir erste Marketing-Maßnahmen.",
      tasks: [
        "SEO-Optimierung aller Produktlistings",
        "Erstellung hochwertiger Produktbilder und Content",
        "Launch auf den vereinbarten Marktplätzen",
        "Start erster Werbekampagnen",
        "Einrichtung von Tracking und Monitoring"
      ]
    },
    {
      number: 4,
      title: "Laufender Betrieb & Wachstum",
      icon: Activity,
      duration: "Kontinuierlich",
      description: "Wir betreuen Ihre Marktplatz-Aktivitäten vollumfänglich, optimieren kontinuierlich und sorgen für nachhaltiges Wachstum. Sie erhalten regelmäßige Reports und haben jederzeit Zugriff auf alle Daten.",
      tasks: [
        "Tägliches Monitoring und Management",
        "Kontinuierliche Performance-Optimierung",
        "Monatliche Reports und Strategiegespräche",
        "Saisonale Kampagnenplanung",
        "Proaktive Anpassungen und Verbesserungen"
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Schneller Start",
      description: "Innerhalb von 2-4 Wochen sind Ihre ersten Produkte live und optimiert"
    },
    {
      icon: Users,
      title: "Persönliches Team",
      description: "Feste Ansprechpartner, die Ihre Marke und Ziele verstehen"
    },
    {
      icon: BarChart3,
      title: "Volle Transparenz",
      description: "Jederzeit Zugriff auf alle Daten und detaillierte Performance-Reports"
    },
    {
      icon: CheckCircle,
      title: "Kein Risiko",
      description: "Flexible Verträge ohne lange Laufzeiten – Sie bleiben Herr Ihrer Entscheidungen"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFDA00] to-[#FFC700] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              So funktioniert die Zusammenarbeit
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Von der ersten Kontaktaufnahme bis zum laufenden Erfolg – transparent, effizient und partnerschaftlich.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-1/2 top-full h-16 w-1 bg-[#FFDA00] transform -translate-x-1/2 hidden lg:block" />
                  )}
                  
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Number Badge */}
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}>
                      <div className="relative">
                        <div className="w-64 h-64 bg-gradient-to-br from-[#FFDA00] to-[#FFC700] rounded-full flex items-center justify-center shadow-2xl">
                          <div className="text-center">
                            <div className="text-7xl font-bold text-black mb-4">{step.number}</div>
                            <Icon size={60} className="text-black mx-auto" />
                          </div>
                        </div>
                        <div className="absolute -top-4 -right-4 bg-black text-[#FFDA00] px-4 py-2 rounded-full font-semibold text-sm">
                          {step.duration}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {step.description}
                      </p>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-bold text-gray-900 mb-4">Was passiert in dieser Phase:</h4>
                        <ul className="space-y-3">
                          {step.tasks.map((task, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle size={20} className="text-[#FFDA00] mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ihre Vorteile mit sellBridge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Warum sich Marken für uns entscheiden
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFDA00] rounded-full mb-6">
                    <Icon size={32} className="text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Starten Sie noch heute!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Vereinbaren Sie Ihr kostenloses Erstgespräch und erfahren Sie, wie wir Ihr Marktplatz-Geschäft skalieren können.
          </p>
          <Link to="/kontakt">
            <Button className="bg-[#FFDA00] hover:bg-[#E5C400] text-black font-semibold text-lg px-8 py-6">
              Kostenloses Erstgespräch buchen
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AblaufPage;