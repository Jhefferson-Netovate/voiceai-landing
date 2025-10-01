import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { XMarkIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

/**
 * COOKIE BANNER GDPR - NETOVATE OU
 * ==================================
 * Banner de consentimiento de cookies conforme a GDPR
 * Guarda la preferencia del usuario en localStorage
 * 
 * CATEGORÍAS DE COOKIES:
 * - Necesarias: Siempre activas (funcionamiento básico)
 * - Analíticas: Google Analytics, tracking
 * - Marketing: Publicidad, remarketing
 */

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,      // Siempre true (no se puede desactivar)
    analytics: false,
    marketing: false
  });

  // Comprobar si el usuario ya dio consentimiento
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Mostrar banner después de 2 segundos
      setTimeout(() => setShowBanner(true), 2000);
    } else {
      // Cargar preferencias guardadas
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      
      // Activar cookies según preferencias
      activateCookies(savedPreferences);
    }
  }, []);

  // Activar cookies según preferencias
  const activateCookies = (prefs) => {
    // Activar Google Analytics si está permitido
    if (prefs.analytics && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }

    // Activar cookies de marketing si está permitido
    if (prefs.marketing && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    }
  };

  // Aceptar todas las cookies
  const acceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    
    savePreferences(allPreferences);
  };

  // Rechazar cookies opcionales
  const rejectAll = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    
    savePreferences(minimalPreferences);
  };

  // Guardar preferencias personalizadas
  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  // Guardar en localStorage y cerrar banner
  const savePreferences = (prefs) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    activateCookies(prefs);
    setShowBanner(false);
    setShowPreferences(false);
  };

  // Toggle preferencia individual
  const togglePreference = (key) => {
    if (key === 'necessary') return; // No se puede desactivar
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Banner principal o preferencias */}
            {!showPreferences ? (
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <ShieldCheckIcon className="w-6 h-6 text-[#0F52BA] mr-3 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Usamos cookies 🍪
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowBanner(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Cerrar"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio 
                  y personalizar el contenido. Puedes aceptar todas las cookies o gestionar tus preferencias.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={acceptAll}
                  >
                    Aceptar Todas
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="md"
                    onClick={rejectAll}
                  >
                    Solo Necesarias
                  </Button>

                  <Button
                    variant="ghost"
                    size="md"
                    onClick={() => setShowPreferences(true)}
                  >
                    Personalizar
                  </Button>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  Al continuar navegando, aceptas nuestra{' '}
                  <a href="/privacidad" className="text-[#0F52BA] hover:underline">
                    Política de Privacidad
                  </a>
                  {' '}y{' '}
                  <a href="/cookies" className="text-[#0F52BA] hover:underline">
                    Política de Cookies
                  </a>
                </p>
              </div>
            ) : (
              /* Panel de preferencias detalladas */
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Preferencias de Cookies
                  </h3>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Volver"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Cookies Necesarias */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="font-semibold text-gray-900">Cookies Necesarias</h4>
                        <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                          Siempre activas
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Esenciales para el funcionamiento básico del sitio web. 
                        No se pueden desactivar.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Cookies Analíticas */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Cookies Analíticas
                      </h4>
                      <p className="text-sm text-gray-600">
                        Nos permiten analizar el uso del sitio y mejorar la experiencia del usuario.
                        Incluye Google Analytics.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => togglePreference('analytics')}
                        className={`w-12 h-6 rounded-full transition-colors duration-200 flex items-center ${
                          preferences.analytics ? 'bg-[#0F52BA] justify-end' : 'bg-gray-300 justify-start'
                        } px-1`}
                        aria-label="Toggle cookies analíticas"
                      >
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </button>
                    </div>
                  </div>

                  {/* Cookies Marketing */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Cookies de Marketing
                      </h4>
                      <p className="text-sm text-gray-600">
                        Utilizadas para rastrear visitantes y mostrar anuncios relevantes y atractivos.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => togglePreference('marketing')}
                        className={`w-12 h-6 rounded-full transition-colors duration-200 flex items-center ${
                          preferences.marketing ? 'bg-[#0F52BA] justify-end' : 'bg-gray-300 justify-start'
                        } px-1`}
                        aria-label="Toggle cookies marketing"
                      >
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={saveCustomPreferences}
                    fullWidth
                  >
                    Guardar Preferencias
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="md"
                    onClick={acceptAll}
                    fullWidth
                  >
                    Aceptar Todas
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}