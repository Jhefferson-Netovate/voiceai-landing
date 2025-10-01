import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { PlayIcon, ChevronRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import FloatingOrbs from './visual/FloatingOrbs';
import { GradientOrb, FloatingShapes, DottedPattern } from './SVGShapes';



export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Motion values para parallax suave
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Springs para movimientos suaves
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Transformaciones para elementos flotantes
  const orbX = useTransform(springX, [0, 1], [-50, 50]);
  const orbY = useTransform(springY, [0, 1], [-30, 30]);
  
  const particleX = useTransform(springX, [0, 1], [20, -20]);
  const particleY = useTransform(springY, [0, 1], [10, -10]);

  // Control de mouse
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  // Animaciones condicionales
  const fadeInUp = prefersReducedMotion ? {} : {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const staggerChildren = prefersReducedMotion ? {} : {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <FloatingOrbs />
      <GradientOrb size={500} color="purple" className="top-0 right-0 absolute" />
      <GradientOrb size={400} color="cyan" className="bottom-0 left-0 absolute" />
      <DottedPattern />
      <FloatingShapes />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl animate-float" />
  <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-float" 
       style={{animationDelay: '2s', animationDuration: '12s'}} />
  <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-float"
       style={{animationDelay: '4s', animationDuration: '10s'}} />
</div>
      {/* Background animado estilo Scale.com */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient base animado */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x * 0.1}px ${mousePosition.y * 0.1}px, 
                rgba(139, 92, 246, 0.3) 0%, 
                transparent 70%),
              radial-gradient(circle at ${100 - mousePosition.x * 0.08}% ${100 - mousePosition.y * 0.08}%, 
                rgba(59, 130, 246, 0.2) 0%, 
                transparent 70%),
              linear-gradient(135deg, 
                rgba(15, 23, 42, 0.9) 0%, 
                rgba(88, 28, 135, 0.8) 50%, 
                rgba(15, 23, 42, 0.9) 100%)
            `
          }}
          animate={prefersReducedMotion ? {} : {
            background: [
              `linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(88, 28, 135, 0.8) 50%, rgba(15, 23, 42, 0.9) 100%)`,
              `linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(59, 130, 246, 0.8) 50%, rgba(15, 23, 42, 0.9) 100%)`,
              `linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(139, 92, 246, 0.8) 50%, rgba(15, 23, 42, 0.9) 100%)`
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Orbes flotantes grandes */}
        {!prefersReducedMotion && (
          <>
            {/* Orbe principal */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
                x: orbX,
                y: orbY
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Orbe secundario */}
            <motion.div
              className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
                x: useTransform(orbX, x => -x * 0.7),
                y: useTransform(orbY, y => -y * 0.5)
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />

            {/* Partículas flotantes */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full blur-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  x: particleX,
                  y: particleY
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Mesh gradient animado */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: `
                  conic-gradient(from ${mousePosition.x * 0.1}deg at 50% 50%, 
                    rgba(139, 92, 246, 0.1) 0deg,
                    rgba(59, 130, 246, 0.1) 120deg,
                    rgba(168, 85, 247, 0.1) 240deg,
                    rgba(139, 92, 246, 0.1) 360deg)
                `
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}
      </div>

      {/* Contenido principal */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        {...staggerChildren}
      >
        {/* Badge superior */}
        <motion.div 
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white/90 mb-8"
          {...fadeInUp}
        >
          <SparklesIcon className="w-4 h-4 mr-2 text-purple-300" />
          Nuevo: IA Conversacional de última generación
        </motion.div>

        {/* Headline principal */}
        <motion.div className="mb-6" {...fadeInUp}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Automatiza tus{' '}
            <span className="relative">
              llamadas telefónicas
              {/* Underline decorativo */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              />
            </span>
            {' '}con IA
          </h1>
        </motion.div>

        {/* Subtítulo */}
        <motion.p 
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          {...fadeInUp}
        >
          Netovate OÜ utiliza inteligencia artificial conversacional avanzada para realizar y recibir llamadas automáticamente,
          aumentando tus ventas un 300% y mejorando la atención al cliente 24/7.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          {...fadeInUp}
        >
          <motion.button
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl backdrop-blur-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Prueba Gratis 14 Días
          </motion.button>
          
          <motion.button
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PlayIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Ver Demo
          </motion.button>
        </motion.div>

        {/* Estadísticas sociales */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          {...staggerChildren}
        >
          <motion.div className="text-center" {...fadeInUp}>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">25,000+</div>
            <div className="text-white/60 text-sm">Llamadas Automatizadas</div>
          </motion.div>
          <motion.div className="text-center" {...fadeInUp}>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.2%</div>
            <div className="text-white/60 text-sm">Precisión IA</div>
          </motion.div>
          <motion.div className="text-center" {...fadeInUp}>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">45%</div>
            <div className="text-white/60 text-sm">Ahorro en Costes</div>
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
    </div>
  );
}