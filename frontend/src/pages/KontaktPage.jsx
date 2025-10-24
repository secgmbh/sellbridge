import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const KontaktPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier würde die eigentliche Form-Submission stattfinden
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      interest: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+49 123 456 7890",
      subtext: "Mo-Fr, 9:00 - 18:00 Uhr"
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: "info@sellbridge.de",
      subtext: "Antwort innerhalb von 24h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Musterstraße 123, 12345 Berlin",
      subtext: "Termine nach Vereinbarung"
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      content: "Montag - Freitag",
      subtext: "09:00 - 18:00 Uhr"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFDA00] to-[#FFC700] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Haben Sie Fragen? Wir sind für Sie da! Vereinbaren Sie ein kostenloses Beratungsgespräch.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#FFDA00] transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FFDA00] rounded-lg mb-4">
                    <Icon size={24} className="text-black" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-900 font-semibold mb-1">{info.content}</p>
                  <p className="text-sm text-gray-600">{info.subtext}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Senden Sie uns eine Nachricht
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr Name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ihre.email@beispiel.de"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 123 456 7890"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Unternehmen
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ihr Unternehmen"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Ich interessiere mich für *
                  </label>
                  <Select
                    value={formData.interest}
                    onValueChange={(value) => setFormData({ ...formData, interest: value })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-service">Full-Service Management</SelectItem>
                      <SelectItem value="amazon">Amazon Services</SelectItem>
                      <SelectItem value="otto">OTTO Services</SelectItem>
                      <SelectItem value="kaufland">Kaufland Services</SelectItem>
                      <SelectItem value="international">Internationalisierung</SelectItem>
                      <SelectItem value="consulting">Beratung</SelectItem>
                      <SelectItem value="other">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#FFDA00] hover:bg-[#E5C400] text-black font-semibold text-lg py-6"
                >
                  <Send className="mr-2" size={20} />
                  Nachricht senden
                </Button>
              </form>
            </div>

            {/* Info Box */}
            <div>
              <div className="bg-gradient-to-br from-[#FFDA00] to-[#FFC700] rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Kostenloses Erstgespräch
                </h3>
                <p className="text-gray-900 mb-6">
                  In einem 30-60-minütigen Gespräch analysieren wir Ihre aktuelle Situation und zeigen Ihnen Wachstumspotenziale auf.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span className="text-black">Keine Kosten, keine Verpflichtung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span className="text-black">Individuelle Potenzialanalyse</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span className="text-black">Konkrete Handlungsempfehlungen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span className="text-black">Transparente Kostenschätzung</span>
                  </li>
                </ul>
                <Link to="/kontakt">
                  <Button className="w-full bg-black hover:bg-gray-900 text-[#FFDA00] font-semibold">
                    Termin online buchen
                  </Button>
                </Link>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Karte</p>
                  <p className="text-sm">Musterstraße 123, 12345 Berlin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">Wie schnell erhalte ich eine Antwort?</h3>
              <p className="text-gray-600">Wir antworten in der Regel innerhalb von 24 Stunden auf alle Anfragen.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">Ist das Erstgespräch wirklich kostenlos?</h3>
              <p className="text-gray-600">Ja, absolut. Es entstehen keine Kosten und keine Verpflichtungen.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">Kann ich auch vor Ort vorbeikommen?</h3>
              <p className="text-gray-600">Gerne! Vereinbaren Sie einfach einen Termin und besuchen Sie uns in unseren Büroräumen.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KontaktPage;