/**
 * USE CASE SECTION - NETOVATE OU
 * ================================
 * Sección de caso de uso real con storytelling
 * Muestra cómo funciona el producto en acción
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowTrendingUpIcon,
  ClockIcon,
  CurrencyEuroIcon,
  CheckCircleIcon,
  PhoneIcon,
  ChartBarIcon
} from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

export default function UseCase() {
  const { t } = useTranslation();

  // Pasos del caso de uso
  const steps = [
    {
      number: "01",
      title: t('usecase.step1Title') || "Antes de Netovate",
      description: t('usecase.step1Desc') || "10 agentes gestionaban 200 llamadas/día manualmente",
      icon: PhoneIcon,
      color: "text-red-400",
      bgColor: "from-red-500/20 to-red-600/20",
    },
    {
      number: "02",
      title: t('usecase.step2Title') || "Implementación",
      description: t('usecase.step2Desc') || "Integración en 3 días con nuestro equipo de soporte",
      icon: CheckCircleIcon,
      color: "text-yellow-400",
      bgColor: "from-yellow-500/20 to-yellow-600/20",
    },
    {
      number: "03",
      title: t('usecase.step3Title') || "Después de Netovate",
      description: t('usecase.step3Desc') || "IA gestiona 2,000 llamadas/día, equipo se enfoca en casos complejos",
      icon: ArrowTrendingUpIcon,
      color: "text-green-400",
      bgColor: "from-green-500/20 to-green-600/20",
    },
  ];

  // Métricas de resultados
  const results = [
    {
      label: t('usecase.metric1Label') || "Ahorro mensual",
      value: "€18,500",
      change: "+280%",
      icon: CurrencyEuroIcon,
      color: "text-green-400"
    },
    {
      label: t('usecase.metric2Label') || "Tiempo ahorrado",
      value: "1,600h",
      change: "+450%",
      icon: ClockIcon,
      color: "text-blue-400"
    },
    {
      label: t('usecase.metric3Label') || "Llamadas procesadas",
      value: "2,000",
      change: "+900%",
      icon: PhoneIcon,
      color: "text-purple-400"
    },
    {
      label: t('usecase.metric4Label') || "Satisfacción cliente",
      value: "98%",
      change: "+15%",
      icon: ChartBarIcon,
      color: "text-cyan-400"
    },
  ];

  return (
    <div className="container-scale">

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-semibold text-purple-400">
          {t('usecase.badge') || '📊 Caso de Éxito'}
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          {t('usecase.title') || 'Cómo '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {t('usecase.titleHighlight') || 'TechSolutions'}
          </span>
          {t('usecase.titleEnd') || ' multiplicó su productividad'}
        </h2>

        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          {t('usecase.subtitle') || 'Descubre cómo una empresa de servicios automatizó su atención telefónica y redujo costes en un 280%'}
        </p>
      </motion.div>

      {/* Timeline de pasos */}
      <div className="relative mb-16 md:mb-24">
        {/* Línea conectora - Solo desktop */}
        <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-red-500/30 via-yellow-500/30 to-green-500/30 -translate-y-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Card con altura fija mejorada */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group min-h-[280px] flex flex-col">

                {/* Número grande en el fondo */}
                <div className="absolute top-4 right-4 text-7xl md:text-8xl font-bold text-white/5 select-none">
                  {step.number}
                </div>

                {/* Icono */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${step.bgColor} border border-white/10 shadow-lg`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                </div>

                {/* Contenido */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Indicador de paso - Más separado del contenido */}
                <div className={`relative z-10 mt-6 pt-4 border-t border-white/5 text-sm font-semibold ${step.color}`}>
                  Paso {step.number}
                </div>
              </div>

              {/* Flecha conectora mejorada (solo desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 transform -translate-y-1/2 z-20">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg className="w-10 h-10 text-purple-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Resultados */}
      <motion.div
        className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl p-6 md:p-10 lg:p-12 border border-white/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            {t('usecase.resultsTitle') || 'Resultados en 3 meses'}
          </h3>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            {t('usecase.resultsSubtitle') || 'Métricas reales de impacto medible'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="text-center p-6 md:p-8 rounded-xl bg-black/30 border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              {/* Icono */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <result.icon className={`w-7 h-7 ${result.color}`} />
                </div>
              </div>

              {/* Valor */}
              <div className="mb-3">
                <motion.div
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  {result.value}
                </motion.div>
              </div>

              {/* Label */}
              <div className="text-sm md:text-base text-gray-400 mb-4 font-medium">
                {result.label}
              </div>

              {/* Badge de cambio */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <ArrowTrendingUpIcon className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-green-400">
                  {result.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center pt-6 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-base md:text-lg text-gray-400 mb-6">
            {t('usecase.ctaText') || '¿Quieres resultados similares en tu empresa?'}
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '#contacto'}
          >
            {t('usecase.ctaButton') || 'Solicitar Demo Personalizada'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>

    </div>
  );
}
