import React from 'react';
import { motion } from 'framer-motion';

/**
 * SVG SHAPES - NETOVATE OU (MODO OSCURO)
 * ========================================
 * Componentes de efectos visuales para modo oscuro estilo Scale.com
 * 
 * COMPONENTES DISPONIBLES:
 * - GlowOrb: Esferas con glow neón
 * - DottedPattern: Patrón de puntos de fondo
 * - GridPattern: Grid de líneas
 * - FloatingShapes: Formas geométricas flotantes
 * - GradientBeam: Rayo de gradiente
 * - PulsingCircle: Círculo con pulso
 */

// ============================================
// GLOW ORB - Esferas brillantes con blur
// ============================================
export const GlowOrb = ({ 
  size = 400, 
  color = 'purple',
  blur = 60,
  opacity = 0.3,
  animate = true,
  className = '' 
}) => {
  // Colores disponibles con gradientes neón
  const colors = {
    purple: 'from-purple-600 to-blue-600',
    blue: 'from-blue-600 to-cyan-500',
    cyan: 'from-cyan-400 to-blue-500',
    pink: 'from-pink-500 to-purple-600',
    orange: 'from-orange-500 to-red-500',
  };

  const orbStyles = {
    width: size,
    height: size,
    filter: `blur(${blur}px)`,
    opacity: opacity,
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${colors[color]} ${className}`}
      style={orbStyles}
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
// DOTTED PATTERN - Patrón de puntos
// ============================================
export const DottedPattern = ({ 
  color = 'purple',
  size = 1.5,
  spacing = 30,
  opacity = 0.2,
  className = '' 
}) => {
  const colorMap = {
    purple: 'rgba(139, 92, 246, ' + opacity + ')',
    blue: 'rgba(37, 99, 235, ' + opacity + ')',
    cyan: 'rgba(6, 182, 212, ' + opacity + ')',
    white: 'rgba(255, 255, 255, ' + opacity + ')',
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
// GRID PATTERN - Grid de líneas
// ============================================
export const GridPattern = ({ 
  color = 'white',
  opacity = 0.05,
  size = 50,
  className = '' 
}) => {
  const gridStyle = {
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, ${opacity}) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, ${opacity}) 1px, transparent 1px)
    `,
    backgroundSize: `${size}px ${size}px`,
  };

  return (
    <div 
      className={`absolute inset-0 ${className}`}
      style={gridStyle}
    />
  );
};

