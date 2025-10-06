/**
 * TESTIMONIALS SECTION - NETOVATE OU
 * ====================================
 * Sección de testimonios y validación social
 * Incluye testimonios de clientes y logos de empresas
 */

import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();

  // Testimonios de clientes
  const testimonials = [
    {
      quote: "Netovate transformó completamente nuestra atención al cliente. Ahora procesamos 10x más llamadas con la mitad del personal.",
      author: "María González",
      role: "CEO",
      company: "TechSolutions",
      avatar: "MG",
      rating: 5,
      gradient: "from-purple-500 to-blue-500"
    },
    {
      quote: "La IA conversacional es tan natural que nuestros clientes ni siquiera notan que están hablando con un bot. Increíble.",
      author: "David Martinez",
      role: "Director de Operaciones",
      company: "Global Services",
      avatar: "DM",
      rating: 5,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      quote: "ROI positivo en menos de 2 meses. La mejor inversión tecnológica que hemos hecho este año.",
      author: "Laura Sánchez",
      role: "CFO",
      company: "InnovateCorp",
      avatar: "LS",
      rating: 5,
      gradient: "from-cyan-500 to-teal-500"
    }
  ];

  // Logos de empresas (mock - puedes reemplazar con logos reales)
  const companies = [
    { name: "TechCorp", color: "text-purple-400" },
    { name: "InnovateLabs", color: "text-blue-400" },
    { name: "GlobalTech", color: "text-cyan-400" },
    { name: "FutureSoft", color: "text-teal-400" },
    { name: "SmartAI", color: "text-green-400" },
    { name: "DataFlow", color: "text-yellow-400" },
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('testimonials.title') || 'Empresas que confían en '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t('testimonials.titleHighlight') || 'Netovate'}
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t('testimonials.subtitle') || 'Más de 2,500 empresas ya están automatizando sus comunicaciones con nuestra tecnología de IA'}
          </p>
        </motion.div>

        {/* Logos de empresas */}
        <motion.div
          className="mb-20 py-8 border-y border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                className={`text-2xl md:text-3xl font-bold ${company.color} opacity-60 hover:opacity-100 transition-opacity cursor-pointer`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                {company.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">

                {/* Quote icon sutil */}
                <div className="absolute top-4 right-4 text-6xl text-purple-500/10 font-serif leading-none">
                  "
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar con gradiente */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-white font-semibold">
                        {testimonial.author}
                      </p>
                      <CheckBadgeIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover effect glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats rápidos */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            { value: "2,500+", label: t('testimonials.stat1') || "Empresas activas" },
            { value: "99.2%", label: t('testimonials.stat2') || "Satisfacción cliente" },
            { value: "25M+", label: t('testimonials.stat3') || "Llamadas procesadas" },
            { value: "45%", label: t('testimonials.stat4') || "Ahorro promedio" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
    </div>
  );
}
