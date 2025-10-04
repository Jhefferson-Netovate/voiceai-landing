/**
 * NETOVATE OU - Hook de Animación Optimizado
 * ============================================
 * 
 * Este hook previene el flickering en móviles optimizando
 * las animaciones de Framer Motion.
 * 
 * USO:
 * import { useOptimizedAnimation } from './hooks/useOptimizedAnimation';
 * 
 * const animationProps = useOptimizedAnimation();
 * <motion.div {...animationProps}>Content</motion.div>
 */

import { useState, useEffect, useMemo } from 'react';

/**
 * Detecta si el usuario prefiere animaciones reducidas
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Detecta si el dispositivo es móvil
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

/**
 * Detecta la conexión de red (para reducir animaciones en conexiones lentas)
 */
export function useSlowConnection() {
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      
      const checkConnection = () => {
        if (connection) {
          // Considerar lento si effective type es 2g o slow-2g
          setIsSlowConnection(
            connection.effectiveType === '2g' || 
            connection.effectiveType === 'slow-2g' ||
            connection.saveData === true
          );
        }
      };

      checkConnection();
      connection.addEventListener('change', checkConnection);
      return () => connection.removeEventListener('change', checkConnection);
    }
  }, []);

  return isSlowConnection;
}

/**
 * Hook principal: Proporciona props optimizadas para motion.div
 * 
 * @param {object} options - Opciones de configuración
 * @param {number} options.delay - Delay de la animación (default: 0)
 * @param {string} options.type - Tipo de animación: 'fade', 'slide', 'scale' (default: 'fade')
 * @param {boolean} options.disableOnMobile - Desactivar en móvil (default: true)
 * @returns {object} Props para motion.div
 */
export function useOptimizedAnimation(options = {}) {
  const {
    delay = 0,
    type = 'fade',
    disableOnMobile = true,
    disabled = false
  } = options;

  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const isSlowConnection = useSlowConnection();

  const animationProps = useMemo(() => {
    // Si está explícitamente deshabilitado
    if (disabled) {
      return { initial: {}, animate: {}, transition: {} };
    }

    // Si el usuario prefiere movimiento reducido
    if (prefersReducedMotion) {
      return { initial: {}, animate: {}, transition: {} };
    }

    // Si es móvil y las animaciones están deshabilitadas en móvil
    if (isMobile && disableOnMobile) {
      return { initial: {}, animate: {}, transition: {} };
    }

    // Si la conexión es lenta
    if (isSlowConnection) {
      return { initial: {}, animate: {}, transition: {} };
    }

    // Configurar animación según el tipo
    let initial = {};
    let animate = {};
    let transition = {
      duration: isMobile ? 0.3 : 0.6, // Más rápido en móvil
      delay: delay,
      ease: 'easeOut'
    };

    switch (type) {
      case 'fade':
        initial = { opacity: 0 };
        animate = { opacity: 1 };
        break;

      case 'slide':
        initial = { opacity: 0, y: 20 };
        animate = { opacity: 1, y: 0 };
        break;

      case 'slideUp':
        initial = { opacity: 0, y: 30 };
        animate = { opacity: 1, y: 0 };
        break;

      case 'slideDown':
        initial = { opacity: 0, y: -30 };
        animate = { opacity: 1, y: 0 };
        break;

      case 'slideLeft':
        initial = { opacity: 0, x: 30 };
        animate = { opacity: 1, x: 0 };
        break;

      case 'slideRight':
        initial = { opacity: 0, x: -30 };
        animate = { opacity: 1, x: 0 };
        break;

      case 'scale':
        initial = { opacity: 0, scale: 0.9 };
        animate = { opacity: 1, scale: 1 };
        break;

      case 'scaleUp':
        initial = { opacity: 0, scale: 0.8 };
        animate = { opacity: 1, scale: 1 };
        break;

      default:
        initial = { opacity: 0 };
        animate = { opacity: 1 };
    }

    return {
      initial,
      animate,
      transition,
      // Viewport config optimizado
      viewport: { 
        once: true, // Solo animar una vez
        margin: isMobile ? '-50px' : '-100px', // Trigger antes en desktop
        amount: isMobile ? 0.1 : 0.2 // Menos threshold en móvil
      }
    };
  }, [delay, type, disableOnMobile, disabled, prefersReducedMotion, isMobile, isSlowConnection]);

  return animationProps;
}

