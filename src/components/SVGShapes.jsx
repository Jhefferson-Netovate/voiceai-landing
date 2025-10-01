import React from 'react';
import { motion } from 'framer-motion';

/**
 * SVG SHAPES - NETOVATE OU
 * ==========================
 * Componentes de formas SVG animadas para backgrounds y decoración
 * Inspirado en Scale.com
 */

// ============================================
// GRADIENT ORBS - Esferas con gradiente
// ============================================
export const GradientOrb = ({ 
  size = 400, 
  color = 'purple',
  blur = 40,
  opacity = 0.3,
  animate = true,
  className = '' 
}) => {
  const colors = {
    purple: 'from-brand-purple to-brand-blue',
    cyan: 'from-brand-cyan to-brand-blue',
    coral: 'from-brand-coral to-brand-purple',
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${colors[color]} ${className}`}
      style={{
        width: size,
        height: size,
        filter: `blur(${blur}px)`,
        opacity: opacity,
      }}
      animate={animate ? {
        scale: [1, 1.2, 1],
        opacity: [opacity, opacity * 1.5, opacity],
      } : {}}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// ============================================
// FLOATING GRID - Rejilla flotante
// ============================================
export const FloatingGrid = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(99, 102, 241, 0.1)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

// ============================================
// ANIMATED GRADIENT BACKGROUND
// ============================================
export const AnimatedGradientBg = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-blue to-brand-cyan opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />
    </div>
  );
};

// ============================================
// DOTTED PATTERN - Patrón de puntos
// ============================================
export const DottedPattern = ({ 
  color = 'purple',
  size = 2,
  spacing = 20,
  className = '' 
}) => {
  const colorMap = {
    purple: 'rgba(99, 102, 241, 0.2)',
    cyan: 'rgba(0, 217, 255, 0.2)',
    gray: 'rgba(115, 115, 115, 0.2)',
  };

  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={`dots-${color}`}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={size}
              cy={size}
              r={size}
              fill={colorMap[color] || colorMap.purple}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${color})`} />
      </svg>
    </div>
  );
};

// ============================================
// WAVE DIVIDER - Divisor con forma de onda
// ============================================
export const WaveDivider = ({ 
  flip = false,
  color = '#FFFFFF',
  className = '' 
}) => {
  return (
    <div 
      className={`absolute w-full ${flip ? 'bottom-0 rotate-180' : 'top-0'} ${className}`}
      style={{ height: '100px' }}
    >
      <svg
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

// ============================================
// GEOMETRIC SHAPES - Formas geométricas animadas
// ============================================
export const FloatingShapes = ({ className = '' }) => {
  const shapes = [
    { type: 'circle', x: '10%', y: '20%', size: 60, delay: 0 },
    { type: 'square', x: '85%', y: '15%', size: 40, delay: 0.5 },
    { type: 'triangle', x: '70%', y: '70%', size: 50, delay: 1 },
    { type: 'circle', x: '20%', y: '80%', size: 35, delay: 1.5 },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        >
          {shape.type === 'circle' && (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 backdrop-blur-sm" />
          )}
          {shape.type === 'square' && (
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 backdrop-blur-sm rotate-45" />
          )}
          {shape.type === 'triangle' && (
            <div 
              className="w-0 h-0 border-l-[25px] border-r-[25px] border-b-[50px] border-l-transparent border-r-transparent"
              style={{
                borderBottomColor: 'rgba(0, 217, 255, 0.2)',
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// ============================================
// GLOW EFFECT - Efecto de brillo
// ============================================
export const GlowEffect = ({ 
  color = 'purple',
  intensity = 'medium',
  className = '' 
}) => {
  const colors = {
    purple: 'from-brand-purple/40 to-transparent',
    cyan: 'from-brand-cyan/40 to-transparent',
    blue: 'from-brand-blue/40 to-transparent',
  };

  const sizes = {
    small: 'w-64 h-64',
    medium: 'w-96 h-96',
    large: 'w-[600px] h-[600px]',
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-radial ${colors[color]} blur-3xl ${sizes[intensity]} ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

// ============================================
// EJEMPLO DE USO
// ============================================
export const BackgroundEffects = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-50">
      {/* Grid de fondo */}
      <FloatingGrid />
      
      {/* Orbs de gradiente */}
      <GradientOrb 
        size={500} 
        color="purple" 
        className="top-0 right-0 -translate-y-1/2 translate-x-1/4" 
      />
      <GradientOrb 
        size={400} 
        color="cyan" 
        className="bottom-0 left-0 translate-y-1/2 -translate-x-1/4" 
      />
      
      {/* Patrón de puntos */}
      <DottedPattern color="purple" className="opacity-50" />
      
      {/* Formas flotantes */}
      <FloatingShapes />
      
      {/* Tu contenido aquí */}
      <div className="relative z-10">
        {/* Contenido de la página */}
      </div>
    </div>
  );
};

export default {
  GradientOrb,
  FloatingGrid,
  AnimatedGradientBg,
  DottedPattern,
  WaveDivider,
  FloatingShapes,
  GlowEffect,
  BackgroundEffects,
};