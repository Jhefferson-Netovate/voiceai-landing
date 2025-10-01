/**
 * GOOGLE ANALYTICS 4 - CONFIGURACIÓN
 * ====================================
 * Integración de GA4 para tracking de eventos y conversiones
 * 
 * INSTRUCCIONES PARA NO PROGRAMADORES:
 * 1. Ve a https://analytics.google.com
 * 2. Crea una propiedad GA4
 * 3. Copia el ID de medición (formato: G-XXXXXXXXXX)
 * 4. Pégalo en tu archivo .env como VITE_GA_MEASUREMENT_ID
 */

// Obtener ID de medición desde variables de entorno
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Inicializar Google Analytics 4
 * Se ejecuta automáticamente al cargar la aplicación
 */
export const initGA = () => {
  // Verificar que existe el ID de medición
  if (!GA_MEASUREMENT_ID) {
    console.warn('⚠️ Google Analytics: No se encontró VITE_GA_MEASUREMENT_ID en .env');
    return;
  }

  // Solo ejecutar en producción (opcional)
  if (import.meta.env.DEV) {
    console.log('🔧 Modo desarrollo: Google Analytics desactivado');
    return;
  }

  // Cargar script de Google Analytics
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Configurar gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    send_page_view: true
  });

  console.log('✅ Google Analytics 4 inicializado correctamente');
};

/**
 * Trackear vista de página (para React Router)
 * @param {string} path - Ruta de la página (ej: '/contacto')
 * @param {string} title - Título de la página
 */
export const trackPageView = (path, title) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title
    });
  }
};

/**
 * Trackear eventos personalizados
 * @param {string} action - Nombre del evento (ej: 'click_cta')
 * @param {object} params - Parámetros adicionales
 */
export const trackEvent = (action, params = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
};

/**
 * Eventos predefinidos comunes
 */
export const GAEvents = {
  // Conversiones
  clickCTA: (buttonText, location) => {
    trackEvent('click_cta', {
      button_text: buttonText,
      button_location: location,
      event_category: 'engagement',
      event_label: 'CTA Click'
    });
  },

  submitForm: (formName) => {
    trackEvent('submit_form', {
      form_name: formName,
      event_category: 'conversion',
      event_label: 'Form Submission'
    });
  },

  downloadResource: (resourceName) => {
    trackEvent('download', {
      resource_name: resourceName,
      event_category: 'engagement',
      event_label: 'Resource Download'
    });
  },

  // Engagement
  scrollDepth: (percentage) => {
    trackEvent('scroll_depth', {
      scroll_percentage: percentage,
      event_category: 'engagement',
      event_label: 'Page Scroll'
    });
  },

  videoPlay: (videoTitle) => {
    trackEvent('video_play', {
      video_title: videoTitle,
      event_category: 'engagement',
      event_label: 'Video Interaction'
    });
  },

  clickPhone: (phoneNumber) => {
    trackEvent('click_phone', {
      phone_number: phoneNumber,
      event_category: 'conversion',
      event_label: 'Phone Click'
    });
  },

  clickEmail: (email) => {
    trackEvent('click_email', {
      email_address: email,
      event_category: 'conversion',
      event_label: 'Email Click'
    });
  }
};

export default { initGA, trackPageView, trackEvent, GAEvents };