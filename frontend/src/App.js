import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LeistungenPage from './pages/LeistungenPage';
import AblaufPage from './pages/AblaufPage';
import MarktplaetzePage from './pages/MarktplaetzePage';
import PreisePage from './pages/PreisePage';
import ReferenzenPage from './pages/ReferenzenPage';
import KontaktPage from './pages/KontaktPage';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leistungen" element={<LeistungenPage />} />
          <Route path="/ablauf" element={<AblaufPage />} />
          <Route path="/marktplaetze" element={<MarktplaetzePage />} />
          <Route path="/preise" element={<PreisePage />} />
          <Route path="/referenzen" element={<ReferenzenPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;