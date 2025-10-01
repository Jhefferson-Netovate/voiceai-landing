/**
 * I18N CONFIGURATION - NETOVATE OU
 * =================================
 * Configuración de react-i18next para traducción
 * Soporta traducción estática (archivos JSON) y dinámica (Azure)
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones estáticas (estas NO usan Azure, son rápidas)
const resources = {
  es: {
    translation: {
      // Navegación
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      pricing: 'Precios',
      contact: 'Contacto',
      blog: 'Blog',
      
      // Hero
      heroTitle: 'Automatiza tus Llamadas con IA',
      heroSubtitle: 'Transforma tu comunicación empresarial con inteligencia artificial conversacional de última generación',
      ctaPrimary: 'Prueba Gratis 14 Días',
      ctaSecondary: 'Ver Demo',
      
      // Features
      featuresTitle: '¿Por qué elegir Netovate OU?',
      featuresSubtitle: 'Nuestra tecnología de vanguardia revoluciona la comunicación telefónica de tu empresa',
      
      // Footer
      company: 'Empresa',
      legal: 'Legal',
      privacy: 'Privacidad',
      terms: 'Términos',
      allRightsReserved: 'Todos los derechos reservados',
      
      // Common
      learnMore: 'Saber más',
      getStarted: 'Comenzar',
      contactUs: 'Contáctanos',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
    },
  },
  
  en: {
    translation: {
      // Navigation
      home: 'Home',
      about: 'About',
      services: 'Services',
      pricing: 'Pricing',
      contact: 'Contact',
      blog: 'Blog',
      
      // Hero
      heroTitle: 'Automate Your Calls with AI',
      heroSubtitle: 'Transform your business communication with cutting-edge conversational artificial intelligence',
      ctaPrimary: 'Try Free 14 Days',
      ctaSecondary: 'Watch Demo',
      
      // Features
      featuresTitle: 'Why choose Netovate OU?',
      featuresSubtitle: 'Our cutting-edge technology revolutionizes your company\'s phone communication',
      
      // Footer
      company: 'Company',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      allRightsReserved: 'All rights reserved',
      
      // Common
      learnMore: 'Learn more',
      getStarted: 'Get started',
      contactUs: 'Contact us',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
    },
  },
  
  fr: {
    translation: {
      // Navigation
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      pricing: 'Tarifs',
      contact: 'Contact',
      blog: 'Blog',
      
      // Hero
      heroTitle: 'Automatisez vos Appels avec l\'IA',
      heroSubtitle: 'Transformez votre communication d\'entreprise avec l\'intelligence artificielle conversationnelle',
      ctaPrimary: 'Essai Gratuit 14 Jours',
      ctaSecondary: 'Voir Démo',
      
      // Features
      featuresTitle: 'Pourquoi choisir Netovate OU?',
      featuresSubtitle: 'Notre technologie de pointe révolutionne la communication téléphonique de votre entreprise',
      
      // Footer
      company: 'Entreprise',
      legal: 'Légal',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      allRightsReserved: 'Tous droits réservés',
      
      // Common
      learnMore: 'En savoir plus',
      getStarted: 'Commencer',
      contactUs: 'Contactez-nous',
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès',
    },
  },
};

// Inicializar i18next
i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next) // Integración con React
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto si no se detecta
    debug: true, // Cambiar a false en producción
    
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
    
    detection: {
      // Orden de detección de idioma
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // Guardar preferencia en localStorage
    },
  });

export default i18n;