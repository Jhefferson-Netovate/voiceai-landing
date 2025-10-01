import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

/**
 * ROUTER PRINCIPAL - NETOVATE OU
 * ================================
 * Configuración de todas las rutas de la aplicación
 */

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<App />} />
        
        {/* Páginas institucionales */}
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        
        {/* Páginas legales */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/terminos" element={<Terms />} />
        
        {/* Página 404 - debe ir al final */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}