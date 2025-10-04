/**
 * FEATURE CARD - NETOVATE OU
 * ===========================
 * VERSIÓN ARREGLADA - SIN CLASES CUSTOM
 * - Solo usa clases Tailwind estándar
 * - Siempre visible (no depende de animaciones)
 * - Funciona perfecto en móvil y desktop
 */

import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  gradient = 'from-purple-500 to-blue-500',
  delay = 0 
}) {
  
  return (
    <motion.div
      // ANIMACIÓN SEGURA: Si falla, el card es visible de todos modos
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ 
        once: true,
        margin: '-50px',
        amount: 0.1
      }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: 'easeOut'
      }}
      // CLASES SOLO TAILWIND ESTÁNDAR - NO CUSTOM
      className="
        relative
        group
        
        /* Fondo con glassmorphism */
        bg-gradient-to-br from-gray-900/90 to-gray-800/90
        backdrop-blur-sm
        
        /* Bordes */
        border border-white/10
        rounded-2xl
        
        /* Padding responsive */
        p-6 sm:p-8
        
        /* Sombras */
        shadow-lg shadow-black/50
        
        /* Transiciones */
        transition-all duration-300
        
        /* Hover effects (solo desktop) */
        hover:border-purple-500/30
        hover:shadow-xl hover:shadow-purple-500/20
        hover:-translate-y-1
        
        /* Touch feedback (móvil) */
        active:scale-[0.98]
      "
    >
      {/* Brillo sutil de fondo en hover (solo desktop) */}
      <div 
        className={`
          absolute inset-0 
          bg-gradient-to-br ${gradient} 
          opacity-0 
          group-hover:opacity-[0.03]
          rounded-2xl 
          transition-opacity duration-500
          pointer-events-none
        `} 
      />
      
      {/* Icono */}
      <div className="relative z-10 mb-4 sm:mb-6">
        <div 
          className={`
            inline-flex items-center justify-center
            w-12 h-12 sm:w-14 sm:h-14
            
            /* Gradiente del icono */
            bg-gradient-to-br ${gradient}
            
            rounded-xl sm:rounded-2xl
            shadow-lg
            
            /* Animación suave en hover */
            transition-transform duration-300
            group-hover:scale-110
            group-hover:rotate-3
          `}
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
      </div>
      
      {/* Contenido */}
      <div className="relative z-10">
        {/* Título */}
        <h3 className="
          text-white 
          text-lg sm:text-xl 
          font-semibold 
          mb-2 sm:mb-3
          leading-tight
        ">
          {title}
        </h3>
        
        {/* Descripción */}
        <p className="
          text-gray-300 sm:text-gray-400 
          text-sm sm:text-base
          leading-relaxed
        ">
          {description}
        </p>
      </div>
      
      {/* Línea decorativa inferior (solo desktop) */}
      <div 
        className={`
          absolute bottom-0 left-6 sm:left-8
          h-0.5 w-0
          bg-gradient-to-r ${gradient}
          group-hover:w-12 sm:group-hover:w-16
          transition-all duration-300
          rounded-full
        `}
      />
      
      {/* Brillo en esquina (solo desktop) */}
      <div 
        className="
          absolute -top-px -right-px
          w-20 h-20
          bg-gradient-to-br from-white/5 to-transparent
          rounded-full blur-2xl
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          pointer-events-none
        "
      />
    </motion.div>
  );
}