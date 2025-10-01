/**
 * ANIMATED BACKGROUND - NETOVATE OU
 * ==================================
 * Fondo animado con formas SVG y CSS (inspirado en Scale.com)
 * 
 * Uso:
 * <AnimatedBackground variant="gradient" />
 * <AnimatedBackground variant="dots" />
 */

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Variante 1: Gradiente animado con formas abstractas
 */
export function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradiente base */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50" />
      
      {/* Círculos animados */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full 
                   bg-gradient-to-br from-purple-400/20 to-blue-400/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full 
                   bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full 
                   bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

/**
 * Variante 2: Grid de puntos con efecto de profundidad
 */
export function DotsBackground() {
  const dots = Array.from({ length: 100 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="#8B5CF6" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}

/**
 * Variante 3: Líneas onduladas animadas (SVG)
 */
export function WavesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute bottom-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
      >
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Ola 1 */}
        <motion.path
          d="M0,300 Q360,200 720,300 T1440,300 L1440,800 L0,800 Z"
          fill="url(#wave-gradient-1)"
          initial={{ d: "M0,300 Q360,200 720,300 T1440,300 L1440,800 L0,800 Z" }}
          animate={{ 
            d: [
              "M0,300 Q360,200 720,300 T1440,300 L1440,800 L0,800 Z",
              "M0,250 Q360,350 720,250 T1440,250 L1440,800 L0,800 Z",
              "M0,300 Q360,200 720,300 T1440,300 L1440,800 L0,800 Z",
            ]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* Ola 2 */}
        <motion.path
          d="M0,400 Q360,350 720,400 T1440,400 L1440,800 L0,800 Z"
          fill="url(#wave-gradient-2)"
          initial={{ d: "M0,400 Q360,350 720,400 T1440,400 L1440,800 L0,800 Z" }}
          animate={{ 
            d: [
              "M0,400 Q360,350 720,400 T1440,400 L1440,800 L0,800 Z",
              "M0,450 Q360,300 720,450 T1440,450 L1440,800 L0,800 Z",
              "M0,400 Q360,350 720,400 T1440,400 L1440,800 L0,800 Z",
            ]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>
    </div>
  );
}

/**
 * Variante 4: Partículas flotantes
 */
export function ParticlesBackground({ count = 30 }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-400/30 to-blue-400/30 blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Componente principal que permite elegir la variante
 */
export default function AnimatedBackground({ variant = 'gradient' }) {
  const backgrounds = {
    gradient: <GradientBackground />,
    dots: <DotsBackground />,
    waves: <WavesBackground />,
    particles: <ParticlesBackground />,
  };

  return backgrounds[variant] || backgrounds.gradient;
}