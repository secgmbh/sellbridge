import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Calendar, Key, CheckCircle, AlertCircle } from 'lucide-react';

const AdminCalendarAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [authUrl, setAuthUrl] = useState(null);
  const [error, setError] = useState(null);

  const getAuthUrl = async () => {
    setLoading(true);
    setError(null);
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
      const response = await fetch(`${backendUrl}/api/calendar/auth/url`);
      
      if (response.ok) {
        const data = await response.json();
        setAuthUrl(data.authorization_url);
        // Automatisch zur Google-Login-Seite weiterleiten
        window.location.href = data.authorization_url;
      } else {
        setError('Fehler beim Abrufen der Authentifizierungs-URL');
      }
    } catch (err) {
      setError(`Verbindungsfehler: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFDA00] rounded-full mb-4">
            <Calendar size={32} className="text-black" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Google Calendar Admin-Authentifizierung
          </h1>
          <p className="text-lg text-gray-600">
            Verbinden Sie Ihren "sellbridge" Google Calendar für die Terminbuchungsfunktion
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="space-y-6">
            {/* Info Section */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <div className="flex items-start">
                <AlertCircle className="text-blue-500 mr-3 mt-0.5" size={20} />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Einmalige Authentifizierung erforderlich
                  </h3>
                  <p className="text-sm text-blue-800">
                    Um die Terminbuchungsfunktion zu aktivieren, müssen Sie sich einmalig mit Ihrem 
                    Google-Konto authentifizieren, das Zugriff auf den "sellbridge" Kalender hat.
                  </p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">So funktioniert's:</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFDA00] text-black font-bold mr-3 flex-shrink-0">
                    1
                  </span>
                  <span className="text-gray-700 pt-1">
                    Klicken Sie auf den Button unten, um den Authentifizierungsprozess zu starten
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFDA00] text-black font-bold mr-3 flex-shrink-0">
                    2
                  </span>
                  <span className="text-gray-700 pt-1">
                    Sie werden zu Google weitergeleitet
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFDA00] text-black font-bold mr-3 flex-shrink-0">
                    3
                  </span>
                  <span className="text-gray-700 pt-1">
                    Melden Sie sich mit Ihrem Google-Konto an (das den "sellbridge" Kalender enthält)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFDA00] text-black font-bold mr-3 flex-shrink-0">
                    4
                  </span>
                  <span className="text-gray-700 pt-1">
                    Bestätigen Sie die Berechtigungen für den Kalenderzugriff
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFDA00] text-black font-bold mr-3 flex-shrink-0">
                    5
                  </span>
                  <span className="text-gray-700 pt-1">
                    Sie werden automatisch zurück zur Website geleitet - Fertig! ✅
                  </span>
                </li>
              </ol>
            </div>

            {/* Error Display */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <div className="flex items-start">
                  <AlertCircle className="text-red-500 mr-3 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">Fehler</h3>
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Auth Button */}
            <div className="pt-4">
              <Button
                onClick={getAuthUrl}
                disabled={loading}
                className="w-full bg-[#FFDA00] hover:bg-[#FFC700] text-black font-bold text-lg py-6"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-3"></div>
                    Wird vorbereitet...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Key className="mr-2" size={20} />
                    Mit Google Calendar verbinden
                  </div>
                )}
              </Button>
            </div>

            {/* Manual URL Display (fallback) */}
            {authUrl && !loading && (
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2">
                  Falls die Weiterleitung nicht funktioniert, kopieren Sie diese URL:
                </p>
                <div className="bg-gray-100 p-3 rounded text-xs break-all">
                  {authUrl}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Button
            onClick={() => navigate('/kontakt')}
            variant="outline"
            className="border-gray-300"
          >
            Zurück zur Kontaktseite
          </Button>
        </div>

        {/* Success Info */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start">
            <CheckCircle className="text-green-500 mr-3 mt-0.5" size={24} />
            <div>
              <h3 className="font-semibold text-green-900 mb-2">
                Nach erfolgreicher Authentifizierung
              </h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>✓ Die Terminbuchung wird automatisch aktiviert</li>
                <li>✓ Kunden können verfügbare Termine sehen (Mo-Fr, 9-17 Uhr)</li>
                <li>✓ Gebuchte Termine erscheinen automatisch in Ihrem "sellbridge" Kalender</li>
                <li>✓ Beide Parteien erhalten E-Mail-Benachrichtigungen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCalendarAuth;
