import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">sell</span>
              <span className="text-[#FFDA00]">Bridge</span>
            </div>
            <p className="text-gray-400 mb-4">
              Ihre Full-Service Agentur für erfolgreichen Verkauf auf allen wichtigen Marktplätzen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FFDA00] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFDA00] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFDA00] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFDA00] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#FFDA00] transition-colors">Startseite</Link></li>
              <li><Link to="/leistungen" className="text-gray-400 hover:text-[#FFDA00] transition-colors">Leistungen</Link></li>
              <li><Link to="/ablauf" className="text-gray-400 hover:text-[#FFDA00] transition-colors">Ablauf</Link></li>
              <li><Link to="/referenzen" className="text-gray-400 hover:text-[#FFDA00] transition-colors">Referenzen</Link></li>
              <li><Link to="/kontakt" className="text-gray-400 hover:text-[#FFDA00] transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li><Link to="/leistungen" className="text-gray-400 hover:text-[#FFDA00] transition-colors">Datenpflege</Link></li>
              <li><Link to="/leistungen" className="text-gray-400 hover:text-[#FFDA00] transition-colors">Bestandsautomatisierung</Link></li>
              <li><Link to="/leistungen" className="text-gray-400 hover:text-[#FFDA00] transition-colors">Kommunikation</Link></li>
              <li><Link to="/leistungen" className="text-gray-400 hover:text-[#FFDA00] transition-colors">Rechnungsservice</Link></li>
              <li><Link to="/leistungen" className="text-gray-400 hover:text-[#FFDA00] transition-colors">Marketing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>+49 123 456 7890</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>info@sellbridge.de</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Musterstraße 123<br />12345 Berlin</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 sellBridge. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/impressum" className="text-gray-400 hover:text-[#FFDA00] transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="text-gray-400 hover:text-[#FFDA00] transition-colors">Datenschutz</Link>
              <Link to="/agb" className="text-gray-400 hover:text-[#FFDA00] transition-colors">AGB</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;