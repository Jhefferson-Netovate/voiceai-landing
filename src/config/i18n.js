/**
 * I18N CONFIGURATION - NETOVATE OU
 * =================================
 * Sistema de traducción 100% estático (NO requiere Azure)
 * Azure Translator es OPCIONAL y solo para casos avanzados
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// ========================================
// TRADUCCIONES ESTÁTICAS (100% Local)
// ========================================
// Estas traducciones están hardcodeadas aquí y NO requieren Azure
// Son rápidas, gratuitas y siempre disponibles

const resources = {
  es: {
    translation: {
      // ==================
      // NAVEGACIÓN
      // ==================
      nav: {
        home: 'Inicio',
        solutions: 'Soluciones',
        ia: 'Inteligencia Artificial',
        automation: 'Automatización',
        analytics: 'Analíticas',
        integrations: 'Integraciones',
        usecases: 'Casos de Uso',
        pricing: 'Precios',
        resources: 'Recursos',
        blog: 'Blog',
        docs: 'Documentación',
        help: 'Ayuda',
        about: 'Sobre Nosotros',
        contact: 'Contacto',
        tryfree: 'Prueba Gratis'
      },

      // ==================
      // FOOTER
      // ==================
      footer: {
        features: 'Características',
        usecases: 'Casos de Uso',
        pricing: 'Precios',
        integrations: 'Integraciones',
        changelog: 'Novedades',
        about: 'Sobre Nosotros',
        blog: 'Blog',
        careers: 'Trabajar con Nosotros',
        press: 'Prensa',
        contact: 'Contacto',
        docs: 'Documentación',
        guides: 'Guías',
        api: 'API',
        help: 'Ayuda',
        status: 'Estado del Servicio',
        privacy: 'Privacidad',
        terms: 'Términos y Condiciones',
        cookies: 'Política de Cookies',
        gdpr: 'GDPR'
      },

      // ==================
      // HERO SECTION
      // ==================
      hero: {
        title: 'Automatiza tus Llamadas con IA',
        subtitle: 'Transforma tu comunicación empresarial con inteligencia artificial conversacional de última generación',
        ctaPrimary: 'Prueba Gratis 14 Días',
        ctaSecondary: 'Ver Demo'
      },

      // ==================
      // FEATURES
      // ==================
      features: {
        title: '¿Por qué elegir Netovate OU?',
        subtitle: 'Nuestra tecnología de vanguardia revoluciona la comunicación telefónica empresarial'
      },

      // ==================
      // COMMON / GENERAL
      // ==================
      common: {
        welcome: 'Bienvenido a Netovate',
        description: 'Soluciones de IA para empresas',
        learnMore: 'Saber más',
        getStarted: 'Comenzar',
        contactUs: 'Contáctanos',
        loading: 'Cargando...',
        error: 'Error',
        success: 'Éxito',
        allRightsReserved: 'Todos los derechos reservados',
        send: 'Enviar',
        cancel: 'Cancelar',
        save: 'Guardar',
        delete: 'Eliminar',
        edit: 'Editar',
        close: 'Cerrar'
      }
    }
  },

  en: {
    translation: {
      // ==================
      // NAVIGATION
      // ==================
      nav: {
        home: 'Home',
        solutions: 'Solutions',
        ia: 'Artificial Intelligence',
        automation: 'Automation',
        analytics: 'Analytics',
        integrations: 'Integrations',
        usecases: 'Use Cases',
        pricing: 'Pricing',
        resources: 'Resources',
        blog: 'Blog',
        docs: 'Documentation',
        help: 'Help',
        about: 'About Us',
        contact: 'Contact',
        tryfree: 'Try Free'
      },

      // ==================
      // FOOTER
      // ==================
      footer: {
        features: 'Features',
        usecases: 'Use Cases',
        pricing: 'Pricing',
        integrations: 'Integrations',
        changelog: 'Changelog',
        about: 'About Us',
        blog: 'Blog',
        careers: 'Careers',
        press: 'Press',
        contact: 'Contact',
        docs: 'Documentation',
        guides: 'Guides',
        api: 'API',
        help: 'Help',
        status: 'Service Status',
        privacy: 'Privacy',
        terms: 'Terms and Conditions',
        cookies: 'Cookie Policy',
        gdpr: 'GDPR'
      },

      // ==================
      // HERO SECTION
      // ==================
      hero: {
        title: 'Automate Your Calls with AI',
        subtitle: 'Transform your business communication with cutting-edge conversational artificial intelligence',
        ctaPrimary: 'Try Free 14 Days',
        ctaSecondary: 'Watch Demo'
      },

      // ==================
      // FEATURES
      // ==================
      features: {
        title: 'Why choose Netovate OU?',
        subtitle: 'Our cutting-edge technology revolutionizes business phone communication'
      },

      // ==================
      // COMMON / GENERAL
      // ==================
      common: {
        welcome: 'Welcome to Netovate',
        description: 'AI Solutions for businesses',
        learnMore: 'Learn More',
        getStarted: 'Get Started',
        contactUs: 'Contact Us',
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        allRightsReserved: 'All rights reserved',
        send: 'Send',
        cancel: 'Cancel',
        save: 'Save',
        delete: 'Delete',
        edit: 'Edit',
        close: 'Close'
      }
    }
  }
};

// ========================================
// CONFIGURACIÓN DE I18NEXT
// ========================================
i18n
  .use(LanguageDetector) // Detecta idioma del navegador automáticamente
  .use(initReactI18next) // Integración con React
  .init({
    resources, // Usa las traducciones de arriba (100% local, NO requiere Azure)
    
    fallbackLng: 'es', // Si no detecta idioma, usar español
    
    debug: false, // Cambiar a 'true' solo para debugging
    
    interpolation: {
      escapeValue: false // React ya hace el escape automáticamente
    },
    
    detection: {
      // Orden en que busca el idioma preferido
      order: ['localStorage', 'navigator', 'htmlTag'],
      
      // Guardar preferencia en localStorage
      caches: ['localStorage']
    },

    // Configuración adicional
    react: {
      useSuspense: false // Evita problemas de rendering
    }
  });

// ========================================
// FUNCIONES HELPER (Opcionales)
// ========================================

/**
 * Cambia el idioma de la aplicación
 * @param {string} lang - Código del idioma ('es', 'en', etc.)
 */
