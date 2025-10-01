import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  gradient = 'from-scale-purple to-scale-blue',
  delay = 0 
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  
  return (
    <motion.div
      className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? {} : { duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={prefersReducedMotion ? {} : { 
        y: -5,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Gradiente de fondo sutil */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
      
      {/* Icono */}
      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${gradient} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      {/* Contenido */}
      <div className="relative">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Indicador de interacción */}
      <motion.div
        className="absolute bottom-0 left-8 w-0 h-0.5 bg-gradient-to-r from-scale-purple to-scale-blue group-hover:w-16 transition-all duration-300"
        initial={false}
      />
    </motion.div>
  );
}