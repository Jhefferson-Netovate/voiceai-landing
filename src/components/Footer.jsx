import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useTranslation } from 'react-i18next';

/**
 * FOOTER COMPONENT - NETOVATE OU
 * ================================
 * Footer refactorizado con el nuevo sistema de diseño
 * - Usa variables CSS del sistema
 * - Componentes reutilizables
 * - Respeta prefers-reduced-motion
 * - Diseño inspirado en Scale.com
 */

const Footer = () => {
  const { prefersReducedMotion } = useTheme();
  const currentYear = new Date().getFullYear();
  const { t, i18n } = useTranslation();

  // Links organizados por categorías
  const footerLinks = {
    Producto: [
      { name: t('footer.features'), href: '/#caracteristicas' },
      { name: t('footer.usecases'), href: '/#casos' },
      { name: t('footer.pricing'), href: '/#precios' },
      { name: t('footer.integrations'), href: '/integraciones' },
      { name: t('footer.changelog'), href: '/changelog' },
    ],
    Empresa: [
      { name: t('footer.about'), href: '/about' },
      { name: t('footer.blog'), href: '/blog' },
      { name: t('footer.careers'), href: '/carreras' },
      { name: t('footer.press'), href: '/prensa' },
      { name: t('footer.contact'), href: '/contacto' },
    ],
    Recursos: [
      { name: t('footer.docs'), href: '/docs' },
      { name: t('footer.guides'), href: '/guias' },
      { name: t('footer.api'), href: '/api' },
      { name: t('footer.help'), href: '/ayuda' },
      { name: t('footer.status'), href: '/status' },
    ],
    Legal: [
      { name: t('footer.privacy'), href: '/privacidad' },
      { name: t('footer.terms'), href: '/terminos' },
      { name: t('footer.cookies'), href: '/cookies' },
      { name: t('footer.gdpr'), href: '/gdpr' },
    ],
  };

  // Redes sociales
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/netovate', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/netovate', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/netovate', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      href: 'https://youtube.com/@netovate', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
  ];

  return (
  <footer className="footer-dark text-white overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Contenido principal del footer */}
        <div className="container-scale py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Columna de marca */}
            <div className="lg:col-span-2">
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <Link
                  to="/"
                  className="inline-flex items-center space-x-3 mb-6 group"
                  onClick={e => {
                    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xl">N</span>
                  </div>
                  <span className="text-xl font-bold text-white">
                    Netovate OU
                  </span>
                </Link>

                <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
                  Automatización empresarial impulsada por IA. Transformamos la forma en que las empresas operan y escalan.
                </p>

                {/* Redes sociales */}
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-brand-purple hover:to-brand-blue rounded-lg flex items-center justify-center transition-all duration-200"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0 }}
                      whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                      transition={prefersReducedMotion ? {} : { delay: index * 0.1 }}
                      viewport={{ once: true }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Columnas de links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? {} : { 
                  duration: 0.6, 
                  delay: (categoryIndex + 1) * 0.1 
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-gray-800">
          <div className="container-scale py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>
                © {currentYear} Netovate OU. Todos los derechos reservados.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6">
                <Link to="/privacidad" className="hover:text-white transition-colors">
                  {t('footer.privacy')}
                </Link>
                <Link to="/terminos" className="hover:text-white transition-colors">
                  {t('footer.terms')}
                </Link>
                <Link to="/cookies" className="hover:text-white transition-colors">
                  {t('footer.cookies')}
                </Link>
                <a 
                  href="mailto:info@netovate.com" 
                  className="hover:text-white transition-colors"
                >
                  info@netovate.com
                </a>
                {/* Botones para cambiar idioma */}
                <button onClick={() => i18n.changeLanguage('es')} className="px-2 py-1 text-xs rounded bg-gray-800 text-white">ES</button>
                <button onClick={() => i18n.changeLanguage('en')} className="px-2 py-1 text-xs rounded bg-gray-800 text-white">EN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;