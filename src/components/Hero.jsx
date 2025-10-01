import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { PlayIcon, ChevronRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { GlowOrb, DottedPattern } from './SVGShapes';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import FloatingOrbs from './visual/FloatingOrbs';
import {   GridPattern, FloatingShapes, Spotlight } from './SVGShapes';



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
    <>
      <section className="relative bg-black overflow-hidden">
        <GlowOrb size={600} color="purple" className="top-0 right-0" />
        <GlowOrb size={500} color="cyan" className="bottom-0 left-0" />
        <div className="absolute inset-0 opacity-20 dot-pattern" />
        <div className="relative z-10">
          <h1 className="text-white">
            Título con <span className="text-gradient">Gradiente</span>
          </h1>
        </div>
      </section>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
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
{/* Background con GlowOrbs - Modo Oscuro */}
<div className="absolute inset-0 overflow-hidden">
  {/* GlowOrbs principales */}
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
  
  {/* Pattern de puntos de fondo */}
  <DottedPattern color="purple" opacity={0.15} />
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
          <button className="btn-primary">Click</button>
          
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
    </>
  );
}