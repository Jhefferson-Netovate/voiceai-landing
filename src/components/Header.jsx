import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import Button from './Button';
import { useTheme } from './ThemeProvider';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { prefersReducedMotion } = useTheme();
  const { t, i18n } = useTranslation();

  // Idiomas disponibles
  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  // Obtener idioma actual
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Cambiar idioma
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLanguageMenuOpen(false);
  };

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links de navegación (sin "Casos de Uso" para mejor espaciado)
  const navLinks = [
    { 
      name: t('nav.home'), 
      href: '/',
      exact: true
    },
    {
      name: t('nav.solutions'),
      dropdown: [
        { name: t('nav.ia'), href: '/#caracteristicas', icon: '🤖' },
        { name: t('nav.automation'), href: '/#caracteristicas', icon: '⚡' },
        { name: t('nav.analytics'), href: '/#caracteristicas', icon: '📊' },
        { name: t('nav.integrations'), href: '/#caracteristicas', icon: '🔗' },
      ]
    },
    { 
      name: t('nav.pricing'), 
      href: '/#precios' 
    },
    {
      name: t('nav.resources'),
      dropdown: [
        { name: t('nav.blog'), href: '/blog', icon: '📝' },
        { name: t('nav.docs'), href: '/docs', icon: '📚' },
        { name: t('nav.help'), href: '/ayuda', icon: '💡' },
      ]
    },
    { 
      name: t('nav.about'), 
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl shadow-lg border-b border-white/10' 
            : 'bg-transparent'
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
              onClick={e => {
                if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                handleLinkClick();
              }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-200" />
              </div>
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              } group-hover:text-purple-400`}>
                {t('header.companyName')}
              </span>
            </Link>

            {/* Navegación Desktop - Mejor espaciado */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    // Link con dropdown
                    <div
                      className="relative"
                      onMouseEnter={() => !prefersReducedMotion && setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className={`px-4 py-2 font-medium transition-colors duration-200 flex items-center gap-1.5 ${
                        isScrolled 
                          ? 'text-gray-300 hover:text-white' 
                          : 'text-white/90 hover:text-white'
                      }`}>
                        {link.name}
                        <ChevronDownIcon className="w-4 h-4" />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors duration-150 text-gray-300 hover:text-white"
                                onClick={handleLinkClick}
                              >
                                <span className="text-2xl">{item.icon}</span>
                                <span className="font-medium">
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
                      className={`px-4 py-2 font-medium transition-all duration-200 relative group ${
                        isScrolled 
                          ? 'text-gray-300 hover:text-white' 
                          : 'text-white/90 hover:text-white'
                      }`}
                      onClick={handleLinkClick}
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons y Selector de Idioma Desktop - Mejor espaciado */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                className={`px-5 py-2 font-medium transition-colors duration-200 rounded-lg ${
                  isScrolled
                    ? 'text-gray-300 hover:text-white hover:bg-white/5'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => window.location.href = '/#contacto'}
              >
                {t('nav.contact')}
              </button>
              
              <button
                className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = '/#precios'}
              >
                {t('nav.tryfree')}
              </button>

              {/* Selector de Idioma Mejorado */}
              <div className="relative ml-2">
                <button
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isScrolled
                      ? 'text-gray-300 hover:text-white hover:bg-white/5'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                  aria-label="Cambiar idioma"
                >
                  <GlobeAltIcon className="w-5 h-5" />
                  <span className="font-medium">{currentLanguage.code.toUpperCase()}</span>
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown de Idiomas */}
                <AnimatePresence>
                  {languageMenuOpen && (
                    <>
                      {/* Backdrop invisible para cerrar al hacer clic fuera */}
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setLanguageMenuOpen(false)}
                      />

                      {/* Menu de idiomas */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden z-20"
                      >
                        <div className="py-2">
                          {languages.map((language) => (
                            <button
                              key={language.code}
                              onClick={() => changeLanguage(language.code)}
                              className={`w-full px-4 py-2.5 flex items-center justify-between hover:bg-white/5 transition-colors text-left ${
                                i18n.language === language.code ? 'bg-white/5' : ''
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xl">{language.flag}</span>
                                <span className="font-medium text-white">{language.name}</span>
                              </div>
                              
                              {i18n.language === language.code && (
                                <CheckIcon className="w-5 h-5 text-purple-400" />
                              )}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-colors rounded-lg ${
                isScrolled
                  ? 'text-gray-300 hover:text-white hover:bg-white/5'
                  : 'text-white hover:bg-white/10'
              }`}
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
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-black/95 backdrop-blur-xl shadow-2xl overflow-y-auto border-l border-white/10"
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
                    className="p-2 text-gray-400 hover:text-white"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <div className="space-y-2 mb-6">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.dropdown ? (
                        <div>
                          <button
                            className="w-full px-4 py-3 text-left text-white font-medium hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
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
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="ml-4 mt-2 space-y-1"
                              >
                                {link.dropdown.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
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
                          className="block px-4 py-3 text-white font-medium hover:bg-white/5 rounded-lg transition-colors"
                          onClick={handleLinkClick}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Selector de Idioma Móvil */}
                <div className="border-t border-white/10 pt-6 mb-6">
                  <div className="px-4 mb-3 text-sm text-gray-400 font-medium">
                    Idioma / Language
                  </div>
                  <div className="space-y-2">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          changeLanguage(language.code);
                          handleLinkClick();
                        }}
                        className={`w-full px-4 py-3 flex items-center justify-between rounded-lg transition-colors ${
                          i18n.language === language.code 
                            ? 'bg-white/10 text-white' 
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{language.flag}</span>
                          <span className="font-medium">{language.name}</span>
                        </div>
                        
                        {i18n.language === language.code && (
                          <CheckIcon className="w-5 h-5 text-purple-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3">
                  <button
                    className="w-full px-4 py-3 text-white font-medium hover:bg-white/5 rounded-lg transition-colors border border-white/10"
                    onClick={() => {
                      window.location.href = '/#contacto';
                      handleLinkClick();
                    }}
                  >
                    {t('nav.contact')}
                  </button>
                  <button
                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg"
                    onClick={() => {
                      window.location.href = '/#precios';
                      handleLinkClick();
                    }}
                  >
                    {t('nav.tryfree')}
                  </button>
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