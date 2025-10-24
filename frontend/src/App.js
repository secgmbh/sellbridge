import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leistungen" element={<HomePage />} />
          <Route path="/ablauf" element={<HomePage />} />
          <Route path="/marktplaetze" element={<HomePage />} />
          <Route path="/preise" element={<HomePage />} />
          <Route path="/referenzen" element={<HomePage />} />
          <Route path="/kontakt" element={<HomePage />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;