/**
 * Hook para animaciones on scroll (whileInView)
 * Optimizado para prevenir flickering
 * 
 * @param {object} options - Opciones
 * @returns {object} Props para motion.div con whileInView
 */
export function useScrollAnimation(options = {}) {
  const {
    delay = 0,
    type = 'fade',
    disableOnMobile = true
  } = options;

  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const isSlowConnection = useSlowConnection();

  const animationProps = useMemo(() => {
    // Desactivar si se cumplen las condiciones
    if (prefersReducedMotion || isSlowConnection || (isMobile && disableOnMobile)) {
      return {
        initial: {},
        whileInView: {},
        transition: {}
      };
    }

    let initial = {};
    let whileInView = {};
    let transition = {
      duration: isMobile ? 0.3 : 0.6,
      delay: delay,
      ease: [0.25, 0.1, 0.25, 1] // ease-out optimizado
    };

    switch (type) {
      case 'fade':
        initial = { opacity: 0 };
        whileInView = { opacity: 1 };
        break;

      case 'slide':
        initial = { opacity: 0, y: isMobile ? 15 : 20 };
        whileInView = { opacity: 1, y: 0 };
        break;

      case 'slideUp':
        initial = { opacity: 0, y: isMobile ? 20 : 30 };
        whileInView = { opacity: 1, y: 0 };
        break;

      case 'scale':
        initial = { opacity: 0, scale: 0.95 };
        whileInView = { opacity: 1, scale: 1 };
        break;

      default:
        initial = { opacity: 0 };
        whileInView = { opacity: 1 };
    }

    return {
      initial,
      whileInView,
      transition,
      viewport: {
        once: true,
        margin: isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px',
        amount: 0.15 // Trigger cuando 15% es visible
      }
    };
  }, [delay, type, disableOnMobile, prefersReducedMotion, isMobile, isSlowConnection]);

  return animationProps;
}

/**
 * Hook para hover animations optimizado
 * No funciona en touch devices para evitar comportamiento extraño
 */
export function useHoverAnimation(scale = 1.05) {
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  return useMemo(() => {
    if (prefersReducedMotion || isMobile) {
      return {};
    }

    return {
      whileHover: { scale },
      whileTap: { scale: 0.98 },
      transition: { duration: 0.2 }
    };
  }, [scale, isMobile, prefersReducedMotion]);
}

/**
 * EJEMPLOS DE USO
 * ================
 * 
 * 1. Animación básica optimizada:
 * 
 * import { useOptimizedAnimation } from './hooks/useOptimizedAnimation';
 * 
 * function MyComponent() {
 *   const animation = useOptimizedAnimation({ type: 'slide' });
 *   
 *   return (
 *     <motion.div {...animation}>
 *       Contenido
 *     </motion.div>
 *   );
 * }
 * 
 * 2. Animación on scroll:
 * 
 * function MyComponent() {
 *   const scrollAnim = useScrollAnimation({ type: 'fade', delay: 0.2 });
 *   
 *   return (
 *     <motion.div {...scrollAnim}>
 *       Contenido
 *     </motion.div>
 *   );
 * }
 * 
 * 3. Hover optimizado:
 * 
 * function MyButton() {
 *   const hover = useHoverAnimation(1.1);
 *   
 *   return (
 *     <motion.button {...hover}>
 *       Click me
 *     </motion.button>
 *   );
 * }
 * 
 * 4. Deshabilitar animaciones condicionalmente:
 * 
 * function MyComponent() {
 *   const animation = useOptimizedAnimation({ 
 *     type: 'slide',
 *     disableOnMobile: true  // No animar en móvil
 *   });
 *   
 *   return <motion.div {...animation}>Contenido</motion.div>;
 * }
 */

export default {
  useOptimizedAnimation,
  useScrollAnimation,
  useHoverAnimation,
  usePrefersReducedMotion,
  useIsMobile,
  useSlowConnection
};