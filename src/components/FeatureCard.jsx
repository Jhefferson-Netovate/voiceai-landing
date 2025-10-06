/**
 * FEATURE CARD - NETOVATE OU
 * ===========================
 * VERSIÓN MEJORADA - CON MICRO-ANIMACIONES
 * - Hover state que revela más información
 * - Animaciones únicas por icono
 * - Efectos de profundidad
 * - Optimizado para móvil
 */

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient = 'from-purple-500 to-blue-500',
  delay = 0,
  features = [] // Lista de características adicionales para mostrar en hover
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Animación de profundidad 3D
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  // Handler para mouse move (solo desktop)
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // Skip en móvil

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      // ANIMACIÓN DE ENTRADA
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      // EFECTO 3D EN HOVER (solo desktop)
      style={{
        rotateX: window.innerWidth >= 768 ? rotateX : 0,
        rotateY: window.innerWidth >= 768 ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      // CLASES OPTIMIZADAS
      className="
        relative
        group
        h-full

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

        /* Optimización de rendering */
        will-change-auto
        transform-gpu

        /* Transiciones */
        transition-all duration-300

        /* Hover effects SOLO desktop */
        md:hover:border-purple-500/30
        md:hover:shadow-xl md:hover:shadow-purple-500/20
        md:hover:-translate-y-2

        /* Touch feedback SOLO móvil */
        active:scale-[0.98] md:active:scale-100

        /* Cursor pointer en desktop */
        md:cursor-pointer
      "
    >
      {/* Brillo sutil de fondo en hover (solo desktop) */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-br ${gradient}
          opacity-0
          md:group-hover:opacity-[0.03]
          rounded-2xl
          transition-opacity duration-500
          pointer-events-none
        `}
      />

      {/* Icono con animación única */}
      <div className="relative z-10 mb-4 sm:mb-6" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
        <motion.div
          className={`
            inline-flex items-center justify-center
            w-12 h-12 sm:w-14 sm:h-14

            /* Gradiente del icono */
            bg-gradient-to-br ${gradient}

            rounded-xl sm:rounded-2xl
            shadow-lg

            /* Transición suave */
            transition-all duration-300
          `}
          animate={isHovered ? {
            scale: [1, 1.1, 1.05],
            rotate: [0, 5, 3],
          } : {
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          <motion.div
            animate={isHovered ? {
              rotate: [0, 360],
            } : {
              rotate: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </motion.div>
        </motion.div>

        {/* Partículas decorativas en hover */}
        {isHovered && (
          <>
            <motion.div
              className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-br ${gradient}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: [0, 10], y: [0, -10] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            <motion.div
              className={`absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-gradient-to-br ${gradient}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: [0, -10], y: [0, 10] }}
              transition={{ duration: 0.8, delay: 0.2, repeat: Infinity }}
            />
          </>
        )}
      </div>
      
      {/* Contenido */}
      <div className="relative z-10" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(10px)' }}>
        {/* Título */}
        <motion.h3
          className="
            text-white
            text-lg sm:text-xl
            font-semibold
            mb-2 sm:mb-3
            leading-tight
          "
          animate={isHovered ? { x: [0, 3, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>

        {/* Descripción */}
        <motion.p
          className="
            text-gray-300 sm:text-gray-400
            text-sm sm:text-base
            leading-relaxed
          "
          animate={isHovered ? { opacity: [1, 0.8, 1] } : {}}
          transition={{ duration: 0.8 }}
        >
          {description}
        </motion.p>

        {/* Características adicionales en hover */}
        {features.length > 0 && (
          <motion.div
            className="mt-4 space-y-2 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-400"
                initial={{ x: -10, opacity: 0 }}
                animate={isHovered ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${gradient}`} />
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      
      {/* Línea decorativa inferior animada */}
      <motion.div
        className={`
          absolute bottom-0 left-6 sm:left-8
          h-0.5
          bg-gradient-to-r ${gradient}
          rounded-full
        `}
        initial={{ width: 0 }}
        animate={isHovered ? { width: 64 } : { width: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Brillo en esquina animado */}
      <motion.div
        className={`
          absolute -top-px -right-px
          w-24 h-24
          bg-gradient-to-br ${gradient}
          rounded-full blur-3xl
          pointer-events-none
        `}
        initial={{ opacity: 0, scale: 0 }}
        animate={isHovered ? { opacity: 0.15, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Borde brillante progresivo en hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-20 blur-sm`} />
      </motion.div>
    </motion.div>
  );
}