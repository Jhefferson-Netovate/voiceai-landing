/**
 * SECTION DIVIDER - NETOVATE OU
 * ===============================
 * Separadores visuales elegantes entre secciones
 * Varias variantes disponibles
 */

import React from 'react';
import { motion } from 'framer-motion';

/**
 * GRADIENT LINE
 * Línea horizontal con gradiente
 */
export function GradientLine({ className = '' }) {
  return (
    <div className={`w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent ${className}`} />
  );
}

/**
 * DIAGONAL SEPARATOR
 * Separador diagonal con gradiente
 */
export function DiagonalSeparator({ variant = 'default', className = '' }) {
  const variants = {
    default: 'from-black via-purple-900/20 to-black',
    purple: 'from-black via-purple-500/20 to-black',
    blue: 'from-black via-blue-500/20 to-black',
    cyan: 'from-black via-cyan-500/20 to-black',
  };

  return (
    <div className={`relative w-full h-24 overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 bg-gradient-to-r ${variants[variant]}`}
        style={{
          clipPath: 'polygon(0 0, 100% 30%, 100% 100%, 0 70%)'
        }}
      />
    </div>
  );
}

/**
 * WAVE SEPARATOR
 * Separador con forma de onda
 */
export function WaveSeparator({ variant = 'top', className = '' }) {
  return (
    <div className={`relative w-full h-16 ${className}`}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d={variant === 'top'
            ? "M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 L0,0 Z"
            : "M0,50 C150,0 350,100 600,50 C850,0 1050,100 1200,50 L1200,120 L0,120 Z"
          }
          fill="url(#waveGradient)"
        />
      </svg>
    </div>
  );
}

/**
 * GLOW DIVIDER
 * Separador con efecto de brillo central
 */
export function GlowDivider({ className = '' }) {
  return (
    <div className={`relative w-full h-32 flex items-center justify-center ${className}`}>
      {/* Línea base */}
      <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Brillo central */}
      <motion.div
        className="w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
          filter: 'blur(20px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Punto central */}
      <div className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
    </div>
  );
}

/**
 * DOT PATTERN DIVIDER
 * Separador con patrón de puntos que se desvanece
 */
export function DotPatternDivider({ className = '' }) {
  return (
    <div className={`relative w-full h-24 overflow-hidden ${className}`}>
      {/* Gradiente de fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

      {/* Patrón de puntos */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
    </div>
  );
}

/**
 * ANIMATED LINE DIVIDER
 * Línea con animación de dibujo
 */
export function AnimatedLineDivider({ className = '' }) {
  return (
    <div className={`relative w-full h-20 flex items-center ${className}`}>
      <motion.div
        className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
}

/**
 * SPARKLE DIVIDER
 * Separador con pequeñas partículas brillantes
 */
export function SparkleDivider({ className = '' }) {
  const sparkles = [
    { left: '10%', delay: 0, duration: 2 },
    { left: '30%', delay: 0.5, duration: 2.5 },
    { left: '50%', delay: 1, duration: 2 },
    { left: '70%', delay: 0.3, duration: 2.2 },
    { left: '90%', delay: 0.8, duration: 2.8 },
  ];

  return (
    <div className={`relative w-full h-24 flex items-center ${className}`}>
      {/* Línea base */}
      <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      {/* Partículas brillantes */}
      {sparkles.map((sparkle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-400"
          style={{ left: sparkle.left }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// Exportar componente principal con variantes
export default function SectionDivider({ variant = 'gradient', className = '' }) {
  const dividers = {
    gradient: <GradientLine className={className} />,
    diagonal: <DiagonalSeparator className={className} />,
    wave: <WaveSeparator className={className} />,
    glow: <GlowDivider className={className} />,
    dots: <DotPatternDivider className={className} />,
    animated: <AnimatedLineDivider className={className} />,
    sparkle: <SparkleDivider className={className} />,
  };

  return dividers[variant] || dividers.gradient;
}
