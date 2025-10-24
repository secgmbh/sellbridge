import React from 'react';

const ImpressumPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFDA00] to-[#FFC700] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
            Impressum
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="mb-2"><strong>sellBridge GmbH</strong></p>
              <p className="mb-2">Musterstraße 123</p>
              <p className="mb-2">12345 Berlin</p>
              <p className="mb-2">Deutschland</p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Vertreten durch:</h3>
            <p className="mb-4">Geschäftsführer: [Name des Geschäftsführers]</p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Kontakt:</h3>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="mb-2"><strong>Telefon:</strong> +49 123 456 7890</p>
              <p className="mb-2"><strong>E-Mail:</strong> info@sellbridge.de</p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Registereintrag:</h3>
            <p className="mb-2"><strong>Eintragung im Handelsregister:</strong></p>
            <p className="mb-2">Registergericht: Amtsgericht Berlin</p>
            <p className="mb-2">Registernummer: HRB [Nummer]</p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Umsatzsteuer-ID:</h3>
            <p className="mb-4">
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              DE [Nummer]
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
            <p className="mb-4">[Name und Anschrift]</p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">EU-Streitschlichtung:</h3>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#FFDA00] hover:underline">
                https://ec.europa.eu/consumers/odr
              </a><br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Verbraucherstreitbeilegung/Universalschlichtungsstelle:</h3>
            <p className="mb-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Haftungsausschluss:</h3>
            
            <h4 className="text-lg font-bold text-gray-900 mb-2 mt-6">Haftung für Inhalte</h4>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
              oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h4 className="text-lg font-bold text-gray-900 mb-2 mt-6">Haftung für Links</h4>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden 
              Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h4 className="text-lg font-bold text-gray-900 mb-2 mt-6">Urheberrecht</h4>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, 
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen 
              Autors bzw. Erstellers.
            </p>

            <div className="bg-yellow-50 border-l-4 border-[#FFDA00] p-6 mt-8">
              <p className="text-sm text-gray-700">
                <strong>Hinweis:</strong> Dies ist ein Muster-Impressum. Bitte ersetzen Sie alle Platzhalter durch Ihre tatsächlichen Unternehmensdaten. 
                Für die rechtliche Korrektheit und Vollständigkeit sollten Sie einen Rechtsanwalt konsultieren.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpressumPage;