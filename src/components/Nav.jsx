import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon,
  PhoneIcon,
  CpuChipIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

// Datos de navegación (fácil de modificar)
const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { 
    name: 'Producto', 
    href: '#producto',
    dropdown: [
      { name: 'Características', href: '#caracteristicas', icon: CpuChipIcon },
      { name: 'Casos de Uso', href: '#casos', icon: PhoneIcon },
      { name: 'Analytics', href: '#analytics', icon: ChartBarIcon },
    ]
  },
  { name: 'Precios', href: '#precios' },
  { name: 'Empresa', href: '#empresa' },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  
  // Detectar scroll para añadir blur al nav (efecto Scale.com)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animaciones condicionales basadas en accesibilidad
  const animationProps = prefersReducedMotion 
    ? {} 
    : {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: 'easeOut' }
      };
  
  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'nav-blur shadow-lg border-b border-gray-200 border-opacity-20' 
          : 'bg-transparent'
      }`}
      {...animationProps}
    >
      <div className="container-scale">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            <a href="#inicio" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-scale-purple to-scale-blue rounded-lg flex items-center justify-center">
                <PhoneIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                VoiceFlow<span className="text-gradient">.ai</span>
              </span>
            </a>
          </motion.div>

          {/* Navegación Desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  /* Dropdown Menu */
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-scale-purple transition-colors duration-200 font-medium group">
                      <span>{item.name}</span>
                      <ChevronDownIcon 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2"
                          initial={prefersReducedMotion ? {} : { opacity: 0, y: -10, scale: 0.95 }}
                          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                          exit={prefersReducedMotion ? {} : { opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                          {item.dropdown.map((dropItem) => (
                            <a
                              key={dropItem.name}
                              href={dropItem.href}
                              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-scale-purple transition-colors group"
                            >
                              <dropItem.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-scale-purple" />
                              <span className="font-medium">{dropItem.name}</span>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  /* Link normal */
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-scale-purple transition-colors duration-200 font-medium link-hover"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <a href="#contacto" className="text-gray-700 hover:text-scale-purple font-medium transition-colors">
              Contacto
            </a>
            <motion.a
              href="#demo"
              className="btn-primary"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              Prueba Gratis
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-scale-purple hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-scale-purple transition-colors">
                    <span className="sr-only">Abrir menú principal</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>

                  <AnimatePresence>
                    {open && (
                      <Disclosure.Panel static>
                        <motion.div
                          className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100"
                          initial={prefersReducedMotion ? {} : { opacity: 0, height: 0 }}
                          animate={prefersReducedMotion ? {} : { opacity: 1, height: 'auto' }}
                          exit={prefersReducedMotion ? {} : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                          <div className="px-4 py-6 space-y-4">
                            {navigation.map((item) => (
                              <div key={item.name}>
                                {item.dropdown ? (
                                  <div className="space-y-2">
                                    <div className="font-semibold text-gray-900 px-3 py-2">
                                      {item.name}
                                    </div>
                                    {item.dropdown.map((dropItem) => (
                                      <a
                                        key={dropItem.name}
                                        href={dropItem.href}
                                        className="flex items-center px-6 py-2 text-gray-600 hover:text-scale-purple hover:bg-gray-50 rounded-lg transition-colors"
                                      >
                                        <dropItem.icon className="w-5 h-5 mr-3" />
                                        {dropItem.name}
                                      </a>
                                    ))}
                                  </div>
                                ) : (
                                  <a
                                    href={item.href}
                                    className="block px-3 py-2 text-gray-700 hover:text-scale-purple hover:bg-gray-50 rounded-lg font-medium transition-colors"
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </div>
                            ))}
                            
                            <div className="pt-4 border-t border-gray-100">
                              <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-scale-purple font-medium transition-colors mb-3">
                                Contacto
                              </a>
                              <a href="#demo" className="btn-primary w-full text-center">
                                Prueba Gratis
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      </Disclosure.Panel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}