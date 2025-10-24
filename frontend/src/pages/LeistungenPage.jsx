import React from 'react';
import { Button } from '../components/ui/button';
import { Database, RefreshCw, MessageSquare, FileText, TrendingUp, BarChart, CheckCircle, ArrowRight } from 'lucide-react';

const LeistungenPage = () => {
  const services = [
    {
      title: "Produktdaten-Management",
      icon: Database,
      description: "Professionelle Pflege und Optimierung Ihrer Produktdaten für alle Marktplätze",
      features: [
        "Optimierung von Titeln und Beschreibungen",
        "Keyword-Recherche und Integration",
        "Attribut-Mapping für alle Plattformen",
        "A/B-Testing von Produktinformationen",
        "Kontinuierliche Datenaktualisierung"
      ]
    },
    {
      title: "Bestandsautomatisierung",
      icon: RefreshCw,
      description: "Intelligente Synchronisation Ihrer Bestände über alle Verkaufskanäle hinweg",
      features: [
        "Echtzeit-Bestandssynchronisation",
        "Automatische Preisanpassungen",
        "Vermeidung von Überverkäufen",
        "Multi-Channel-Integration",
        "Lagerverwaltungs-Optimierung"
      ]
    },
    {
      title: "Kundenkommunikation",
      icon: MessageSquare,
      description: "Professionelles Management aller Kundenanfragen und Bewertungen",
      features: [
        "24/7 Kundenservice-Betreuung",
        "Reklamationsmanagement",
        "Bewertungsmanagement",
        "Mehrsprachiger Support",
        "Schnelle Reaktionszeiten"
      ]
    },
    {
      title: "Rechnungswesen & Dokumentation",
      icon: FileText,
      description: "Vollständige Abwicklung aller administrativen Prozesse",
      features: [
        "Automatisierte Rechnungserstellung",
        "Digitale Belegarchivierung",
        "Steuerkonformes Reporting",
        "Export für Buchhaltungssysteme",
        "Monatliche Finanzübersichten"
      ]
    },
    {
      title: "Marketing & Advertising",
      icon: TrendingUp,
      description: "Datengetriebene Werbestrategien für maximalen ROI",
      features: [
        "Amazon PPC & Sponsored Ads",
        "OTTO Performance Marketing",
        "Kampagnen-Optimierung",
        "Budget-Management",
        "Conversion-Rate-Optimierung"
      ]
    },
    {
      title: "Analytics & Reporting",
      icon: BarChart,
      description: "Umfassende Analysen und transparente Erfolgsmessung",
      features: [
        "Detaillierte Performance-Reports",
        "Wettbewerbsanalysen",
        "KPI-Dashboards",
        "Forecasting und Trends",
        "Handlungsempfehlungen"
      ]
    }
  ];

  const platforms = [
    {
      name: "Amazon Full-Service",
      description: "Als zertifizierte Amazon-Partner-Agentur bieten wir Ihnen umfassende Betreuung von der Listing-Optimierung bis zum Advertising.",
      features: ["SEO-Optimierung", "PPC-Kampagnen", "A+ Content", "Brand Store"]
    },
    {
      name: "OTTO Partner-Agentur",
      description: "Profitieren Sie von unserer Expertise als OTTO Partner-Agentur für nachhaltiges Wachstum auf Deutschlands zweitgrößtem Marktplatz.",
      features: ["Listing-Optimierung", "Performance Marketing", "Content-Erstellung", "Account-Management"]
    },
    {
      name: "Kaufland Marketplace",
      description: "Erschließen Sie neue Umsatzpotenziale mit professioneller Betreuung auf dem wachsenden Kaufland Marketplace.",
      features: ["FBK Integration", "Sponsored Ads", "Produkt-SEO", "Marktanalysen"]
    },
    {
      name: "eBay & weitere Marktplätze",
      description: "Erweitern Sie Ihre Reichweite auf eBay, MediaMarkt, Shop Apotheke und viele weitere Plattformen.",
      features: ["Multi-Channel-Integration", "Internationalisierung", "Plattform-Setup", "Performance-Tracking"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFDA00] to-[#FFC700] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Unsere Leistungen
          </h1>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-8">
            Full-Service Marktplatz-Management für Ihren nachhaltigen Erfolg auf Amazon, OTTO, Kaufland und weiteren Plattformen.
          </p>
          <Button className="bg-black hover:bg-gray-900 text-[#FFDA00] font-semibold text-lg px-8 py-6">
            Kostenlose Beratung anfordern
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unser Full-Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der Datenpflege bis zum Reporting – wir übernehmen alle Aufgaben rund um Ihre Marktplatz-Präsenz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#FFDA00] transition-all duration-300 hover:shadow-xl"
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFDA00] rounded-xl">
                      <Icon size={32} className="text-black" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle size={20} className="text-[#FFDA00] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Plattform-spezifische Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jeder Marktplatz hat seine eigenen Besonderheiten – wir kennen sie alle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {platform.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {platform.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {platform.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-[#FFDA00] text-black text-sm font-semibold px-4 py-2 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Lassen Sie uns gemeinsam Ihre Marktplatz-Strategie entwickeln
          </p>
          <Button className="bg-[#FFDA00] hover:bg-[#E5C400] text-black font-semibold text-lg px-8 py-6">
            Jetzt Beratungsgespräch vereinbaren
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LeistungenPage;