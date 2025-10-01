import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Changelog from './pages/Changelog';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Gdpr from './pages/Gdpr';

// Componente para hacer scroll al top en cada cambio de ruta
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function Router() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <ScrollToTop />
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
  {/* Página de Blog */}
  <Route path="/blog" element={<Blog />} />
  {/* Página de BlogPost */}
  <Route path="/blogpost" element={<BlogPost />} />
  {/* Página de Changelog */}
  <Route path="/changelog" element={<Changelog />} />
          {/* Página de GDPR */}
          <Route path="/gdpr" element={<Gdpr />} />
  {/* Página 404 - debe ir al final */}
  <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}