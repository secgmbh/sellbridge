import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Startseite', path: '/' },
    { label: 'Leistungen', path: '/leistungen' },
    { label: 'Ablauf', path: '/ablauf' },
    { label: 'Marktplätze', path: '/marktplaetze' },
    { label: 'Preise', path: '/preise' },
    { label: 'Referenzen', path: '/referenzen' },
    { label: 'Kontakt', path: '/kontakt' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/yywulo3y_logo.png" 
              alt="sellBridge Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-[#FFDA00] transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Phone Number & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone size={18} />
              <span className="font-semibold">+49 123 456 7890</span>
            </div>
            <Link to="/kontakt">
              <Button className="bg-[#FFDA00] hover:bg-[#E5C400] text-black font-semibold">
                Kostenlos beraten lassen
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-[#FFDA00] hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <div className="flex items-center space-x-2 text-gray-700 px-3">
                <Phone size={18} />
                <span className="font-semibold">+49 123 456 7890</span>
              </div>
              <Button className="bg-[#FFDA00] hover:bg-[#E5C400] text-black font-semibold w-full">
                Kostenlos beraten lassen
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;