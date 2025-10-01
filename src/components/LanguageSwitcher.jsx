/**
 * LANGUAGE SWITCHER - NETOVATE OU
 * ================================
 * Componente para cambiar el idioma de la aplicación
 * Usa i18next para cambio inmediato + Azure Translator opcional
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobeAltIcon, ChevronDownIcon, CheckIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const LANGUAGES = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
];

export default function LanguageSwitcher({ compact = false }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Obtener idioma actual
  const currentLanguage = LANGUAGES.find(lang => lang.code === i18n.language) || LANGUAGES[0];

  // Cambiar idioma
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
    
    console.log(`✅ Idioma cambiado a: ${code}`);
    
    // Opcional: Aquí podrías disparar traducciones con Azure
    // para contenido dinámico que no esté en los archivos JSON
  };

  return (
    <div className="relative">
      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 
                   backdrop-blur-md border border-white/20 transition-all duration-200
                   text-gray-700 hover:text-gray-900 group"
        aria-label="Cambiar idioma"
      >
        {compact ? (
          <GlobeAltIcon className="w-5 h-5" />
        ) : (
          <>
            <span className="text-xl">{currentLanguage.flag}</span>
            <span className="font-medium">{currentLanguage.name}</span>
            <ChevronDownIcon 
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            />
          </>
        )}
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop invisible para cerrar al hacer clic fuera */}
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl 
                         border border-gray-200 overflow-hidden z-20"
            >
              <div className="py-2">
                {LANGUAGES.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={`w-full px-4 py-2 flex items-center justify-between
                               hover:bg-gray-50 transition-colors text-left
                               ${i18n.language === language.code ? 'bg-purple-50' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{language.flag}</span>
                      <span className="font-medium text-gray-700">{language.name}</span>
                    </div>
                    
                    {i18n.language === language.code && (
                      <CheckIcon className="w-5 h-5 text-purple-600" />
                    )}
                  </button>
                ))}
              </div>

              {/* Info sobre Azure Translator */}
              <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
                <p className="text-xs text-gray-600">
                  💡 Traducciones automáticas con Azure AI
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}