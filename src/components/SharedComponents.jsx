/**
 * SHARED COMPONENTS - NETOVATE OU
 * ================================
 * Componentes reutilizables que usan el sistema de diseño
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

/**
 * BUTTON COMPONENT
 * ================
 * Botón reutilizable con variantes y tamaños
 * 
 * Uso:
 * <Button variant="primary" size="lg">Click me</Button>
 * <Button variant="outline" icon={<Icon />}>With Icon</Button>
 */
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon,
  onClick,
  className = '',
  disabled = false,
  ...props 
}) {
  const variants = {
    primary: `bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 
              text-white shadow-lg hover:shadow-xl`,
    secondary: `bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 
                text-white shadow-lg hover:shadow-xl`,
    outline: `bg-transparent border-2 border-purple-600 text-purple-600 
              hover:bg-purple-600 hover:text-white`,
    ghost: `bg-white/10 backdrop-blur-md border border-white/20 text-gray-700 
            hover:bg-white/20 hover:text-gray-900`,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        font-semibold rounded-xl transition-all duration-300
        transform hover:scale-105 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        flex items-center justify-center gap-2
        ${className}
      `}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
}

/**
 * HEADER COMPONENT
 * ================
 * Header navigation con logo, menú y language switcher
 */
export function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Detectar scroll para cambiar estilo del header
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl 
                            flex items-center justify-center transform group-hover:scale-110 
                            transition-transform shadow-lg">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 
                           bg-clip-text text-transparent">
              Netovate OU
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              {t('home')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              {t('about')}
            </Link>
            <Link to="/#pricing" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              {t('pricing')}
            </Link>
            <Link to="/contacto" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              {t('contact')}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="primary" size="sm">
              {t('getStarted')}
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

/**
 * FOOTER COMPONENT
 * ================
 * Footer con links, información de la empresa y redes sociales
 */
export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Columna 1: Branding */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl 
                              flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold">Netovate OU</span>
            </div>
            <p className="text-gray-400 mb-4">
              Automatiza tus llamadas con IA conversacional de última generación
            </p>
          </div>

          {/* Columna 2: Empresa */}
          <div>
            <h4 className="font-bold mb-4">{t('company')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-gray-400 hover:text-white transition-colors">
                  {t('pricing')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Legal */}
          <div>
            <h4 className="font-bold mb-4">{t('legal')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@netovate.com</li>
              <li>+34 900 123 456</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Netovate OU. {t('allRightsReserved')}
          </p>
          <p className="mt-2 text-sm">
            Powered by Azure AI Translator 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}