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
        badge: '✨ Powered by Azure OpenAI',
        title: 'Tu Asistente Telefónico',
        titleHighlight: 'Inteligente',
        subtitle: 'Respuestas instantáneas en menos de 2 segundos. Disponible 24/7 sin interrupciones. Reduce tus costos operativos hasta un 45%.',
        ctaPrimary: 'Ver Demo',
        ctaSecondary: 'Conocer Más',
        stats1Value: '<2s',
        stats1Label: 'Tiempo de Respuesta',
        stats2Value: '24/7',
        stats2Label: 'Siempre Disponible',
        stats3Value: '45%',
        stats3Label: 'Ahorro en Costos'
      },

      // TESTIMONIALS
      testimonials: {
        title: 'Empresas que confían en ',
        titleHighlight: 'Netovate',
        subtitle: 'Tecnología empresarial segura y confiable. Tus datos protegidos con los más altos estándares de seguridad.',
        stat1: 'Datos Seguros',
        stat2: 'Máxima Disponibilidad',
        stat3: 'Respuestas Rápidas',
        stat4: 'Menos Costos'
      },

      // USE CASE
      usecase: {
        badge: '💼 Cómo Funciona',
        title: 'Simple, Rápido y ',
        titleHighlight: 'Efectivo',
        titleEnd: ' para tu negocio',
        subtitle: 'Una solución completa que automatiza tus llamadas telefónicas y mejora la atención a tus clientes.',

        step1Title: 'Tu Cliente Llama',
        step1Desc: 'Recibimos la llamada y la IA escucha lo que necesita tu cliente',
        step2Title: 'IA Procesa y Entiende',
        step2Desc: 'Nuestro sistema comprende la consulta y busca la mejor respuesta',
        step3Title: 'Respuesta Instantánea',
        step3Desc: 'El asistente responde de forma natural en menos de 2 segundos',

        resultsTitle: 'Resultados Garantizados',
        resultsSubtitle: 'Beneficios reales para tu empresa',

        metric1Label: 'Respuesta Ultrarrápida',
        metric2Label: 'Sin Caídas del Sistema',
        metric3Label: 'Ahorro Inteligente',
        metric4Label: 'Detección Automática',

        ctaText: '¿Quieres ver cómo funciona en tu empresa?',
        ctaButton: 'Agendar Demo'
      },

      // CARACTERÍSTICAS (App.jsx)
      characteristics: {
        title: '¿Por qué elegir',
        titleBrand: 'Netovate OU',
        subtitle: 'Tecnología empresarial de última generación para automatizar tu atención telefónica de forma inteligente.',
        feature1Title: 'Conversaciones Naturales',
        feature1Desc: 'Tu asistente de IA habla como un humano, entiende el contexto y responde de forma natural. Tus clientes no notarán la diferencia.',
        feature2Title: 'Voces Realistas',
        feature2Desc: 'Utilizamos voces de última generación que suenan completamente naturales. Tu marca suena profesional en cada llamada.',
        feature3Title: 'Datos 100% Seguros',
        feature3Desc: 'Cada empresa tiene sus datos completamente aislados y protegidos. Seguridad bancaria para tu información.',
        feature4Title: 'Funciona con Tu Teléfono',
        feature4Desc: 'Se integra con tu sistema telefónico actual. Recibe y realiza llamadas sin cambiar tu infraestructura.',
        feature5Title: 'Crece con Tu Negocio',
        feature5Desc: 'Maneja 10 o 10,000 llamadas simultáneas. El sistema crece automáticamente según tus necesidades.',
        feature6Title: 'Ahorro Garantizado',
        feature6Desc: 'Sistema inteligente que optimiza cada llamada para reducir costos hasta un 45%. Más eficiencia, menos gastos.'
      },

      // PRICING
      pricing: {
        title: 'Proceso de',
        titleHighlight: 'Implementación',
        subtitle: 'Empezamos con una prueba en 4 semanas y luego implementamos el sistema completo en 4 meses. Simple y sin riesgos.',
        monthly: 'Prueba',
        annual: 'Completo',
        discount: 'Enterprise',
        perMonth: '/mes',
        mostPopular: 'Recomendado',
        saveAnnually: 'Ahorra',
        perYear: 'hasta 45%',

        starterName: 'Prueba Inicial',
        starterDesc: 'Validamos la solución (1 mes)',
        starterFeature1: 'IA conversacional avanzada',
        starterFeature2: 'Voces naturales realistas',
        starterFeature3: 'Integración telefónica',
        starterFeature4: 'Para una sola empresa',
        starterFeature5: 'Respuestas en 2 segundos',
        starterFeature6: 'Reportes básicos',
        starterCTA: 'Empezar Prueba',

        proName: 'Sistema Completo',
        proDesc: 'Solución lista para producción (4 meses)',
        proFeature1: 'Sistema multi-empresa',
        proFeature2: 'Optimización inteligente',
        proFeature3: 'Flujos automatizados',
        proFeature4: 'Almacenamiento seguro',
        proFeature5: '99.9% disponibilidad',
        proFeature6: 'Máxima velocidad',
        proFeature7: '45% menos costos',
        proFeature8: 'Panel de control completo',
        proCTA: 'Planificar Implementación',

        enterpriseName: 'Personalizado',
        enterpriseDesc: 'Solución a tu medida',
        enterprisePrice: 'Consultar',
        enterpriseFeature1: 'Máxima seguridad privada',
        enterpriseFeature2: 'Voz personalizada de tu marca',
        enterpriseFeature3: 'Conecta con tus sistemas',
        enterpriseFeature4: 'Presencia global',
        enterpriseFeature5: 'Cumplimiento garantizado',
        enterpriseFeature6: 'Disponibilidad premium',
        enterpriseFeature7: 'Optimización avanzada',
        enterpriseFeature8: 'Soporte dedicado 24/7',
        enterpriseCTA: 'Hablar con Experto',

        footerText: '¿Necesitas ayuda para decidir cuál es mejor para ti?',
        footerLink: 'Contáctanos'
      },

      // ABOUT PAGE
      about: {
        title: 'Sobre Netovate OU',
        subtitle: 'Asistentes Telefónicos Inteligentes para tu Empresa',
        missionTitle: 'Nuestra Tecnología',
        missionText: 'Usamos la inteligencia artificial más avanzada de Microsoft Azure para crear asistentes telefónicos que hablan y entienden como humanos.',

        stats1Value: '<2s',
        stats1Label: 'Tiempo de Respuesta',
        stats1Trend: 'Ultrarrápido',
        stats2Value: '99.9%',
        stats2Label: 'Disponibilidad',
        stats2Trend: 'Siempre Activo',
        stats3Value: '45%',
        stats3Label: 'Ahorro en Costos',
        stats3Trend: 'Garantizado',
        stats4Value: 'Auto',
        stats4Label: 'Detección de Silencio',
        stats4Trend: 'Inteligente',

        valuesTitle: 'Lo Que Nos Hace Diferentes',
        value1Title: 'Conversaciones Reales',
        value1Desc: 'Nuestra IA mantiene conversaciones fluidas y naturales. Responde en menos de 2 segundos para que la experiencia sea como hablar con una persona real.',
        value2Title: 'Voces Profesionales',
        value2Desc: 'Voces de última generación que suenan completamente naturales. Disponible en varios idiomas para llegar a todos tus clientes.',
        value3Title: 'Optimización Inteligente',
        value3Desc: 'Sistema que aprende y mejora constantemente. Reduce costos hasta 45% mientras mantiene la máxima calidad en cada llamada.',
        value4Title: 'Escalable y Seguro',
        value4Desc: 'Crece con tu negocio sin límites. Cada empresa tiene sus datos completamente seguros y separados con tecnología bancaria.'
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
        orWriteUs: 'O escríbenos directamente a:',
        addressLabel: 'Dirección',
        addressText: 'Unión Europea',
        hoursTitle: 'Horario de Atención',
        hoursText: 'Lunes a Viernes: 9:00 - 18:00 CET'
      },

      // BLOG PAGE
      blog: {
        title: 'Blog',
        subtitle: 'Aprende cómo la IA puede transformar tu negocio.',
        postTag: 'Artículo',
        date: '01/10/2025',
        post1Title: 'Cómo Funciona Nuestro Asistente Telefónico IA',
        post1Desc: 'Descubre la tecnología detrás de nuestro sistema: inteligencia artificial avanzada, voces naturales y respuestas instantáneas para transformar tu atención al cliente.',
        post1Point1: 'Respuestas en menos de 2 segundos para mejor experiencia.',
        post1Point2: 'Sistema siempre disponible, nunca se cae.',
        post1Point3: 'Ahorra hasta 45% en costos operativos.',
        post1Point4: 'Detecta automáticamente cuándo hablar o escuchar.',
        post1Point5: 'Datos seguros y protegidos para cada empresa.',
        readMore: 'Leer más'
      },

      // BLOGPOST PAGE
      blogpost: {
        title: 'Cómo Funciona Nuestro Asistente Telefónico IA',
        author: 'Equipo Netovate',
        date: '01/10/2025',
        readTime: '5 min de lectura',
        intro: 'La Tecnología Detrás del Sistema',
        introText: 'Nuestro asistente telefónico usa la inteligencia artificial más avanzada de Microsoft Azure para entender y responder a tus clientes de forma natural, como si hablaran con una persona real.',
        feature1Title: 'Conversaciones Inteligentes',
        feature1Desc: 'Usa IA de última generación para entender el contexto y responder apropiadamente. Sistema inteligente que aprende y reduce costos hasta 45%.',
        feature2Title: 'Voces Naturales',
        feature2Desc: 'Voces que suenan completamente humanas. El sistema detecta automáticamente cuándo es tu turno de hablar para una conversación fluida.',
        feature3Title: 'Seguridad Empresarial',
        feature3Desc: 'Cada empresa tiene sus datos completamente separados y protegidos. Tecnología bancaria para garantizar la privacidad de tu información.',
        feature4Title: 'Velocidad Garantizada',
        feature4Desc: 'Responde en menos de 2 segundos. Sistema optimizado que crece automáticamente cuando lo necesitas sin perder velocidad.',
        conclusionTitle: 'Resultados Comprobados',
        conclusionText: 'Sistema disponible 99.9% del tiempo. Respuestas en menos de 2 segundos. Ahorro de hasta 45% en costos. Lo implementamos en 1 mes de prueba + 4 meses completo.',
        cta: 'Solicitar Demo'
      },

      // CHANGELOG PAGE
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

      // ROI CALCULATOR
      roi: {
        // Header
        titlePart1: 'Calcula tu',
        titlePart2: 'ROI',
        subtitle: 'Descubre cuánto puedes ahorrar con Netovate OU',

        // Inputs Section
        inputsTitle: 'Tus datos actuales',
        employeesLabel: 'Empleados en tareas manuales',
        hourlyRateLabel: 'Coste por hora del empleado',
        hoursPerDayLabel: 'Horas diarias en tareas automatizables',
        workDaysLabel: 'Días laborables al mes',

        // Results Section
        resultsTitle: 'Tus Resultados',

        // Alert
        alertTitle: 'Ajusta los parámetros',
        alertText: 'Con los valores actuales, el coste de Netovate es mayor que tu inversión actual en tareas manuales.',

        // Current Cost
        currentCostLabel: 'Coste Actual Mensual',
        currentCostFormula: 'empleados × {hoursPerDay}h/día × {hourlyRate}€/h',

        // Netovate Price
        netovatePriceLabel: 'Con Netovate OU',
        netovatePlan: 'Plan Professional • Sin límites',

        // Savings
        savingsPositive: '✅ Ahorro Mensual',
        savingsNegative: '⚠️ Diferencia Mensual',
        annualSavings: '{amount}€ al año',

        // Metrics
        roiLabel: 'ROI Anual',
        paybackLabel: 'Meses recuperación',
        timeSavedLabel: '⏱️ Tiempo ahorrado mensual',
        timeSavedHours: 'horas',
        timeSavedDays: '{days} días laborables equivalentes',

        // CTA
        ctaButton: 'Comenzar Ahora →',
        ctaSubtext: '14 días de prueba gratis • Sin tarjeta',

        // Note
        noteTitle: 'Nota:',
        noteText: 'Esta calculadora proporciona estimaciones basadas en promedios de la industria. Los resultados reales pueden variar según tu caso específico. El ROI se calcula sobre base anual considerando una inversión de {amount}€/año.'
      },

      // COOKIE BANNER
      cookies: {
        title: '🍪 Este sitio usa cookies',
        description: 'Utilizamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. Al hacer clic en "Aceptar todas", aceptas nuestro uso de cookies.',
        acceptAll: 'Aceptar todas',
        rejectAll: 'Rechazar todas',
        customize: 'Personalizar',
        preferencesTitle: 'Preferencias de Cookies',
        necessaryTitle: 'Cookies Necesarias',
        necessaryDesc: 'Esenciales para el funcionamiento del sitio web. No se pueden desactivar.',
        analyticsTitle: 'Cookies Analíticas',
        analyticsDesc: 'Nos ayudan a entender cómo usas el sitio y mejorar tu experiencia.',
        marketingTitle: 'Cookies de Marketing',
        marketingDesc: 'Utilizadas para mostrarte anuncios relevantes en otros sitios.',
        alwaysActive: 'Siempre activo',
        back: 'Atrás',
        savePreferences: 'Guardar Preferencias'
      },

      // EXIT INTENT POPUP
      exitPopup: {
        title: '¡Espera! No te vayas sin tu descuento',
        subtitle: 'Obtén acceso exclusivo a nuestra oferta especial antes de irte',
        offer: '30% de descuento en tu primer mes',
        offerDesc: 'Solo para nuevos clientes que se registren hoy',
        emailPlaceholder: 'tu@email.com',
        submitButton: 'Obtener Mi Descuento',
        submitting: 'Suscribiendo...',
        alsoReceive: 'También recibirás:',
        benefit1: 'Guías exclusivas de automatización',
        benefit2: 'Casos de éxito de clientes',
        benefit3: 'Acceso anticipado a nuevas funciones',
        privacyNote: 'No spam. Puedes darte de baja en cualquier momento.',
        successTitle: '¡Listo!',
        successMessage: 'Revisa tu email para obtener tu código de descuento del 30%.',
        close: 'Cerrar'
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
      },

      // PRIVACY PAGE
      privacy: {
      title: 'Política de Privacidad',
      lastUpdate: 'Última actualización:',
      section1Title: '1. Información que Recopilamos',
      section1Text: 'En Netovate OU, recopilamos la siguiente información:',
      section1Point1: 'Información de contacto: nombre, email, teléfono, empresa',
      section1Point2: 'Información de uso: páginas visitadas, tiempo en el sitio, clics',
      section1Point3: 'Información técnica: dirección IP, navegador, sistema operativo',
      section1Point4: 'Cookies y tecnologías similares para mejorar la experiencia',
      
      section2Title: '2. Cómo Usamos tu Información',
      section2Text: 'Utilizamos tu información para:',
      section2Point1: 'Proporcionar y mejorar nuestros servicios',
      section2Point2: 'Comunicarnos contigo sobre tu cuenta y actualizaciones',
      section2Point3: 'Enviar información de marketing (con tu consentimiento)',
      section2Point4: 'Analizar el uso del sitio para mejorarlo',
      section2Point5: 'Cumplir con obligaciones legales',
      
      section3Title: '3. Base Legal (GDPR)',
      section3Text: 'Procesamos tus datos personales basándonos en:',
      section3Point1: 'Consentimiento: Para comunicaciones de marketing',
      section3Point2: 'Ejecución de contrato: Para proporcionar servicios',
      section3Point3: 'Interés legítimo: Para análisis y mejoras',
      section3Point4: 'Obligación legal: Para cumplir con la ley',
      
      section4Title: '4. Compartir Información',
      section4Text: 'No vendemos tu información personal. Podemos compartirla con:',
      section4Point1: 'Proveedores de servicios (hosting, analytics, CRM)',
      section4Point2: 'Autoridades legales cuando sea requerido por ley',
      section4Point3: 'Socios comerciales con tu consentimiento explícito',
      
      section5Title: '5. Tus Derechos (GDPR)',
      section5Text: 'Tienes derecho a:',
      section5Point1: 'Acceso: Solicitar una copia de tus datos',
      section5Point2: 'Rectificación: Corregir datos inexactos',
      section5Point3: 'Eliminación: Solicitar la eliminación de tus datos',
      section5Point4: 'Portabilidad: Recibir tus datos en formato estructurado',
      section5Point5: 'Oposición: Oponerte al procesamiento de tus datos',
      section5Point6: 'Restricción: Limitar el uso de tus datos',
      
      section6Title: '6. Seguridad de Datos',
      section6Text: 'Implementamos medidas técnicas y organizativas para proteger tus datos, incluyendo: encriptación SSL/TLS, acceso restringido, auditorías regulares y cumplimiento ISO 27001.',
      
      section7Title: '7. Cookies',
      section7Text: 'Utilizamos cookies esenciales, analíticas y de marketing. Puedes gestionar tus preferencias en nuestro banner de cookies.',
      
      section8Title: '8. Retención de Datos',
      section8Text: 'Conservamos tus datos solo durante el tiempo necesario para cumplir con los propósitos descritos, o según lo requiera la ley (generalmente 5-7 años para datos fiscales).',
      
      section9Title: '9. Transferencias Internacionales',
      section9Text: 'Algunos proveedores pueden estar fuera de la UE. En estos casos, aseguramos protecciones adecuadas mediante cláusulas contractuales estándar aprobadas por la UE.',
      
      section10Title: '10. Contacto',
      section10Text: 'Para ejercer tus derechos o hacer preguntas sobre esta política:',
      contactCompany: 'Netovate OU',
      contactEmail: 'Email: privacy@netovate.eu',
      contactAddress: 'Dirección: Tallin, Estonia',
      
      section11Title: '11. Cambios a esta Política',
      section11Text: 'Podemos actualizar esta política ocasionalmente. Te notificaremos de cambios significativos por email o mediante un aviso en el sitio web. La fecha de última actualización se muestra al inicio del documento.',
      
      backHome: 'Volver al Inicio'
    },

    // TERMS PAGE
    terms: {
      title: 'Términos y Condiciones',
      lastUpdate: 'Última actualización:',
      
      section1Title: '1. Aceptación de los Términos',
      section1Text: 'Al acceder y usar los servicios de Netovate OU ("Netovate", "nosotros", "nuestro"), aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo, no uses nuestros servicios.',
      
      section2Title: '2. Descripción del Servicio',
      section2Text: 'Netovate proporciona servicios de inteligencia artificial para automatización de llamadas telefónicas, incluyendo pero no limitado a: agentes virtuales, transcripción de llamadas, análisis de sentimientos y gestión de CRM.',
      
      section3Title: '3. Registro y Cuenta',
      section3Sub1: '3.1 Elegibilidad:',
      section3Sub1Text: 'Debes tener al menos 18 años y capacidad legal para celebrar contratos.',
      section3Sub2: '3.2 Información Precisa:',
      section3Sub2Text: 'Debes proporcionar información veraz, actual y completa durante el registro.',
      section3Sub3: '3.3 Seguridad:',
      section3Sub3Text: 'Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.',
      
      section4Title: '4. Uso Aceptable',
      section4Text: 'No puedes usar el servicio para:',
      section4Point1: 'Actividades ilegales o fraudulentas',
      section4Point2: 'Spam, phishing o prácticas engañosas',
      section4Point3: 'Violación de derechos de propiedad intelectual',
      section4Point4: 'Distribución de malware o código malicioso',
      section4Point5: 'Acoso, abuso o contenido ofensivo',
      
      section5Title: '5. Planes y Facturación',
      section5Sub1: '5.1 Suscripciones:',
      section5Sub1Text: 'Los planes se facturan mensual o anualmente según tu elección.',
      section5Sub2: '5.2 Renovación Automática:',
      section5Sub2Text: 'Tu suscripción se renueva automáticamente salvo cancelación.',
      section5Sub3: '5.3 Reembolsos:',
      section5Sub3Text: 'Ofrecemos garantía de 14 días en el primer pago. Después, no hay reembolsos parciales.',
      
      section6Title: '6. Propiedad Intelectual',
      section6Text: 'Todo el contenido, software, marcas comerciales y tecnología de Netovate OU son propiedad de Netovate OU y están protegidos por leyes de propiedad intelectual. Te otorgamos una licencia limitada, no exclusiva y revocable para usar el servicio según estos términos.',
      
      section7Title: '7. Privacidad y Datos',
      section7Text: 'El uso de nuestros servicios está sujeto a nuestra',
      section7Link: 'Política de Privacidad',
      section7Text2: '. Cumplimos con GDPR y otras regulaciones de protección de datos aplicables.',
      
      section8Title: '8. Garantías y Responsabilidades',
      section8Sub1: '8.1 Disponibilidad:',
      section8Sub1Text: 'Nos esforzamos por mantener un 99.9% de uptime, pero no garantizamos disponibilidad ininterrumpida.',
      section8Sub2: '8.2 Limitación de Responsabilidad:',
      section8Sub2Text: 'No seremos responsables de daños indirectos, incidentales o consecuentes derivados del uso del servicio.',
      section8Sub3: '8.3 Indemnización:',
      section8Sub3Text: 'Aceptas indemnizarnos contra reclamaciones derivadas de tu uso del servicio o violación de estos términos.',
      
      section9Title: '9. Modificaciones del Servicio',
      section9Text: 'Nos reservamos el derecho de modificar, suspender o descontinuar cualquier parte del servicio en cualquier momento. Te notificaremos de cambios significativos con 30 días de anticipación cuando sea posible.',
      
      section10Title: '10. Terminación',
      section10Text: 'Podemos terminar o suspender tu acceso inmediatamente si violas estos términos. Tras la terminación, tus datos serán eliminados según nuestra política de retención, excepto cuando la ley requiera su conservación.',
      
      section11Title: '11. Ley Aplicable',
      section11Text: 'Estos términos se rigen por las leyes de Estonia. Cualquier disputa se resolverá en los tribunales de Tallin, Estonia.',
      
      section12Title: '12. Modificaciones',
      section12Text: 'Podemos modificar estos términos en cualquier momento. Los cambios significativos serán notificados con 30 días de anticipación. El uso continuado del servicio implica aceptación de los nuevos términos.',
      
      section13Title: '13. Contacto',
      section13Text: 'Para preguntas sobre estos términos:',
      
      backHome: 'Volver al Inicio'
    },

    // GDPR PAGE
    gdpr: {
      title: 'Cumplimiento GDPR',
      subtitle: 'Nuestro compromiso con la protección de tus datos personales y la transparencia en el tratamiento de la información.',
      
      whatIsTitle: '¿Qué es el GDPR?',
      whatIsText: 'El Reglamento General de Protección de Datos (GDPR) es la normativa europea que regula el tratamiento de datos personales de los ciudadanos de la Unión Europea. Su objetivo es proteger la privacidad y los derechos de los usuarios, garantizando un uso responsable y seguro de la información.',
      
      principlesTitle: 'Principios de protección de datos',
      principle1: 'Licitud, lealtad y transparencia:',
      principle1Text: 'Tratamos tus datos de forma legal, justa y transparente.',
      principle2: 'Limitación de la finalidad:',
      principle2Text: 'Solo utilizamos tus datos para los fines específicos para los que fueron recogidos.',
      principle3: 'Minimización de datos:',
      principle3Text: 'Recogemos únicamente los datos necesarios para cada propósito.',
      principle4: 'Exactitud:',
      principle4Text: 'Mantenemos tus datos actualizados y corregimos cualquier inexactitud.',
      principle5: 'Limitación del plazo de conservación:',
      principle5Text: 'Conservamos tus datos solo el tiempo necesario.',
      principle6: 'Integridad y confidencialidad:',
      principle6Text: 'Protegemos tus datos mediante medidas de seguridad técnicas y organizativas.',
      
      dataCollectedTitle: '¿Qué datos recogemos?',
      dataCollectedText: 'Recopilamos datos personales como',
      dataCollectedHighlight: 'nombre, correo electrónico, teléfono y empresa',
      dataCollectedText2: ', únicamente cuando tú los proporcionas a través de formularios de contacto, registro o contratación de servicios.',
      
      rightsTitle: 'Tus derechos como usuario',
      right1: 'Acceso:',
      right1Text: 'Puedes solicitar qué datos tuyos tenemos y cómo los usamos.',
      right2: 'Rectificación:',
      right2Text: 'Puedes corregir datos inexactos o incompletos.',
      right3: 'Supresión:',
      right3Text: 'Puedes pedir que eliminemos tus datos cuando ya no sean necesarios.',
      right4: 'Limitación:',
      right4Text: 'Puedes solicitar que limitemos el tratamiento de tus datos en ciertos casos.',
      right5: 'Portabilidad:',
      right5Text: 'Puedes recibir tus datos en formato electrónico y transferirlos a otro proveedor.',
      right6: 'Oposición:',
      right6Text: 'Puedes oponerte al tratamiento de tus datos para fines específicos.',
      
      securityTitle: 'Medidas de seguridad',
      securityText: 'En Netovate OU aplicamos',
      securityHighlight: 'medidas técnicas y organizativas avanzadas',
      securityText2: 'para proteger tus datos: encriptación, acceso restringido, auditorías periódicas y formación continua de nuestro equipo.',
      
      contactTitle: 'Contacto y reclamaciones',
      contactText: 'Si tienes dudas, deseas ejercer tus derechos o presentar una reclamación, puedes contactarnos en',
      contactEmail: 'privacidad@netovate.com',
      contactText2: '. También puedes dirigirte a la Agencia Española de Protección de Datos (AEPD) si consideras que tus derechos no han sido respetados.',
      
      lastUpdateLabel: 'Última actualización:',
      companyCommitment: 'Comprometidos con tu privacidad.'
    },

    // COOKIES PAGE
    cookies: {
      title: 'Política de Cookies',
      lastUpdate: 'Última actualización: 01/10/2025',

      whatAreTitle: '¿Qué son las cookies?',
      whatAreText: 'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a mejorar tu experiencia, recordar tus preferencias y analizar cómo utilizas nuestro sitio.',

      typesTitle: 'Tipos de cookies que utilizamos',

      necessaryTitle: '🔒 Cookies Necesarias',
      necessaryDesc: 'Esenciales para el funcionamiento del sitio web. No se pueden desactivar.',
      necessaryItem1: 'Sesión de usuario',
      necessaryItem2: 'Preferencias de idioma',
      necessaryItem3: 'Consentimiento de cookies',

      analyticsTitle: '📊 Cookies Analíticas',
      analyticsDesc: 'Nos ayudan a entender cómo los visitantes interactúan con el sitio.',
      analyticsItem1: 'Google Analytics',
      analyticsItem2: 'Métricas de rendimiento',
      analyticsItem3: 'Análisis de tráfico',

      marketingTitle: '🎯 Cookies de Marketing',
      marketingDesc: 'Utilizadas para mostrarte anuncios relevantes en otros sitios.',
      marketingItem1: 'Seguimiento de conversiones',
      marketingItem2: 'Remarketing',
      marketingItem3: 'Publicidad personalizada',

      managementTitle: 'Gestión de cookies',
      managementText: 'Puedes gestionar tus preferencias de cookies en cualquier momento:',
      managementItem1: 'Usando nuestro banner de cookies en la parte inferior de la página',
      managementItem2: 'Configurando tu navegador para bloquear o eliminar cookies',
      managementItem3: 'Contactándonos en',
      managementEmail: 'privacy@netovate.com',

      noteLabel: 'Nota:',
      noteText: 'Bloquear ciertas cookies puede afectar la funcionalidad del sitio web.'
    },

    // COMING SOON PAGE
    comingSoon: {
      title: 'Próximamente',
      description: 'está en construcción. Estamos trabajando duro para traerte algo increíble.',
      backHome: 'Volver al Inicio',
      contact: 'Contáctanos',
      question: '¿Tienes preguntas? Escríbenos a',
      email: 'info@netovateou.com'
    },

    // HEADER
    header: {
      companyName: 'Netovate OU'
    },

    // FOOTER
    footer: {
      companyName: 'Netovate OU',
      tagline: 'Automatización empresarial impulsada por IA. Transformamos la forma en que las empresas operan y escalan.',
      rightsReserved: 'Todos los derechos reservados.',
      emailContact: 'info@netovateou.com',

      // Categorías
      categoryProduct: 'Producto',
      categoryCompany: 'Empresa',
      categoryResources: 'Recursos',
      categoryLegal: 'Legal',

      // Links de Producto
      features: 'Características',
      pricing: 'Precios',
      changelog: 'Changelog',

      // Links de Empresa
      aboutUs: 'Sobre Nosotros',
      blog: 'Blog',
      contact: 'Contacto',

      // Links de Recursos
      documentation: 'Documentación',
      guides: 'Guías',
      api: 'API',
      helpCenter: 'Centro de Ayuda',
      systemStatus: 'Estado del Sistema',

      // Links de Legal
      privacy: 'Privacidad',
      terms: 'Términos',
      cookies: 'Cookies',
      gdpr: 'GDPR'
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
        badge: '✨ Powered by Azure OpenAI',
        title: 'Your Intelligent',
        titleHighlight: 'Phone Assistant',
        subtitle: 'Instant responses in under 2 seconds. Available 24/7 without interruptions. Reduce your operational costs by up to 45%.',
        ctaPrimary: 'View Demo',
        ctaSecondary: 'Learn More',
        stats1Value: '<2s',
        stats1Label: 'Response Time',
        stats2Value: '24/7',
        stats2Label: 'Always Available',
        stats3Value: '45%',
        stats3Label: 'Cost Savings'
      },

      // TESTIMONIALS
      testimonials: {
        title: 'Companies that trust ',
        titleHighlight: 'Netovate',
        subtitle: 'Secure and reliable enterprise technology. Your data protected with the highest security standards.',
        stat1: 'Secure Data',
        stat2: 'Maximum Availability',
        stat3: 'Fast Responses',
        stat4: 'Lower Costs'
      },

      // USE CASE
      usecase: {
        badge: '💼 How It Works',
        title: 'Simple, Fast and ',
        titleHighlight: 'Effective',
        titleEnd: ' for your business',
        subtitle: 'A complete solution that automates your phone calls and improves customer service.',

        step1Title: 'Your Customer Calls',
        step1Desc: 'We receive the call and AI listens to what your customer needs',
        step2Title: 'AI Processes & Understands',
        step2Desc: 'Our system understands the query and finds the best answer',
        step3Title: 'Instant Response',
        step3Desc: 'The assistant responds naturally in under 2 seconds',

        resultsTitle: 'Guaranteed Results',
        resultsSubtitle: 'Real benefits for your business',

        metric1Label: 'Ultra-Fast Response',
        metric2Label: 'No System Downtime',
        metric3Label: 'Smart Savings',
        metric4Label: 'Auto Detection',

        ctaText: 'Want to see how it works in your company?',
        ctaButton: 'Schedule Demo'
      },

      // FEATURES (App.jsx)
      characteristics: {
        title: 'Why choose',
        titleBrand: 'Netovate OU',
        subtitle: 'State-of-the-art enterprise technology to intelligently automate your phone support.',
        feature1Title: 'Natural Conversations',
        feature1Desc: 'Your AI assistant speaks like a human, understands context and responds naturally. Your customers won\'t notice the difference.',
        feature2Title: 'Realistic Voices',
        feature2Desc: 'We use next-generation voices that sound completely natural. Your brand sounds professional on every call.',
        feature3Title: '100% Secure Data',
        feature3Desc: 'Each company has its data completely isolated and protected. Banking-grade security for your information.',
        feature4Title: 'Works with Your Phone',
        feature4Desc: 'Integrates with your current phone system. Receive and make calls without changing your infrastructure.',
        feature5Title: 'Grows with Your Business',
        feature5Desc: 'Handle 10 or 10,000 simultaneous calls. System grows automatically based on your needs.',
        feature6Title: 'Guaranteed Savings',
        feature6Desc: 'Intelligent system that optimizes every call to reduce costs by up to 45%. More efficiency, less expenses.'
      },

      // PRICING
      pricing: {
        title: 'Implementation',
        titleHighlight: 'Process',
        subtitle: 'We start with a 4-week trial and then implement the complete system in 4 months. Simple and risk-free.',
        monthly: 'Trial',
        annual: 'Complete',
        discount: 'Enterprise',
        perMonth: '/month',
        mostPopular: 'Recommended',
        saveAnnually: 'Save',
        perYear: 'up to 45%',

        starterName: 'Initial Trial',
        starterDesc: 'We validate the solution (1 month)',
        starterFeature1: 'Advanced conversational AI',
        starterFeature2: 'Realistic natural voices',
        starterFeature3: 'Phone integration',
        starterFeature4: 'For single company',
        starterFeature5: '2-second responses',
        starterFeature6: 'Basic reports',
        starterCTA: 'Start Trial',

        proName: 'Complete System',
        proDesc: 'Production-ready solution (4 months)',
        proFeature1: 'Multi-company system',
        proFeature2: 'Intelligent optimization',
        proFeature3: 'Automated flows',
        proFeature4: 'Secure storage',
        proFeature5: '99.9% availability',
        proFeature6: 'Maximum speed',
        proFeature7: '45% lower costs',
        proFeature8: 'Full control panel',
        proCTA: 'Plan Implementation',

        enterpriseName: 'Custom',
        enterpriseDesc: 'Tailored solution',
        enterprisePrice: 'Contact',
        enterpriseFeature1: 'Maximum private security',
        enterpriseFeature2: 'Your brand custom voice',
        enterpriseFeature3: 'Connect with your systems',
        enterpriseFeature4: 'Global presence',
        enterpriseFeature5: 'Guaranteed compliance',
        enterpriseFeature6: 'Premium availability',
        enterpriseFeature7: 'Advanced optimization',
        enterpriseFeature8: '24/7 dedicated support',
        enterpriseCTA: 'Talk to Expert',

        footerText: 'Need help deciding which is best for you?',
        footerLink: 'Contact Us'
      },

      // ABOUT PAGE
      about: {
        title: 'About Netovate OU',
        subtitle: 'Intelligent Phone Assistants for Your Business',
        missionTitle: 'Our Technology',
        missionText: 'We use the most advanced artificial intelligence from Microsoft Azure to create phone assistants that speak and understand like humans.',

        stats1Value: '<2s',
        stats1Label: 'Response Time',
        stats1Trend: 'Ultra-Fast',
        stats2Value: '99.9%',
        stats2Label: 'Availability',
        stats2Trend: 'Always On',
        stats3Value: '45%',
        stats3Label: 'Cost Savings',
        stats3Trend: 'Guaranteed',
        stats4Value: 'Auto',
        stats4Label: 'Silence Detection',
        stats4Trend: 'Intelligent',

        valuesTitle: 'What Makes Us Different',
        value1Title: 'Real Conversations',
        value1Desc: 'Our AI maintains fluid and natural conversations. Responds in under 2 seconds so the experience is like talking to a real person.',
        value2Title: 'Professional Voices',
        value2Desc: 'Next-generation voices that sound completely natural. Available in multiple languages to reach all your customers.',
        value3Title: 'Intelligent Optimization',
        value3Desc: 'System that learns and improves constantly. Reduces costs by up to 45% while maintaining maximum quality on every call.',
        value4Title: 'Scalable and Secure',
        value4Desc: 'Grows with your business without limits. Each company has its data completely secure and separated with banking technology.'
      },

      // BLOG PAGE
      blog: {
        title: 'Blog',
        subtitle: 'Learn how AI can transform your business.',
        postTag: 'Article',
        date: '10/01/2025',
        post1Title: 'How Our AI Phone Assistant Works',
        post1Desc: 'Discover the technology behind our system: advanced artificial intelligence, natural voices and instant responses to transform your customer service.',
        readMore: 'Read more'
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
        orWriteUs: 'Or write to us directly at:',
        addressLabel: 'Address',
        addressText: 'European Union',
        hoursTitle: 'Business Hours',
        hoursText: 'Monday to Friday: 9:00 - 18:00 CET'
      },

      // BLOG PAGE
      blog: {
        title: 'Blog',
        subtitle: 'Learn how AI can transform your business.',
        postTag: 'Article',
        date: '10/01/2025',
        post1Title: 'How Our AI Phone Assistant Works',
        post1Desc: 'Discover the technology behind our system: advanced artificial intelligence, natural voices and instant responses to transform your customer service.',
        post1Point1: 'Responses in under 2 seconds for better experience.',
        post1Point2: 'System always available, never goes down.',
        post1Point3: 'Save up to 45% in operational costs.',
        post1Point4: 'Automatically detects when to speak or listen.',
        post1Point5: 'Secure and protected data for each company.',
        readMore: 'Read more'
      },

      // BLOGPOST PAGE
      blogpost: {
        title: 'How Our AI Phone Assistant Works',
        author: 'Netovate Team',
        date: '10/01/2025',
        readTime: '5 min read',
        intro: 'The Technology Behind the System',
        introText: 'Our phone assistant uses the most advanced artificial intelligence from Microsoft Azure to understand and respond to your customers naturally, as if they were talking to a real person.',
        feature1Title: 'Intelligent Conversations',
        feature1Desc: 'Uses state-of-the-art AI to understand context and respond appropriately. Intelligent system that learns and reduces costs by up to 45%.',
        feature2Title: 'Natural Voices',
        feature2Desc: 'Voices that sound completely human. The system automatically detects when it\'s your turn to speak for a fluid conversation.',
        feature3Title: 'Enterprise Security',
        feature3Desc: 'Each company has its data completely separated and protected. Banking technology to guarantee the privacy of your information.',
        feature4Title: 'Guaranteed Speed',
        feature4Desc: 'Responds in under 2 seconds. Optimized system that grows automatically when you need it without losing speed.',
        conclusionTitle: 'Proven Results',
        conclusionText: 'System available 99.9% of the time. Responses in under 2 seconds. Savings of up to 45% in costs. We implement it in 1 month trial + 4 months complete.',
        cta: 'Request Demo'
      },

      // CHANGELOG PAGE
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

      // ROI CALCULATOR
      roi: {
        // Header
        titlePart1: 'Calculate your',
        titlePart2: 'ROI',
        subtitle: 'Discover how much you can save with Netovate OU',

        // Inputs Section
        inputsTitle: 'Your current data',
        employeesLabel: 'Employees in manual tasks',
        hourlyRateLabel: 'Cost per hour per employee',
        hoursPerDayLabel: 'Daily hours in automatable tasks',
        workDaysLabel: 'Working days per month',

        // Results Section
        resultsTitle: 'Your Results',

        // Alert
        alertTitle: 'Adjust parameters',
        alertText: 'With current values, Netovate\'s cost is higher than your current investment in manual tasks.',

        // Current Cost
        currentCostLabel: 'Current Monthly Cost',
        currentCostFormula: 'employees × {hoursPerDay}h/day × {hourlyRate}€/h',

        // Netovate Price
        netovatePriceLabel: 'With Netovate OU',
        netovatePlan: 'Professional Plan • Unlimited',

        // Savings
        savingsPositive: '✅ Monthly Savings',
        savingsNegative: '⚠️ Monthly Difference',
        annualSavings: '{amount}€ per year',

        // Metrics
        roiLabel: 'Annual ROI',
        paybackLabel: 'Payback months',
        timeSavedLabel: '⏱️ Monthly time saved',
        timeSavedHours: 'hours',
        timeSavedDays: '{days} equivalent working days',

        // CTA
        ctaButton: 'Start Now →',
        ctaSubtext: '14-day free trial • No card required',

        // Note
        noteTitle: 'Note:',
        noteText: 'This calculator provides estimates based on industry averages. Actual results may vary depending on your specific case. ROI is calculated on an annual basis considering an investment of {amount}€/year.'
      },

      // COOKIE BANNER
      cookies: {
        title: '🍪 This site uses cookies',
        description: 'We use cookies to improve your experience, analyze traffic and personalize content. By clicking "Accept all", you agree to our use of cookies.',
        acceptAll: 'Accept all',
        rejectAll: 'Reject all',
        customize: 'Customize',
        preferencesTitle: 'Cookie Preferences',
        necessaryTitle: 'Necessary Cookies',
        necessaryDesc: 'Essential for the website to function. Cannot be disabled.',
        analyticsTitle: 'Analytics Cookies',
        analyticsDesc: 'Help us understand how you use the site and improve your experience.',
        marketingTitle: 'Marketing Cookies',
        marketingDesc: 'Used to show you relevant ads on other sites.',
        alwaysActive: 'Always active',
        back: 'Back',
        savePreferences: 'Save Preferences'
      },

      // EXIT INTENT POPUP
      exitPopup: {
        title: "Wait! Don't leave without your discount",
        subtitle: 'Get exclusive access to our special offer before you go',
        offer: '30% off your first month',
        offerDesc: 'Only for new customers who sign up today',
        emailPlaceholder: 'your@email.com',
        submitButton: 'Get My Discount',
        submitting: 'Subscribing...',
        alsoReceive: 'You will also receive:',
        benefit1: 'Exclusive automation guides',
        benefit2: 'Customer success stories',
        benefit3: 'Early access to new features',
        privacyNote: 'No spam. You can unsubscribe at any time.',
        successTitle: 'Done!',
        successMessage: 'Check your email to get your 30% discount code.',
        close: 'Close'
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
      },
      privacy: {
      title: 'Privacy Policy',
      lastUpdate: 'Last updated:',
      section1Title: '1. Information We Collect',
      section1Text: 'At Netovate OU, we collect the following information:',
      section1Point1: 'Contact information: name, email, phone, company',
      section1Point2: 'Usage information: pages visited, time on site, clicks',
      section1Point3: 'Technical information: IP address, browser, operating system',
      section1Point4: 'Cookies and similar technologies to improve experience',
      
      section2Title: '2. How We Use Your Information',
      section2Text: 'We use your information to:',
      section2Point1: 'Provide and improve our services',
      section2Point2: 'Communicate with you about your account and updates',
      section2Point3: 'Send marketing information (with your consent)',
      section2Point4: 'Analyze site usage to improve it',
      section2Point5: 'Comply with legal obligations',
      
      section3Title: '3. Legal Basis (GDPR)',
      section3Text: 'We process your personal data based on:',
      section3Point1: 'Consent: For marketing communications',
      section3Point2: 'Contract execution: To provide services',
      section3Point3: 'Legitimate interest: For analysis and improvements',
      section3Point4: 'Legal obligation: To comply with the law',
      
      section4Title: '4. Sharing Information',
      section4Text: 'We do not sell your personal information. We may share it with:',
      section4Point1: 'Service providers (hosting, analytics, CRM)',
      section4Point2: 'Legal authorities when required by law',
      section4Point3: 'Business partners with your explicit consent',
      
      section5Title: '5. Your Rights (GDPR)',
      section5Text: 'You have the right to:',
      section5Point1: 'Access: Request a copy of your data',
      section5Point2: 'Rectification: Correct inaccurate data',
      section5Point3: 'Deletion: Request deletion of your data',
      section5Point4: 'Portability: Receive your data in structured format',
      section5Point5: 'Opposition: Object to processing of your data',
      section5Point6: 'Restriction: Limit use of your data',
      
      section6Title: '6. Data Security',
      section6Text: 'We implement technical and organizational measures to protect your data, including: SSL/TLS encryption, restricted access, regular audits and ISO 27001 compliance.',
      
      section7Title: '7. Cookies',
      section7Text: 'We use essential, analytical and marketing cookies. You can manage your preferences in our cookie banner.',
      
      section8Title: '8. Data Retention',
      section8Text: 'We retain your data only for the time necessary to fulfill the described purposes, or as required by law (generally 5-7 years for tax data).',
      
      section9Title: '9. International Transfers',
      section9Text: 'Some providers may be outside the EU. In these cases, we ensure adequate protections through EU-approved standard contractual clauses.',
      
      section10Title: '10. Contact',
      section10Text: 'To exercise your rights or ask questions about this policy:',
      contactCompany: 'Netovate OU',
      contactEmail: 'Email: privacy@netovate.eu',
      contactAddress: 'Address: Tallinn, Estonia',
      
      section11Title: '11. Changes to this Policy',
      section11Text: 'We may update this policy occasionally. We will notify you of significant changes by email or notice on the website. The last update date is shown at the beginning of the document.',
      
      backHome: 'Back to Home'
    },

    // TERMS PAGE
    terms: {
      title: 'Terms and Conditions',
      lastUpdate: 'Last updated:',
      
      section1Title: '1. Acceptance of Terms',
      section1Text: 'By accessing and using Netovate OU services ("Netovate", "we", "our"), you agree to be bound by these Terms and Conditions. If you do not agree, do not use our services.',
      
      section2Title: '2. Service Description',
      section2Text: 'Netovate provides artificial intelligence services for telephone call automation, including but not limited to: virtual agents, call transcription, sentiment analysis and CRM management.',
      
      section3Title: '3. Registration and Account',
      section3Sub1: '3.1 Eligibility:',
      section3Sub1Text: 'You must be at least 18 years old and have legal capacity to enter into contracts.',
      section3Sub2: '3.2 Accurate Information:',
      section3Sub2Text: 'You must provide truthful, current and complete information during registration.',
      section3Sub3: '3.3 Security:',
      section3Sub3Text: 'You are responsible for maintaining the confidentiality of your account and password.',
      
      section4Title: '4. Acceptable Use',
      section4Text: 'You may not use the service for:',
      section4Point1: 'Illegal or fraudulent activities',
      section4Point2: 'Spam, phishing or deceptive practices',
      section4Point3: 'Violation of intellectual property rights',
      section4Point4: 'Distribution of malware or malicious code',
      section4Point5: 'Harassment, abuse or offensive content',
      
      section5Title: '5. Plans and Billing',
      section5Sub1: '5.1 Subscriptions:',
      section5Sub1Text: 'Plans are billed monthly or annually according to your choice.',
      section5Sub2: '5.2 Auto-renewal:',
      section5Sub2Text: 'Your subscription renews automatically unless cancelled.',
      section5Sub3: '5.3 Refunds:',
      section5Sub3Text: 'We offer a 14-day guarantee on first payment. After that, there are no partial refunds.',
      
      section6Title: '6. Intellectual Property',
      section6Text: 'All content, software, trademarks and technology of Netovate OU are owned by Netovate OU and protected by intellectual property laws. We grant you a limited, non-exclusive and revocable license to use the service according to these terms.',
      
      section7Title: '7. Privacy and Data',
      section7Text: 'Use of our services is subject to our',
      section7Link: 'Privacy Policy',
      section7Text2: '. We comply with GDPR and other applicable data protection regulations.',
      
      section8Title: '8. Warranties and Liabilities',
      section8Sub1: '8.1 Availability:',
      section8Sub1Text: 'We strive to maintain 99.9% uptime, but do not guarantee uninterrupted availability.',
      section8Sub2: '8.2 Limitation of Liability:',
      section8Sub2Text: 'We will not be liable for indirect, incidental or consequential damages arising from use of the service.',
      section8Sub3: '8.3 Indemnification:',
      section8Sub3Text: 'You agree to indemnify us against claims arising from your use of the service or violation of these terms.',
      
      section9Title: '9. Service Modifications',
      section9Text: 'We reserve the right to modify, suspend or discontinue any part of the service at any time. We will notify you of significant changes with 30 days notice when possible.',
      
      section10Title: '10. Termination',
      section10Text: 'We may terminate or suspend your access immediately if you violate these terms. Upon termination, your data will be deleted according to our retention policy, except when required by law.',
      
      section11Title: '11. Applicable Law',
      section11Text: 'These terms are governed by the laws of Estonia. Any disputes will be resolved in the courts of Tallinn, Estonia.',
      
      section12Title: '12. Modifications',
      section12Text: 'We may modify these terms at any time. Significant changes will be notified with 30 days notice. Continued use of the service implies acceptance of the new terms.',
      
      section13Title: '13. Contact',
      section13Text: 'For questions about these terms:',
      
      backHome: 'Back to Home'
    },

    // GDPR PAGE
    gdpr: {
      title: 'GDPR Compliance',
      subtitle: 'Our commitment to protecting your personal data and transparency in information processing.',
      
      whatIsTitle: 'What is GDPR?',
      whatIsText: 'The General Data Protection Regulation (GDPR) is the European regulation that governs the processing of personal data of European Union citizens. Its goal is to protect user privacy and rights, ensuring responsible and secure use of information.',
      
      principlesTitle: 'Data protection principles',
      principle1: 'Lawfulness, fairness and transparency:',
      principle1Text: 'We process your data legally, fairly and transparently.',
      principle2: 'Purpose limitation:',
      principle2Text: 'We only use your data for the specific purposes for which it was collected.',
      principle3: 'Data minimization:',
      principle3Text: 'We collect only the data necessary for each purpose.',
      principle4: 'Accuracy:',
      principle4Text: 'We keep your data updated and correct any inaccuracies.',
      principle5: 'Storage limitation:',
      principle5Text: 'We retain your data only as long as necessary.',
      principle6: 'Integrity and confidentiality:',
      principle6Text: 'We protect your data through technical and organizational security measures.',
      
      dataCollectedTitle: 'What data do we collect?',
      dataCollectedText: 'We collect personal data such as',
      dataCollectedHighlight: 'name, email, phone and company',
      dataCollectedText2: ', only when you provide it through contact forms, registration or service contracting.',
      
      rightsTitle: 'Your rights as a user',
      right1: 'Access:',
      right1Text: 'You can request what data we have about you and how we use it.',
      right2: 'Rectification:',
      right2Text: 'You can correct inaccurate or incomplete data.',
      right3: 'Deletion:',
      right3Text: 'You can request deletion of your data when no longer necessary.',
      right4: 'Restriction:',
      right4Text: 'You can request that we limit processing of your data in certain cases.',
      right5: 'Portability:',
      right5Text: 'You can receive your data in electronic format and transfer it to another provider.',
      right6: 'Objection:',
      right6Text: 'You can object to processing of your data for specific purposes.',
      
      securityTitle: 'Security measures',
      securityText: 'At Netovate OU we apply',
      securityHighlight: 'advanced technical and organizational measures',
      securityText2: 'to protect your data: encryption, restricted access, periodic audits and continuous training of our team.',
      
      contactTitle: 'Contact and complaints',
      contactText: 'If you have questions, wish to exercise your rights or file a complaint, you can contact us at',
      contactEmail: 'privacy@netovate.com',
      contactText2: '. You can also contact the Spanish Data Protection Agency (AEPD) if you consider your rights have not been respected.',
      
      lastUpdateLabel: 'Last update:',
      companyCommitment: 'Committed to your privacy.'
    },

    // COOKIES PAGE
    cookies: {
      title: 'Cookie Policy',
      lastUpdate: 'Last update: 10/01/2025',

      whatAreTitle: 'What are cookies?',
      whatAreText: 'Cookies are small text files stored on your device when you visit our website. They help us improve your experience, remember your preferences, and analyze how you use our site.',

      typesTitle: 'Types of cookies we use',

      necessaryTitle: '🔒 Necessary Cookies',
      necessaryDesc: 'Essential for the website to function. Cannot be disabled.',
      necessaryItem1: 'User session',
      necessaryItem2: 'Language preferences',
      necessaryItem3: 'Cookie consent',

      analyticsTitle: '📊 Analytics Cookies',
      analyticsDesc: 'Help us understand how visitors interact with the site.',
      analyticsItem1: 'Google Analytics',
      analyticsItem2: 'Performance metrics',
      analyticsItem3: 'Traffic analysis',

      marketingTitle: '🎯 Marketing Cookies',
      marketingDesc: 'Used to show you relevant ads on other sites.',
      marketingItem1: 'Conversion tracking',
      marketingItem2: 'Remarketing',
      marketingItem3: 'Personalized advertising',

      managementTitle: 'Cookie management',
      managementText: 'You can manage your cookie preferences at any time:',
      managementItem1: 'Using our cookie banner at the bottom of the page',
      managementItem2: 'Configuring your browser to block or delete cookies',
      managementItem3: 'Contacting us at',
      managementEmail: 'privacy@netovate.com',

      noteLabel: 'Note:',
      noteText: 'Blocking certain cookies may affect website functionality.'
    },

    // COMING SOON PAGE
    comingSoon: {
      title: 'Coming Soon',
      description: 'is under construction. We\'re working hard to bring you something amazing.',
      backHome: 'Back to Home',
      contact: 'Contact Us',
      question: 'Have questions? Write to us at',
      email: 'info@netovateou.com'
    },

    // HEADER
    header: {
      companyName: 'Netovate OU'
    },

    // FOOTER
    footer: {
      companyName: 'Netovate OU',
      tagline: 'AI-powered business automation. Transforming the way companies operate and scale.',
      rightsReserved: 'All rights reserved.',
      emailContact: 'info@netovateou.com',

      // Categories
      categoryProduct: 'Product',
      categoryCompany: 'Company',
      categoryResources: 'Resources',
      categoryLegal: 'Legal',

      // Product Links
      features: 'Features',
      pricing: 'Pricing',
      changelog: 'Changelog',

      // Company Links
      aboutUs: 'About Us',
      blog: 'Blog',
      contact: 'Contact',

      // Resource Links
      documentation: 'Documentation',
      guides: 'Guides',
      api: 'API',
      helpCenter: 'Help Center',
      systemStatus: 'System Status',

      // Legal Links
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookies',
      gdpr: 'GDPR'
    }
  }
  }
}

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