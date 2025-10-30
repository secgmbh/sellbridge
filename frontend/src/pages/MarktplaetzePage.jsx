import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ShoppingCart, Globe, TrendingUp, Users, CheckCircle } from 'lucide-react';

const MarktplaetzePage = () => {
  const marketplaces = [
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      description: "Der weltweit größte Online-Marktplatz mit über 300 Millionen aktiven Kunden. Perfekt für Marken, die internationale Reichweite suchen.",
      stats: {
        users: "300M+ Kunden weltweit",
        market: "#1 Marktplatz Deutschland",
        growth: "15% jährliches Wachstum"
      },
      services: [
        "Amazon Vendor & Seller Central",
        "FBA (Fulfillment by Amazon)",
        "Amazon Advertising (PPC, Sponsored Ads)",
        "A+ Content & Brand Stores",
        "Amazon SEO & Listing-Optimierung",
        "Internationale Expansion"
      ],
      benefits: [
        "Höchste Reichweite in Deutschland",
        "Prime-Programm für schnellen Versand",
        "Umfangreiche Werbetools",
        "Globale Skalierungsmöglichkeiten"
      ]
    },
    {
      name: "OTTO",
      logo: "https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/ns4vjl5t_Unbenannt2.png",
      description: "Deutschlands zweitgrößter Online-Marktplatz mit 11 Millionen aktiven Kunden. Ideal für Marken mit Fokus auf den DACH-Raum.",
      stats: {
        users: "11M+ aktive Kunden",
        market: "#2 Marktplatz Deutschland",
        growth: "25% jährliches Wachstum"
      },
      services: [
        "OTTO Market Seller Setup",
        "OTTO Produktdaten-Optimierung",
        "OTTO Performance Marketing",
        "Content-Erstellung für OTTO",
        "OTTO Analytics & Reporting",
        "Kategorie-spezifische Strategien"
      ],
      benefits: [
        "Hohe Kaufkraft der Kunden",
        "Starker Fokus auf Qualität",
        "Attraktive Provisionsmodelle",
        "Wachsender Marktanteil"
      ]
    },
    {
      name: "Kaufland",
      logo: "https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/hb469b5t_Unbenannt.png",
      description: "Der aufstrebende Marktplatz der Schwarz-Gruppe mit starkem Wachstum. Besonders stark in den Kategorien Food, Non-Food und Haushalt.",
      stats: {
        users: "8M+ Kunden monatlich",
        market: "Schnellst wachsend",
        growth: "40% jährliches Wachstum"
      },
      services: [
        "Kaufland Marketplace Setup",
        "FBK (Fulfillment by Kaufland)",
        "Kaufland Sponsored Ads",
        "Produkt-SEO für Kaufland",
        "Cross-Border Selling",
        "Kategorien-Optimierung"
      ],
      benefits: [
        "Geringere Wettbewerbsdichte",
        "Attraktive Konditionen",
        "Internationale Expansion Möglichkeiten",
        "Starke Marke im Hintergrund"
      ]
    },
    {
      name: "eBay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
      description: "Einer der ältesten und etabliertesten Marktplätze mit breiter Produktpalette. Ideal für B2C und C2C Geschäftsmodelle.",
      stats: {
        users: "20M+ Kunden in Deutschland",
        market: "#3 Marktplatz Deutschland",
        growth: "Stabil mit Fokus auf Nischen"
      },
      services: [
        "eBay Shop-Einrichtung",
        "eBay SEO (Cassini)",
        "eBay Promoted Listings",
        "Internationaler Verkauf",
        "Auktions- & Festpreis-Strategien",
        "Top Rated Seller Programme"
      ],
      benefits: [
        "Große internationale Reichweite",
        "Flexible Verkaufsformate",
        "Starke Nischen-Communities",
        "Etablierte Käuferschaft"
      ]
    },
    {
      name: "OBI",
      logo: "https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/luieocu2_Screenshot%202025-10-30%20093705.png",
      description: "Führender Baumarkt und DIY-Marktplatz in Deutschland. Ideal für Heimwerker-, Garten- und Bauprodukten mit starker Markenbindung.",
      stats: {
        users: "15M+ Kunden",
        market: "Führend im DIY-Segment",
        growth: "20% jährliches Wachstum"
      },
      services: [
        "OBI Marketplace Setup",
        "Produktdaten-Optimierung für DIY",
        "Kategorien-spezifisches Marketing",
        "Content-Erstellung für Bauprodukte",
        "Saisonale Kampagnenplanung",
        "Performance-Tracking & Reporting"
      ],
      benefits: [
        "Starke Marke im Heimwerker-Bereich",
        "Hohe Kundentreue",
        "Attraktive Zielgruppe mit Kaufkraft",
        "Wachsender Online-Anteil"
      ]
    },
    {
      name: "HORNBACH",
      logo: "https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/o2z1b8i1_grafik.png",
      description: "Premium-Baumarkt mit starker Marke im Profi- und Heimwerker-Segment. Bekannt für 'Es gibt immer was zu tun' - ideal für hochwertige Bau- und Gartenprodukte.",
      stats: {
        users: "12M+ Kunden",
        market: "Premium DIY-Segment",
        growth: "18% jährliches Wachstum"
      },
      services: [
        "HORNBACH Marketplace Onboarding",
        "Premium-Produktdarstellung",
        "Profi-Sortiment Integration",
        "Content-Marketing für DIY-Projekte",
        "Cross-Channel Kampagnen",
        "Qualitätsfokussiertes Listing"
      ],
      benefits: [
        "Premium-Positionierung im Markt",
        "Starke Projekt-Community",
        "Hohe Durchschnittspreise",
        "Loyale Stammkundschaft"
      ]
    }
  ];

  const additionalPlatforms = [
    { name: "MediaMarkt", category: "Elektronik", logo: "https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/ikul2ysr_grafik.png", size: "h-14" },
    { name: "Shop Apotheke", category: "Gesundheit", logo: "https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/5grjwes2_grafik.png", size: "h-10" },
    { name: "Walmart", category: "International", logo: "https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/yci62cra_grafik.png", size: "h-14" },
    { name: "Allegro", category: "Osteuropa" },
    { name: "bol.com", category: "Benelux" },
    { name: "Cdiscount", category: "Frankreich" },
    { name: "Zalando", category: "Fashion" },
    { name: "AboutYou", category: "Fashion" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFDA00] to-[#FFC700] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Marktplätze
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-8">
              Wir bringen Sie erfolgreich auf die wichtigsten E-Commerce-Plattformen in Deutschland und Europa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt">
                <Button className="bg-black hover:bg-gray-900 text-[#FFDA00] font-semibold text-lg px-8 py-6">
                  Marktplatz-Analyse anfordern
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Marketplaces */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere Haupt-Marktplätze
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zertifizierte Expertise für die größten Plattformen
            </p>
          </div>

          <div className="space-y-12">
            {marketplaces.map((marketplace, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 hover:border-[#FFDA00] transition-all duration-300 shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Main Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start mb-6">
                      <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mr-4 p-4 border-2 border-gray-200">
                        <img 
                          src={marketplace.logo} 
                          alt={`${marketplace.name} Logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {marketplace.name}
                        </h3>
                        <p className="text-gray-600">
                          {marketplace.description}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-white rounded-xl p-4 text-center shadow">
                        <div className="text-2xl font-bold text-[#FFDA00] mb-1">
                          {marketplace.stats.users}
                        </div>
                        <div className="text-xs text-gray-600">Nutzer</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center shadow">
                        <div className="text-2xl font-bold text-[#FFDA00] mb-1">
                          {marketplace.stats.market}
                        </div>
                        <div className="text-xs text-gray-600">Position</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center shadow">
                        <div className="text-2xl font-bold text-[#FFDA00] mb-1">
                          {marketplace.stats.growth}
                        </div>
                        <div className="text-xs text-gray-600">Wachstum</div>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Unsere Services:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {marketplace.services.map((service, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle size={16} className="text-[#FFDA00] mr-2 flex-shrink-0 mt-1" />
                            <span className="text-sm text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Benefits */}
                  <div className="bg-[#FFDA00] rounded-xl p-6">
                    <h4 className="font-bold text-black mb-4 text-lg">Ihre Vorteile:</h4>
                    <ul className="space-y-3">
                      {marketplace.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle size={16} className="text-black mr-2 flex-shrink-0 mt-1" />
                          <span className="text-sm text-black">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/kontakt">
                      <Button className="w-full mt-6 bg-black hover:bg-gray-900 text-[#FFDA00] font-semibold">
                        Mehr erfahren
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Weitere Marktplätze
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expandieren Sie auf weitere spezialisierte und internationale Plattformen
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalPlatforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {platform.logo ? (
                  <img 
                    src={platform.logo} 
                    alt={`${platform.name} Logo`}
                    className="h-14 mx-auto mb-3 object-contain"
                  />
                ) : (
                  <Globe size={40} className="text-[#FFDA00] mx-auto mb-3" />
                )}
                <h3 className="font-bold text-gray-900 mb-1">{platform.name}</h3>
                <p className="text-sm text-gray-600">{platform.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Welcher Marktplatz passt zu Ihnen?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Lassen Sie uns gemeinsam die optimale Marktplatz-Strategie für Ihre Marke entwickeln.
          </p>
          <Link to="/kontakt">
            <Button className="bg-[#FFDA00] hover:bg-[#E5C400] text-black font-semibold text-lg px-8 py-6">
              Kostenlose Marktplatz-Beratung
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MarktplaetzePage;