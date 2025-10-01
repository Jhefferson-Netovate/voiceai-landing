import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { Link } from 'react-router-dom';

const footerLinks = {
  producto: [
    { name: 'Características', href: '/#caracteristicas' },
    { name: 'Casos de Uso', href: '/#casos' },
    { name: 'Precios', href: '/#precios' },
    { name: 'ROI', href: '/#roi' },
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '/about' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Blog', href: '#blog' },
    { name: 'Carreras', href: '#carreras' },
  ],
  soporte: [
    { name: 'Centro de Ayuda', href: '#ayuda' },
    { name: 'Documentación', href: '#docs' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Estado del Sistema', href: '#status' },
  ],
  legal: [
    { name: 'Privacidad', href: '/privacy' },
    { name: 'Términos', href: '/terms' },
    { name: 'Cookies', href: '/privacy#cookies' },
    { name: 'GDPR', href: '/privacy#gdpr' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com', emoji: '💼' },
  { name: 'Twitter', href: 'https://twitter.com', emoji: '🐦' },
  { name: 'YouTube', href: 'https://youtube.com', emoji: '📺' },
  { name: 'GitHub', href: 'https://github.com', emoji: '🐙' },
];

export default function Footer() {
  const prefersReducedMotion = usePrefersReducedMotion();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-scale">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Logo y descripción */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? {} : { duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-scale-purple to-scale-blue rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">
                  Netovate<span className="text-gradient">OÜ</span>
                </span>
              </Link>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                La plataforma de IA conversacional más avanzada para automatizar llamadas telefónicas empresariales. 
                Transforma la comunicación de tu empresa con inteligencia artificial de última generación.
              </p>
              
              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-scale-purple hover:to-scale-blue rounded-lg flex items-center justify-center transition-all duration-200 group"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0 }}
                    whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                    transition={prefersReducedMotion ? {} : { 
                      duration: 0.3, 
                      delay: index * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {social.emoji}
                    </span>
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  transition={prefersReducedMotion ? {} : { 
                    duration: 0.6, 
                    delay: categoryIndex * 0.1 
                  }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                        whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                        transition={prefersReducedMotion ? {} : { 
                          duration: 0.3, 
                          delay: (categoryIndex * 0.1) + (linkIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                      >
                        {link.href.startsWith('/') ? (
                          <Link
                            to={link.href}
                            className="text-gray-300 hover:text-white transition-colors duration-200 block link-hover"
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors duration-200 block link-hover"
                          >
                            {link.name}
                          </a>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-8">
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
            transition={prefersReducedMotion ? {} : { duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} Netovate OÜ by Netovate OU. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-500">
                Hecho con ❤️ en Madrid
              </span>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Todos los sistemas operativos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}