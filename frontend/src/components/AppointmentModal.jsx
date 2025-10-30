import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: Select slot, 2: Enter details, 3: Confirmation
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [bookingResult, setBookingResult] = useState(null);

  // Fetch available slots when modal opens
  useEffect(() => {
    if (isOpen && step === 1) {
      fetchAvailableSlots();
    }
  }, [isOpen, step]);

  const fetchAvailableSlots = async () => {
    setLoading(true);
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
      const response = await fetch(`${backendUrl}/api/calendar/available-slots?days=14`);
      
      if (response.ok) {
        const data = await response.json();
        setAvailableSlots(data.slots || []);
      } else {
        console.error('Fehler beim Laden der Termine');
      }
    } catch (error) {
      console.error('Fehler:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setStep(2);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
      const response = await fetch(`${backendUrl}/api/calendar/book-appointment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          start_time: selectedSlot.start,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok) {
        setBookingResult(data);
        setStep(3);
      } else {
        alert(data.detail || 'Fehler beim Buchen des Termins');
      }
    } catch (error) {
      console.error('Fehler beim Buchen:', error);
      alert('Fehler beim Buchen des Termins. Bitte versuchen Sie es später erneut.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setStep(1);
    setSelectedSlot(null);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setBookingResult(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#FFDA00] to-[#FFC700] p-6 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-black">Termin online buchen</h2>
          <button
            onClick={handleClose}
            className="text-black hover:text-gray-700 transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step 1: Select Slot */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Verfügbare Termine</h3>
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFDA00] mx-auto"></div>
                  <p className="mt-4 text-gray-600">Lade verfügbare Termine...</p>
                </div>
              ) : availableSlots.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto">
                  {availableSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlotSelect(slot)}
                      className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-[#FFDA00] hover:bg-yellow-50 transition-all text-left"
                    >
                      <Calendar className="text-[#FFDA00]" size={20} />
                      <div>
                        <div className="font-semibold text-black">{slot.display}</div>
                        <div className="text-sm text-gray-600">60 Minuten</div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-600">
                  <Calendar size={48} className="mx-auto mb-4 text-gray-400" />
                  <p>Keine verfügbaren Termine gefunden.</p>
                  <p className="text-sm mt-2">Bitte kontaktieren Sie uns direkt.</p>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Enter Details */}
          {step === 2 && (
            <div>
              <div className="bg-yellow-50 border-l-4 border-[#FFDA00] p-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="text-[#FFDA00]" size={20} />
                  <div>
                    <div className="font-semibold text-black">Gewählter Termin:</div>
                    <div className="text-gray-700">{selectedSlot?.display}</div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <User size={18} />
                    Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Ihr vollständiger Name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Mail size={18} />
                    E-Mail *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="[email protected]"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Phone size={18} />
                    Telefon
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+49 123 456 7890"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare size={18} />
                    Nachricht (optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFDA00] focus:border-transparent"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    onClick={() => setStep(1)}
                    variant="outline"
                    className="flex-1"
                  >
                    Zurück
                  </Button>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-[#FFDA00] hover:bg-[#FFC700] text-black font-semibold"
                  >
                    {loading ? 'Wird gebucht...' : 'Termin buchen'}
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && bookingResult && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Termin erfolgreich gebucht!</h3>
              <p className="text-gray-600 mb-6">
                Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details und einem Kalender-Eintrag.
              </p>
              <div className="bg-yellow-50 border border-[#FFDA00] rounded-lg p-4 mb-6">
                <div className="font-semibold text-black mb-2">Ihr Termin:</div>
                <div className="text-gray-700">{selectedSlot?.display}</div>
              </div>
              <Button
                onClick={handleClose}
                className="bg-black hover:bg-gray-800 text-[#FFDA00] font-semibold px-8"
              >
                Schließen
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