export const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
  console.log(`✅ Idioma cambiado a: ${lang}`);
};

/**
 * Obtiene el idioma actual
 * @returns {string} Código del idioma actual
 */
export const getCurrentLanguage = () => {
  return i18n.language || 'es';
};

/**
 * Obtiene todos los idiomas disponibles
 * @returns {string[]} Array con códigos de idiomas
 */
export const getAvailableLanguages = () => {
  return Object.keys(resources);
};

// ========================================
// NOTA IMPORTANTE SOBRE AZURE TRANSLATOR
// ========================================
/*
  ⚠️ Azure Translator es OPCIONAL y solo para casos avanzados:
  
  ✅ USA Azure para:
  - Contenido generado por usuarios (comentarios, posts, etc.)
  - Traducir documentos subidos por usuarios
  - Traducir contenido dinámico que cambia frecuentemente
  
  ❌ NO USES Azure para:
  - Navegación (nav)
  - Footer
  - Botones y etiquetas de UI
  - Cualquier texto estático de la aplicación
  
  Todas las traducciones de UI deben estar en este archivo (resources)
  para que funcionen SIN necesidad de Azure.
  
  Si en el futuro necesitas Azure Translator para contenido dinámico,
  el servicio está en: src/services/azureTranslator.js
  
  Pero recuerda: Azure Translator NO es necesario para que la app funcione.
*/

export default i18n;