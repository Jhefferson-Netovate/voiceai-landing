import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, ChevronRightIcon, SparklesIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useTranslation } from 'react-i18next';

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

      {/* Glow Orbs - Mejorados con animación */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={prefersReducedMotion ? {} : {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={prefersReducedMotion ? {} : {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Partículas flotantes decorativas */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              y: [0, 30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </>
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 container-scale section-padding text-center"
        {...staggerChildren}
      >
        {/* Badge animado */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SparklesIcon className="w-4 h-4 text-purple-400 animate-pulse" />
          <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {t('hero.badge') || 'Potenciado por IA'}
          </span>
        </motion.div>

        {/* Título con gradient animado */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          {...fadeInUp}
        >
          <span className="text-white">{t('hero.title')}</span>
          <br />
          <motion.span
            className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent inline-block"
            animate={prefersReducedMotion ? {} : {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={prefersReducedMotion ? {} : {
              duration: 5,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            {t('hero.titleHighlight') || 'con IA'}
          </motion.span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          {...fadeInUp}
        >
          {t('hero.subtitle')} {/* ⬅️ TRADUCCIÓN */}
        </motion.p>

        {/* CTAs mejorados */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          {...fadeInUp}
        >
          {/* CTA Principal - Más destacado */}
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all duration-300 overflow-hidden"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            onClick={() => window.location.href = '/#precios'}
          >
            {/* Efecto de brillo animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <span className="relative flex items-center gap-2">
              <RocketLaunchIcon className="w-5 h-5" />
              {t('hero.ctaPrimary') || 'Comenzar Gratis'}
              <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          {/* CTA Secundario - Demo */}
          <motion.button
            className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            <PlayIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {t('hero.ctaSecondary') || 'Ver Demo'}
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-12"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Sin tarjeta de crédito
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Configuración en 5 minutos
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Soporte 24/7
          </span>
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
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-48 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-48 md:h-96 bg-gradient-to-b from-transparent to-black/80 pointer-events-none z-10" />
    </div>
  );
}