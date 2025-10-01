import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { XMarkIcon, GiftIcon } from '@heroicons/react/24/outline';
import { GAEvents } from '../config/analytics';

/**
 * EXIT-INTENT POPUP - NETOVATE OU
 * =================================
 * Popup que se muestra cuando el usuario intenta salir del sitio
 * Incluye oferta especial para recuperar visitantes
 * 
 * FUNCIONALIDADES:
 * - Detecta movimiento del mouse hacia fuera de la ventana
 * - Solo se muestra una vez por sesión
 * - Delay configurable antes de activarse
 * - Tracking de conversiones
 */

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Comprobar si ya se mostró en esta sesión
    const alreadyShown = sessionStorage.getItem('exit-popup-shown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    // Delay de 5 segundos antes de activar la detección
    const activationTimer = setTimeout(() => {
      const handleMouseLeave = (e) => {
        // Solo detectar si el mouse sale por arriba (hacia el navegador)
        if (e.clientY <= 0 && !hasShown) {
          setShowPopup(true);
          setHasShown(true);
          sessionStorage.setItem('exit-popup-shown', 'true');
          
          // Tracking
          GAEvents.trackEvent('exit_intent_triggered', {
            event_category: 'engagement',
            event_label: 'Exit Intent Popup'
          });
        }
      };

      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, 5000); // Activar después de 5 segundos en el sitio

    return () => clearTimeout(activationTimer);
  }, [hasShown]);

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      alert('Por favor, introduce un email válido');
      return;
    }

    setIsSubmitting(true);

    try {
      // IMPORTANTE: Reemplazar con tu endpoint real
      // Ejemplo:
      // await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, source: 'exit_popup' })
      // });

      // Simulación (eliminar en producción)
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      
      // Tracking de conversión
      GAEvents.submitForm('exit_popup_newsletter');
      
      // Cerrar popup después de 3 segundos
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);

    } catch (error) {
      console.error('Error al suscribir:', error);
      alert('Error al suscribirse. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Cerrar popup
  const closePopup = () => {
    setShowPopup(false);
    
    // Tracking
    GAEvents.trackEvent('exit_intent_closed', {
      event_category: 'engagement',
      event_label: 'User Closed Popup'
    });
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Backdrop oscuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden pointer-events-auto relative">
              {/* Botón cerrar */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                aria-label="Cerrar"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Contenido del popup */}
              {!submitSuccess ? (
                <div className="p-8">
                  {/* Icono destacado */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0F52BA] to-[#00D9FF] rounded-full flex items-center justify-center">
                      <GiftIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Título y descripción */}
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
                    ¡Espera! 🎁
                  </h2>
                  <h3 className="text-xl font-semibold text-[#0F52BA] text-center mb-4">
                    Antes de irte...
                  </h3>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    Suscríbete a nuestra newsletter y recibe{' '}
                    <span className="font-semibold text-[#FF6B35]">15% de descuento</span>
                    {' '}en tu primer mes, además de contenido exclusivo sobre automatización empresarial.
                  </p>

                  {/* Formulario */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0F52BA] focus:ring-2 focus:ring-[#0F52BA] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      loading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Suscribiendo...' : 'Obtener Mi Descuento'}
                    </Button>
                  </form>

                  {/* Beneficios adicionales */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-700 mb-3 text-center">
                      También recibirás:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Guías exclusivas de automatización
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Casos de éxito de clientes
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Acceso anticipado a nuevas funciones
                      </li>
                    </ul>
                  </div>

                  {/* Nota de privacidad */}
                  <p className="text-xs text-gray-500 text-center mt-4">
                    No spam. Puedes darte de baja en cualquier momento.
                  </p>
                </div>
              ) : (
                /* Mensaje de éxito */
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    ¡Listo! 🎉
                  </h3>
                  <p className="text-gray-600">
                    Revisa tu email para confirmar tu suscripción y recibir tu código de descuento del 15%.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}