// ============================================
// FLOATING SHAPES - Formas flotantes animadas
// ============================================
// GRADIENT ORB - Esfera con gradiente suave
// ============================================
export const GradientOrb = ({
  size = 400,
  color = 'purple',
  className = '',
  style = {},
}) => {
  // Gradientes disponibles
  const gradients = {
    purple: 'bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400',
    blue: 'bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-400',
    cyan: 'bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400',
    pink: 'bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400',
    orange: 'bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400',
  };
  return (
    <div
      className={`absolute rounded-full opacity-40 blur-2xl ${gradients[color] || gradients.purple} ${className}`}
      style={{ width: size, height: size, ...style }}
    />
  );
};
// ============================================
export const FloatingShapes = ({ className = '' }) => {
  const shapes = [
    { 
      type: 'circle', 
      x: '10%', 
      y: '20%', 
      size: 80, 
      delay: 0,
      color: 'from-purple-500/20 to-blue-500/20'
    },
    { 
      type: 'square', 
      x: '85%', 
      y: '15%', 
      size: 60, 
      delay: 0.5,
      color: 'from-cyan-400/20 to-blue-500/20'
    },
    { 
      type: 'triangle', 
      x: '70%', 
      y: '70%', 
      size: 70, 
      delay: 1,
      color: 'from-pink-500/20 to-purple-500/20'
    },
    { 
      type: 'circle', 
      x: '20%', 
      y: '80%', 
      size: 50, 
      delay: 1.5,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
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
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        >
          {shape.type === 'circle' && (
            <div 
              className={`w-full h-full rounded-full bg-gradient-to-br ${shape.color} backdrop-blur-sm`} 
            />
          )}
          {shape.type === 'square' && (
            <div 
              className={`w-full h-full rounded-lg bg-gradient-to-br ${shape.color} backdrop-blur-sm rotate-45`} 
            />
          )}
          {shape.type === 'triangle' && (
            <div 
              className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-l-transparent border-r-transparent"
              style={{
                borderBottomColor: 'rgba(6, 182, 212, 0.2)',
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// ============================================
// GRADIENT BEAM - Rayo de luz con gradiente
// ============================================
export const GradientBeam = ({ 
  position = 'top',
  width = '100%',
  height = '200px',
  className = '' 
}) => {
  const positions = {
    top: 'top-0 left-0',
    bottom: 'bottom-0 left-0',
    left: 'left-0 top-0',
    right: 'right-0 top-0',
  };

  const gradients = {
    top: 'bg-gradient-to-b from-purple-600/20 via-transparent to-transparent',
    bottom: 'bg-gradient-to-t from-purple-600/20 via-transparent to-transparent',
    left: 'bg-gradient-to-r from-purple-600/20 via-transparent to-transparent',
    right: 'bg-gradient-to-l from-purple-600/20 via-transparent to-transparent',
  };

  return (
    <div 
      className={`absolute ${positions[position]} ${gradients[position]} pointer-events-none ${className}`}
      style={{ width, height }}
    />
  );
};

// ============================================
// PULSING CIRCLE - Círculo con efecto pulso
// ============================================
export const PulsingCircle = ({ 
  size = 400,
  color = 'purple',
  className = '' 
}) => {
  const colors = {
    purple: 'bg-purple-600',
    blue: 'bg-blue-600',
    cyan: 'bg-cyan-400',
    pink: 'bg-pink-500',
  };

  return (
    <div className={`absolute ${className}`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute inset-0 rounded-full ${colors[color]}`}
          style={{
            width: size,
            height: size,
          }}
          animate={{
            scale: [1, 2, 2],
            opacity: [0.6, 0, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

// ============================================
// SPOTLIGHT - Efecto de foco de luz
// ============================================
export const Spotlight = ({ 
  color = 'purple',
  size = 600,
  intensity = 0.3,
  className = '' 
}) => {
  const colors = {
    purple: `radial-gradient(circle at center, rgba(139, 92, 246, ${intensity}) 0%, transparent 70%)`,
    blue: `radial-gradient(circle at center, rgba(37, 99, 235, ${intensity}) 0%, transparent 70%)`,
    cyan: `radial-gradient(circle at center, rgba(6, 182, 212, ${intensity}) 0%, transparent 70%)`,
  };

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: colors[color],
        filter: 'blur(40px)',
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [intensity, intensity * 1.3, intensity],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

// ============================================
// ANIMATED GRADIENT BACKGROUND - Fondo animado
// ============================================
export const AnimatedGradientBg = ({ className = '' }) => {
  return (
    <motion.div
      className={`absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 ${className}`}
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
  );
};

// ============================================
// EJEMPLO DE USO COMPLETO
// ============================================
export const BackgroundEffectsDemo = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Múltiples orbs para crear profundidad */}
      <GlowOrb 
        size={700} 
        color="purple" 
        className="top-0 right-0 -translate-y-1/2 translate-x-1/4" 
      />
      <GlowOrb 
        size={600} 
        color="cyan" 
        className="bottom-0 left-0 translate-y-1/2 -translate-x-1/4" 
      />
      <GlowOrb 
        size={500} 
        color="pink" 
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
      />
      
      {/* Pattern de fondo */}
      <DottedPattern color="purple" opacity={0.15} />
      
      {/* Formas flotantes */}
      <FloatingShapes />
      
      {/* Spotlight */}
      <Spotlight 
        color="purple" 
        size={800} 
        intensity={0.2}
        className="top-1/4 left-1/4"
      />
      
      {/* Tu contenido aquí */}
      <div className="relative z-10">
        <h1 className="text-white text-center pt-20">
          Tu contenido va aquí
        </h1>
      </div>
    </div>
  );
};

// ============================================
// EXPORTS
// ============================================
export default {
  GlowOrb,
  DottedPattern,
  GridPattern,
  FloatingShapes,
  GradientOrb,
  GradientBeam,
  PulsingCircle,
  Spotlight,
  AnimatedGradientBg,
  BackgroundEffectsDemo,
};