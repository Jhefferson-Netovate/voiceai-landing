import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useTranslation } from 'react-i18next'; // ⬅️ AÑADIR ESTO

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useTranslation(); // ⬅️ AÑADIR ESTO

  const fadeInUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: 'easeOut' }
      };

  const staggerChildren = prefersReducedMotion
    ? {}
    : {
        animate: {
          transition: {
            staggerChildren: 0.1
          }
        }
      };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black" />
      <div className="absolute inset-0 dot-pattern opacity-10" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />

      {/* Content */}
      <motion.div 
        className="relative z-10 container-scale py-32 text-center"
        {...staggerChildren}
      >
        {/* Título */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          {...fadeInUp}
        >
          {t('hero.title')} {/* ⬅️ TRADUCCIÓN */}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          {...fadeInUp}
        >
          {t('hero.subtitle')} {/* ⬅️ TRADUCCIÓN */}
        </motion.p>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          {...fadeInUp}
        >
          <button className="btn-primary">
            🚀 {t('hero.ctaPrimary')} {/* ⬅️ TRADUCCIÓN */}
          </button>
          
          <motion.button
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PlayIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            {t('hero.ctaSecondary')} {/* ⬅️ TRADUCCIÓN */}
          </motion.button>
        </motion.div>

        {/* Estadísticas sociales */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          {...staggerChildren}
        >
          <motion.div className="text-center" {...fadeInUp}>
            <div className="text-3xl md:text-4xl font-bold text-scale-purple mb-2">
              {t('hero.stats1Value')} {/* ⬅️ TRADUCCIÓN */}
            </div>
            <div className="text-white/60 text-sm">
              {t('hero.stats1Label')} {/* ⬅️ TRADUCCIÓN */}
            </div>
          </motion.div>
          
          <motion.div className="text-center" {...fadeInUp}>
            <div className="text-3xl md:text-4xl font-bold text-scale-cyan mb-2">
              {t('hero.stats2Value')} {/* ⬅️ TRADUCCIÓN */}
            </div>
            <div className="text-white/60 text-sm">
              {t('hero.stats2Label')} {/* ⬅️ TRADUCCIÓN */}
            </div>
          </motion.div>
          
          <motion.div className="text-center" {...fadeInUp}>
            <div className="text-3xl md:text-4xl font-bold text-scale-orange mb-2">
              {t('hero.stats3Value')} {/* ⬅️ TRADUCCIÓN */}
            </div>
            <div className="text-white/60 text-sm">
              {t('hero.stats3Label')} {/* ⬅️ TRADUCCIÓN */}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronRightIcon className="w-6 h-6 rotate-90" />
        </motion.div>
      )}

      {/* Gradiente de transición */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-black/80 pointer-events-none z-10" />
    </div>
  );
}