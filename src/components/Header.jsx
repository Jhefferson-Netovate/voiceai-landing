import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline';
import Button from './Button';
import { useTheme } from './ThemeProvider';

/**
 * HEADER COMPONENT - NETOVATE OU
 * ================================
 * Navegación principal con diseño inspirado en Scale.com
 * - Sticky header con blur effect
 * - Menú responsive
 * - Dropdowns animados
 * - Logo de marca
 */

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { prefersReducedMotion } = useTheme();

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links de navegación
  const navLinks = [
    { 
      name: 'Inicio', 
      href: '/',
      exact: true
    },
    {
      name: 'Soluciones',
      dropdown: [
        { name: 'IA Conversacional', href: '/#caracteristicas', icon: '🤖' },
        { name: 'Automatización', href: '/#caracteristicas', icon: '⚡' },
        { name: 'Analytics', href: '/#caracteristicas', icon: '📊' },
        { name: 'Integraciones', href: '/#caracteristicas', icon: '🔗' },
      ]
    },
    { 
      name: 'Casos de Uso', 
      href: '/#casos' 
    },
    { 
      name: 'Precios', 
      href: '/#precios' 
    },
    {
      name: 'Recursos',
      dropdown: [
        { name: 'Blog', href: '/blog', icon: '📝' },
        { name: 'Documentación', href: '/docs', icon: '📚' },
        { name: 'Centro de Ayuda', href: '/ayuda', icon: '💡' },
      ]
    },
    { 
      name: 'Sobre Nosotros', 
      href: '/about' 
    },
  ];

  // Cerrar menú móvil al hacer click en un link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Header Principal */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-md' 
            : 'bg-white'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container-scale">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
              onClick={handleLinkClick}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple to-brand-blue rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-200" />
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                Netovate OU
              </span>
            </Link>

            {/* Navegación Desktop */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    // Link con dropdown
                    <div
                      className="relative"
                      onMouseEnter={() => !prefersReducedMotion && setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="px-4 py-2 text-gray-700 hover:text-brand-blue font-medium transition-colors duration-200 flex items-center gap-1">
                        {link.name}
                        <ChevronDownIcon className="w-4 h-4" />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
                                onClick={handleLinkClick}
                              >
                                <span className="text-2xl">{item.icon}</span>
                                <span className="text-gray-700 hover:text-brand-blue font-medium">
                                  {item.name}
                                </span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Link simple
                    <Link
                      to={link.href}
                      className="px-4 py-2 text-gray-700 hover:text-brand-blue font-medium transition-colors duration-200 relative group"
                      onClick={handleLinkClick}
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.location.href = '/#contacto'}
              >
                Contacto
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => window.location.href = '/#precios'}
              >
                Prueba Gratis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-2xl overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.dropdown ? (
                        <div>
                          <button
                            className="w-full px-4 py-3 text-left text-gray-900 font-medium hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-between"
                            onClick={() => setActiveDropdown(
                              activeDropdown === link.name ? null : link.name
                            )}
                          >
                            {link.name}
                            <ChevronDownIcon 
                              className={`w-4 h-4 transition-transform ${
                                activeDropdown === link.name ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.name && (
                              <motion.div
                                className="pl-4 mt-2 space-y-2"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                              >
                                {link.dropdown.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:text-brand-blue hover:bg-gray-50 rounded-lg transition-colors"
                                    onClick={handleLinkClick}
                                  >
                                    <span className="text-xl">{item.icon}</span>
                                    <span>{item.name}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.href}
                          className="block px-4 py-3 text-gray-900 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={handleLinkClick}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 space-y-3">
                  <Button
                    variant="outline"
                    size="md"
                    fullWidth
                    onClick={() => {
                      window.location.href = '/#contacto';
                      handleLinkClick();
                    }}
                  >
                    Contacto
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    onClick={() => {
                      window.location.href = '/#precios';
                      handleLinkClick();
                    }}
                  >
                    Prueba Gratis
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;