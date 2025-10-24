import React from 'react';

const DatenschutzPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFDA00] to-[#FFC700] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Hosting und Content Delivery Networks (CDN)</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Externes Hosting</h3>
            <p className="mb-4">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
              werden auf den Servern des Hosters gespeichert.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und 
              entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <p className="mb-2"><strong>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</strong></p>
              <p className="mb-2">sellBridge GmbH</p>
              <p className="mb-2">Musterstraße 123</p>
              <p className="mb-2">12345 Berlin</p>
              <p className="mb-2">Telefon: +49 123 456 7890</p>
              <p className="mb-2">E-Mail: info@sellbridge.de</p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="mb-4">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat 
              ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Cookies</h3>
            <p className="mb-4">
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. 
              Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen 
              Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p className="mb-4">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten 
              (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Soziale Medien</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Social-Media-Plugins</h3>
            <p className="mb-4">
              Wir setzen auf unserer Website auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO Social Plugins der sozialen Netzwerke Facebook, Twitter, Instagram und LinkedIn ein.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Analyse-Tools und Werbung</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Google Analytics</h3>
            <p className="mb-4">
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google"), Gordon House, 
              Barrow Street, Dublin 4, Irland.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Newsletter</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Newsletter­daten</h3>
            <p className="mb-4">
              Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, 
              welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.
            </p>

            <div className="bg-yellow-50 border-l-4 border-[#FFDA00] p-6 mt-8">
              <p className="text-sm text-gray-700">
                <strong>Hinweis:</strong> Dies ist eine Muster-Datenschutzerklärung. Bitte passen Sie diese an Ihre tatsächlichen Datenverarbeitungsprozesse an. 
                Für die rechtliche Korrektheit und Vollständigkeit sollten Sie einen Datenschutzbeauftragten oder Rechtsanwalt konsultieren.
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

export default DatenschutzPage;