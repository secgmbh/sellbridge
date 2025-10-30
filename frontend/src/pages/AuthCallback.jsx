import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState('processing');
  const [message, setMessage] = useState('Authentifizierung wird verarbeitet...');

  useEffect(() => {
    const handleCallback = async () => {
      // Get the authorization code from URL
      const params = new URLSearchParams(location.search);
      const code = params.get('code');
      const error = params.get('error');

      if (error) {
        setStatus('error');
        setMessage(`Authentifizierung fehlgeschlagen: ${error}`);
        setTimeout(() => navigate('/kontakt'), 3000);
        return;
      }

      if (!code) {
        setStatus('error');
        setMessage('Kein Authentifizierungscode erhalten');
        setTimeout(() => navigate('/kontakt'), 3000);
        return;
      }

      try {
        // Send code to backend
        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
        const response = await fetch(
          `${backendUrl}/api/calendar/auth/callback?code=${encodeURIComponent(code)}`
        );

        const data = await response.json();

        if (response.ok) {
          setStatus('success');
          setMessage('Google Calendar erfolgreich verbunden!');
          setTimeout(() => navigate('/kontakt'), 2000);
        } else {
          setStatus('error');
          setMessage(`Fehler: ${data.detail || 'Unbekannter Fehler'}`);
          setTimeout(() => navigate('/kontakt'), 3000);
        }
      } catch (error) {
        setStatus('error');
        setMessage(`Verbindungsfehler: ${error.message}`);
        setTimeout(() => navigate('/kontakt'), 3000);
      }
    };

    handleCallback();
  }, [location, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {status === 'processing' && (
          <>
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#FFDA00] mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {message}
            </h2>
            <p className="text-gray-600">
              Bitte warten Sie einen Moment...
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {message}
            </h2>
            <p className="text-gray-600">
              Sie werden zur Kontaktseite weitergeleitet...
            </p>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Authentifizierung fehlgeschlagen
            </h2>
            <p className="text-gray-600 mb-6">
              {message}
            </p>
            <button
              onClick={() => navigate('/kontakt')}
              className="bg-[#FFDA00] hover:bg-[#FFC700] text-black font-semibold px-6 py-2 rounded-lg"
            >
              Zur Kontaktseite
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthCallback;
