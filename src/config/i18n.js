/**
 * I18N CONFIGURATION - NETOVATE OU
 * =================================
 * Sistema de traducción 100% estático (NO requiere Azure)
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      // NAVEGACIÓN
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

      // FOOTER
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

      // HERO SECTION
      hero: {
        title: 'Automatiza tus Llamadas con IA',
        subtitle: 'Transforma tu comunicación empresarial con inteligencia artificial conversacional de última generación',
        ctaPrimary: 'Prueba Gratis 14 Días',
        ctaSecondary: 'Ver Demo',
        stats1Value: '25,000+',
        stats1Label: 'Llamadas Automatizadas',
        stats2Value: '99.2%',
        stats2Label: 'Precisión IA',
        stats3Value: '45%',
        stats3Label: 'Ahorro en Costes'
      },

      // CARACTERÍSTICAS (App.jsx)
      characteristics: {
        title: '¿Por qué elegir',
        titleBrand: 'Netovate OU',
        subtitle: 'Nuestra tecnología de vanguardia revoluciona la comunicación telefónica empresarial.',
        feature1Title: 'IA Conversacional Avanzada',
        feature1Desc: 'Tecnología de procesamiento de lenguaje natural que mantiene conversaciones naturales e inteligentes con tus clientes.',
        feature2Title: 'Llamadas 24/7 Automatizadas',
        feature2Desc: 'Sistema autónomo que nunca duerme. Realiza seguimientos, agenda citas y gestiona consultas sin intervención humana.',
        feature3Title: 'Analytics en Tiempo Real',
        feature3Desc: 'Dashboard completo con métricas de rendimiento, tasas de conversión y análisis de sentimientos.',
        feature4Title: 'Integración Instantánea',
        feature4Desc: 'Conecta con tu CRM favorito en menos de 5 minutos. API REST completa para integraciones personalizadas.',
        feature5Title: 'Seguridad Empresarial',
        feature5Desc: 'Cumplimiento GDPR completo, encriptación end-to-end y certificaciones ISO 27001.',
        feature6Title: 'Personalización Total',
        feature6Desc: 'Entrena la IA con tu propia voz de marca, scripts personalizados y flujos adaptados a tu industria.'
      },

      // PRICING
      pricing: {
        title: 'Planes que se adaptan a',
        titleHighlight: 'tu negocio',
        subtitle: 'Sin costes ocultos. Cancela cuando quieras. 14 días de prueba gratuita en todos los planes.',
        monthly: 'Mensual',
        annual: 'Anual',
        discount: '-20%',
        perMonth: '/mes',
        
        starterName: 'Starter',
        starterDesc: 'Perfecto para pequeñas empresas',
        starterFeature1: 'Hasta 1,000 llamadas/mes',
        starterFeature2: 'IA Conversacional básica',
        starterFeature3: '2 números telefónicos',
        starterFeature4: 'Integración CRM',
        starterFeature5: 'Soporte por email',
        starterFeature6: 'Analytics básicos',
        starterCTA: 'Comenzar Prueba',
        
        proName: 'Professional',
        proDesc: 'Para empresas en crecimiento',
        proFeature1: 'Hasta 5,000 llamadas/mes',
        proFeature2: 'IA Conversacional avanzada',
        proFeature3: '10 números telefónicos',
        proFeature4: 'Integración CRM Premium',
        proFeature5: 'Soporte prioritario 24/7',
        proFeature6: 'Analytics avanzados',
        proFeature7: 'A/B testing',
        proFeature8: 'Webhooks y API',
        proCTA: 'Comenzar Prueba',
        
        enterpriseName: 'Enterprise',
        enterpriseDesc: 'Para grandes organizaciones',
        enterprisePrice: 'Personalizado',
        enterpriseFeature1: 'Llamadas ilimitadas',
        enterpriseFeature2: 'IA Conversacional personalizada',
        enterpriseFeature3: 'Números ilimitados',
        enterpriseFeature4: 'Integraciones personalizadas',
        enterpriseFeature5: 'Account Manager dedicado',
        enterpriseFeature6: 'SLA garantizado 99.9%',
        enterpriseFeature7: 'Onboarding personalizado',
        enterpriseFeature8: 'Compliance y seguridad avanzada',
        enterpriseCTA: 'Contactar Ventas',
        
        footerText: '¿Necesitas un plan personalizado?',
        footerLink: 'Hablamos'
      },

      // ABOUT PAGE
      about: {
        title: 'Sobre Nosotros',
        subtitle: 'Revolucionando la comunicación empresarial con IA',
        missionTitle: 'Nuestra Misión',
        missionText: 'Democratizar el acceso a tecnología de IA conversacional para empresas de todos los tamaños.',
        
        stats1Value: '2,500+',
        stats1Label: 'Empresas Activas',
        stats1Trend: '+45%',
        stats2Value: '15M+',
        stats2Label: 'Llamadas Procesadas',
        stats2Trend: '+120%',
        stats3Value: '50+',
        stats3Label: 'Países',
        stats4Value: '98%',
        stats4Label: 'Satisfacción Cliente',
        stats4Trend: '+2%',
        
        valuesTitle: 'Nuestros Valores',
        value1Title: 'Innovación Continua',
        value1Desc: 'Nos desafiamos constantemente a crear soluciones que redefinan los estándares de la industria.',
        value2Title: 'Cliente en el Centro',
        value2Desc: 'Cada decisión que tomamos está guiada por el impacto que tendrá en nuestros clientes.',
        value3Title: 'Transparencia Total',
        value3Desc: 'Creemos en la honestidad radical y en compartir tanto éxitos como desafíos.',
        value4Title: 'Impacto Global',
        value4Desc: 'Construimos tecnología que democratiza el acceso a la automatización empresarial.'
      },

      // BLOG PAGE
      blog: {
        title: 'Blog',
        subtitle: 'Artículos y noticias sobre automatización e IA.',
        postTag: 'Post',
        date: '01/10/2025',
        post1Title: 'El Futuro de la IA en Agentes Telefónicos: 2025',
        post1Desc: 'Descubre cómo la inteligencia artificial está revolucionando la atención telefónica, automatizando procesos y mejorando la experiencia del cliente en empresas de todo el mundo.',
        readMore: 'Leer artículo completo'
      },

      // CHANGELOG PAGE
      changelog: {
        title: 'Changelog',
        subtitle: 'Novedades y actualizaciones de la plataforma.',
        version: 'v1.0',
        date: '01/10/2025',
        launchTitle: 'Lanzamiento inicial de VoiceAI Landing 🚀',
        thanksMessage: '¡Gracias por probar la primera versión! Envíanos feedback para seguir mejorando.'
      },

      // NOT FOUND PAGE
      notFound: {
        error: '404',
        title: 'Página no encontrada',
        description: 'Lo sentimos, la página que buscas no existe o ha sido movida.',
        button: 'Volver al Inicio',
        helpText: 'Visita estas páginas:',
        features: 'Características',
        pricing: 'Precios',
        contact: 'Contacto',
        about: 'Sobre Nosotros'
      },

      // CONTACT FORM
      contact: {
        title: 'Contacta con Nosotros',
        subtitle: 'Estamos aquí para ayudarte',
        nameLabel: 'Nombre completo',
        namePlaceholder: 'Tu nombre',
        emailLabel: 'Email',
        emailPlaceholder: 'tu@email.com',
        phoneLabel: 'Teléfono',
        phonePlaceholder: '+34 600 000 000',
        companyLabel: 'Empresa',
        companyPlaceholder: 'Tu empresa',
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
        sendButton: 'Enviar Mensaje',
        sending: 'Enviando...',
        successMessage: '¡Mensaje enviado! Te responderemos pronto.',
        errorMessage: 'Hubo un error. Inténtalo de nuevo.',
        addressLabel: 'Dirección',
        addressText: 'Unión Europea',
        hoursTitle: 'Horario de Atención',
        hoursText: 'Lunes a Viernes: 9:00 - 18:00 CET'
      },

      // BLOGPOST PAGE
      blogpost: {
        title: 'El Futuro de la IA en Agentes Telefónicos: 2025',
        author: 'Equipo Netovate',
        date: '01/10/2025',
        readTime: '5 min de lectura',
        intro: 'Introducción',
        introText: 'La inteligencia artificial está revolucionando la atención telefónica. Las empresas ahora confían en agentes virtuales capaces de gestionar miles de llamadas simultáneas, personalizar la experiencia del cliente y resolver problemas complejos en tiempo real.',
        feature1Title: 'Conversaciones naturales',
        feature1Desc: 'Modelos de lenguaje avanzados para interacciones casi humanas.',
        feature2Title: 'Automatización total',
        feature2Desc: 'Procesos automatizados de extremo a extremo, desde verificación hasta gestión de incidencias.',
        feature3Title: 'Integración omnicanal',
        feature3Desc: 'Conexión con CRM, chat, email y redes sociales para una experiencia centralizada.',
        feature4Title: 'Aprendizaje continuo',
        feature4Desc: 'Análisis de cada llamada para mejorar constantemente.',
        conclusionTitle: 'Conclusión',
        conclusionText: 'El futuro de la atención telefónica es inteligente, automatizado y centrado en el cliente. Las empresas que adopten estas tecnologías hoy liderarán el mercado mañana.',
        cta: 'Prueba Netovate Gratis'
      },

      // BLOG PAGE - PUNTOS ADICIONALES
      blog: {
        title: 'Blog',
        subtitle: 'Artículos y noticias sobre automatización e IA.',
        postTag: 'Post',
        date: '01/10/2025',
        post1Title: 'El Futuro de la IA en Agentes Telefónicos: 2025',
        post1Desc: 'Descubre cómo la inteligencia artificial está revolucionando la atención telefónica, automatizando procesos y mejorando la experiencia del cliente en empresas de todo el mundo.',
        post1Point1: 'Conversaciones naturales y personalizadas.',
        post1Point2: 'Automatización total de procesos.',
        post1Point3: 'Integración omnicanal con CRM y redes sociales.',
        post1Point4: 'Aprendizaje continuo y análisis avanzado.',
        post1Point5: 'Desafíos éticos y oportunidades de negocio.',
        readMore: 'Leer artículo completo'
      },

      // CHANGELOG PAGE - FEATURES
      changelog: {
        title: 'Changelog',
        subtitle: 'Novedades y actualizaciones de la plataforma.',
        version: 'v1.0',
        date: '01/10/2025',
        launchTitle: 'Lanzamiento inicial de VoiceAI Landing 🚀',
        feature1: 'Nuevo sistema de diseño oscuro, glassmorphism y efectos neon.',
        feature2: 'Hero section con GlowOrb y animaciones modernas.',
        feature3: 'Cards de features con glass y hover.',
        feature4: 'Pricing con bordes neon y fondo oscuro.',
        feature5: 'Footer y Header adaptativos con modo oscuro.',
        feature6: 'Legal pages accesibles y con alto contraste.',
        feature7: 'Dot/grid pattern de fondo en secciones clave.',
        feature8: 'Botones con efectos glow y gradientes animados.',
        feature9: 'Integración inicial con analytics y crisp.',
        thanksMessage: '¡Gracias por probar la primera versión! Envíanos feedback para seguir mejorando.'
      },

      // COMMON / GENERAL
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
        close: 'Cerrar',
        copyright: '© {{year}} Netovate OU. Todos los derechos reservados.'
      }
    }
  },

  en: {
    translation: {
      // NAVIGATION
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

      // FOOTER
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

      // HERO SECTION
      hero: {
        title: 'Automate Your Calls with AI',
        subtitle: 'Transform your business communication with cutting-edge conversational artificial intelligence',
        ctaPrimary: 'Try Free 14 Days',
        ctaSecondary: 'Watch Demo',
        stats1Value: '25,000+',
        stats1Label: 'Automated Calls',
        stats2Value: '99.2%',
        stats2Label: 'AI Accuracy',
        stats3Value: '45%',
        stats3Label: 'Cost Savings'
      },

      // FEATURES (App.jsx)
      characteristics: {
        title: 'Why choose',
        titleBrand: 'Netovate OU',
        subtitle: 'Our cutting-edge technology revolutionizes business phone communication.',
        feature1Title: 'Advanced Conversational AI',
        feature1Desc: 'Natural language processing technology that maintains intelligent conversations with your customers.',
        feature2Title: '24/7 Automated Calls',
        feature2Desc: 'Autonomous system that never sleeps. Performs follow-ups, schedules appointments without human intervention.',
        feature3Title: 'Real-Time Analytics',
        feature3Desc: 'Complete dashboard with performance metrics, conversion rates and sentiment analysis.',
        feature4Title: 'Instant Integration',
        feature4Desc: 'Connect with your favorite CRM in less than 5 minutes. Complete REST API for custom integrations.',
        feature5Title: 'Enterprise Security',
        feature5Desc: 'Full GDPR compliance, end-to-end encryption and ISO 27001 certifications.',
        feature6Title: 'Total Customization',
        feature6Desc: 'Train the AI with your own brand voice, custom scripts and industry-adapted workflows.'
      },

      // PRICING
      pricing: {
        title: 'Plans that adapt to',
        titleHighlight: 'your business',
        subtitle: 'No hidden costs. Cancel anytime. 14-day free trial on all plans.',
        monthly: 'Monthly',
        annual: 'Annual',
        discount: '-20%',
        perMonth: '/month',
        
        starterName: 'Starter',
        starterDesc: 'Perfect for small businesses',
        starterFeature1: 'Up to 1,000 calls/month',
        starterFeature2: 'Basic Conversational AI',
        starterFeature3: '2 phone numbers',
        starterFeature4: 'CRM Integration',
        starterFeature5: 'Email support',
        starterFeature6: 'Basic analytics',
        starterCTA: 'Start Trial',
        
        proName: 'Professional',
        proDesc: 'For growing companies',
        proFeature1: 'Up to 5,000 calls/month',
        proFeature2: 'Advanced Conversational AI',
        proFeature3: '10 phone numbers',
        proFeature4: 'Premium CRM Integration',
        proFeature5: '24/7 Priority support',
        proFeature6: 'Advanced analytics',
        proFeature7: 'A/B testing',
        proFeature8: 'Webhooks and API',
        proCTA: 'Start Trial',
        
        enterpriseName: 'Enterprise',
        enterpriseDesc: 'For large organizations',
        enterprisePrice: 'Custom',
        enterpriseFeature1: 'Unlimited calls',
        enterpriseFeature2: 'Custom Conversational AI',
        enterpriseFeature3: 'Unlimited numbers',
        enterpriseFeature4: 'Custom integrations',
        enterpriseFeature5: 'Dedicated Account Manager',
        enterpriseFeature6: 'Guaranteed 99.9% SLA',
        enterpriseFeature7: 'Custom onboarding',
        enterpriseFeature8: 'Advanced compliance and security',
        enterpriseCTA: 'Contact Sales',
        
        footerText: 'Need a custom plan?',
        footerLink: "Let's talk"
      },

      // ABOUT PAGE
      about: {
        title: 'About Us',
        subtitle: 'Revolutionizing business communication with AI',
        missionTitle: 'Our Mission',
        missionText: 'Democratize access to conversational AI technology for businesses of all sizes.',
        
        stats1Value: '2,500+',
        stats1Label: 'Active Companies',
        stats1Trend: '+45%',
        stats2Value: '15M+',
        stats2Label: 'Calls Processed',
        stats2Trend: '+120%',
        stats3Value: '50+',
        stats3Label: 'Countries',
        stats4Value: '98%',
        stats4Label: 'Customer Satisfaction',
        stats4Trend: '+2%',
        
        valuesTitle: 'Our Values',
        value1Title: 'Continuous Innovation',
        value1Desc: 'We constantly challenge ourselves to create solutions that redefine industry standards.',
        value2Title: 'Customer-Centric',
        value2Desc: 'Every decision we make is guided by the impact it will have on our customers.',
        value3Title: 'Total Transparency',
        value3Desc: 'We believe in radical honesty and sharing both successes and challenges.',
        value4Title: 'Global Impact',
        value4Desc: 'We build technology that democratizes access to business automation.'
      },

      // BLOG PAGE
      blog: {
        title: 'Blog',
        subtitle: 'Articles and news about automation and AI.',
        postTag: 'Post',
        date: '10/01/2025',
        post1Title: 'The Future of AI in Phone Agents: 2025',
        post1Desc: 'Discover how artificial intelligence is revolutionizing phone support, automating processes and improving customer experience in companies worldwide.',
        readMore: 'Read full article'
      },

      // CHANGELOG PAGE
      changelog: {
        title: 'Changelog',
        subtitle: 'Platform news and updates.',
        version: 'v1.0',
        date: '10/01/2025',
        launchTitle: 'VoiceAI Landing Initial Launch 🚀',
        thanksMessage: 'Thanks for trying the first version! Send us feedback to keep improving.'
      },

      // NOT FOUND PAGE
      notFound: {
        error: '404',
        title: 'Page not found',
        description: 'Sorry, the page you are looking for does not exist or has been moved.',
        button: 'Back to Home',
        helpText: 'Visit these pages:',
        features: 'Features',
        pricing: 'Pricing',
        contact: 'Contact',
        about: 'About Us'
      },

      // CONTACT FORM
      contact: {
        title: 'Contact Us',
        subtitle: "We're here to help",
        nameLabel: 'Full name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'your@email.com',
        phoneLabel: 'Phone',
        phonePlaceholder: '+1 555 000 0000',
        companyLabel: 'Company',
        companyPlaceholder: 'Your company',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell us how we can help you...',
        sendButton: 'Send Message',
        sending: 'Sending...',
        successMessage: 'Message sent! We will respond soon.',
        errorMessage: 'There was an error. Please try again.',
        addressLabel: 'Address',
        addressText: 'European Union',
        hoursTitle: 'Business Hours',
        hoursText: 'Monday to Friday: 9:00 - 18:00 CET'
      },

      // BLOGPOST PAGE
      blogpost: {
        title: 'The Future of AI in Phone Agents: 2025',
        author: 'Netovate Team',
        date: '10/01/2025',
        readTime: '5 min read',
        intro: 'Introduction',
        introText: 'Artificial intelligence is revolutionizing phone support. Companies now rely on virtual agents capable of handling thousands of simultaneous calls, personalizing customer experience and solving complex problems in real-time.',
        feature1Title: 'Natural conversations',
        feature1Desc: 'Advanced language models for near-human interactions.',
        feature2Title: 'Total automation',
        feature2Desc: 'End-to-end automated processes, from verification to incident management.',
        feature3Title: 'Omnichannel integration',
        feature3Desc: 'Connection with CRM, chat, email and social networks for a centralized experience.',
        feature4Title: 'Continuous learning',
        feature4Desc: 'Analysis of every call to constantly improve.',
        conclusionTitle: 'Conclusion',
        conclusionText: 'The future of phone support is intelligent, automated and customer-centric. Companies that adopt these technologies today will lead the market tomorrow.',
        cta: 'Try Netovate Free'
      },

      // BLOG PAGE - ADDITIONAL POINTS
      blog: {
        title: 'Blog',
        subtitle: 'Articles and news about automation and AI.',
        postTag: 'Post',
        date: '10/01/2025',
        post1Title: 'The Future of AI in Phone Agents: 2025',
        post1Desc: 'Discover how artificial intelligence is revolutionizing phone support, automating processes and improving customer experience in companies worldwide.',
        post1Point1: 'Natural and personalized conversations.',
        post1Point2: 'Total process automation.',
        post1Point3: 'Omnichannel integration with CRM and social networks.',
        post1Point4: 'Continuous learning and advanced analysis.',
        post1Point5: 'Ethical challenges and business opportunities.',
        readMore: 'Read full article'
      },

      // CHANGELOG PAGE - FEATURES
      changelog: {
        title: 'Changelog',
        subtitle: 'Platform news and updates.',
        version: 'v1.0',
        date: '10/01/2025',
        launchTitle: 'VoiceAI Landing Initial Launch 🚀',
        feature1: 'New dark design system, glassmorphism and neon effects.',
        feature2: 'Hero section with GlowOrb and modern animations.',
        feature3: 'Feature cards with glass and hover.',
        feature4: 'Pricing with neon borders and dark background.',
        feature5: 'Adaptive Footer and Header with dark mode.',
        feature6: 'Accessible legal pages with high contrast.',
        feature7: 'Dot/grid pattern background in key sections.',
        feature8: 'Buttons with glow effects and animated gradients.',
        feature9: 'Initial integration with analytics and crisp.',
        thanksMessage: 'Thanks for trying the first version! Send us feedback to keep improving.'
      },

      // COMMON / GENERAL
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
        close: 'Close',
        copyright: '© {{year}} Netovate OU. All rights reserved.'
      }
    }
  }
};

// CONFIGURACIÓN DE I18NEXT
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;