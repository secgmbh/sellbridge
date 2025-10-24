import React from 'react';

const AGBPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFDA00] to-[#FFC700] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 1 Geltungsbereich</h2>
            <p className="mb-4">
              (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") der sellBridge GmbH (nachfolgend "Auftragnehmer") gelten für alle 
              Verträge über die Erbringung von Dienstleistungen im Bereich Marktplatz-Management.
            </p>
            <p className="mb-4">
              (2) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers werden nur dann und insoweit 
              Vertragsbestandteil, als der Auftragnehmer ihrer Geltung ausdrücklich zugestimmt hat.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">§ 2 Vertragsgegenstand und Leistungsumfang</h2>
            <p className="mb-4">
              (1) Der Auftragnehmer erbringt Dienstleistungen im Bereich des Marktplatz-Managements für Online-Plattformen wie Amazon, OTTO, Kaufland und weitere.
            </p>
            <p className="mb-4">
              (2) Der genaue Leistungsumfang ergibt sich aus dem individuellen Angebot und der Leistungsbeschreibung, die Vertragsbestandteil werden.
            </p>
            <p className="mb-4">
              (3) Die Leistungen umfassen insbesondere:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Produktdaten-Management und Optimierung</li>
              <li>Bestandsautomatisierung</li>
              <li>Kundenkommunikation und Fallmanagement</li>
              <li>Rechnungsservice und Dokumentation</li>
              <li>Marketing und Advertising</li>
              <li>Analyse und Reporting</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">§ 3 Vertragsschluss</h2>
            <p className="mb-4">
              (1) Die Präsentation der Leistungen auf der Website stellt kein bindendes Angebot dar, sondern eine unverbindliche Aufforderung 
              an den Kunden, Leistungen zu bestellen.
            </p>
            <p className="mb-4">
              (2) Der Vertrag kommt durch die schriftliche oder elektronische Auftragsbestätigung des Auftragnehmers zustande.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">§ 4 Preise und Zahlungsbedingungen</h2>
            <p className="mb-4">
              (1) Es gelten die zum Zeitpunkt der Bestellung angegebenen Preise. Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
            </p>
            <p className="mb-4">
              (2) Die Abrechnung erfolgt monatlich auf Basis der vereinbarten Paketpreise oder nach Aufwand.
            </p>
            <p className="mb-4">
              (3) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">§ 5 Leistungserbringung und Mitwirkungspflichten</h2>
            <p className="mb-4">
              (1) Der Auftragnehmer erbringt die vereinbarten Leistungen mit der Sorgfalt eines ordentlichen Kaufmanns.
            </p>
            <p className="mb-4">
              (2) Der Auftraggeber verpflichtet sich, dem Auftragnehmer alle für die Leistungserbringung notwendigen Informationen, Zugänge und 
              Unterlagen rechtzeitig zur Verfügung zu stellen.
            </p>
            <p className="mb-4">
              (3) Der Auftraggeber ist verantwortlich für die Richtigkeit und Rechtmäßigkeit der zur Verfügung gestellten Daten und Inhalte.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">§ 6 Vertragslaufzeit und Kündigung</h2>
            <p className="mb-4">
              (1) Die Vertragslaufzeit ergibt sich aus der individuellen Vereinbarung. Sofern nichts anderes vereinbart wurde, beträgt die Mindestlaufzeit 12 Monate.
            </p>
            <p className="mb-4">
              (2) Der Vertrag verlängert sich automatisch um jeweils 6 Monate, wenn er nicht mit einer Frist von 3 Monaten zum Ende der Laufzeit 
              schriftlich gekündigt wird.
            </p>
            <p className="mb-4">
              (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">§ 7 Geheimhaltung und Datenschutz</h2>
            <p className="mb-4">
              (1) Beide Parteien verpflichten sich, alle im Rahmen der Geschäftsbeziehung bekannt gewordenen vertraulichen Informationen streng vertraulich zu behandeln.
            </p>
            <p className="mb-4">
              (2) Der Auftragnehmer verpflichtet sich, die Bestimmungen der Datenschutz-Grundverordnung (DSGVO) und anderer datenschutzrechtlicher Vorschriften einzuhalten.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">§ 8 Haftung</h2>
            <p className="mb-4">
              (1) Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer 
              vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen.
            </p>
            <p className="mb-4">
              (2) Für sonstige Schäden haftet der Auftragnehmer nur bei Vorsatz und grober Fahrlässigkeit.
            </p>
            <p className="mb-4">
              (3) Die Haftung für mittelbare Schäden und Folgeschäden ist ausgeschlossen, soweit nicht zwingend gehaftet wird.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">§ 9 Schlussbestimmungen</h2>
            <p className="mb-4">
              (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            <p className="mb-4">
              (2) Erfüllungsort und Gerichtsstand ist Berlin, sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder 
              öffentlich-rechtliches Sondervermögen ist.
            </p>
            <p className="mb-4">
              (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt.
            </p>

            <div className="bg-yellow-50 border-l-4 border-[#FFDA00] p-6 mt-8">
              <p className="text-sm text-gray-700">
                <strong>Hinweis:</strong> Dies sind Muster-AGB. Bitte lassen Sie diese von einem Rechtsanwalt prüfen und an Ihr Geschäftsmodell anpassen. 
                Die rechtliche Korrektheit und Vollständigkeit kann nur durch einen Fachanwalt sichergestellt werden.
              </p>
            </div>

            <p className="mt-8 text-sm text-gray-600">
              <strong>Stand:</strong> Januar 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AGBPage;