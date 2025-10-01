import { useState, useEffect } from 'react';

/**
 * Hook personalizado para respetar las preferencias de accesibilidad del usuario
 * Si el usuario tiene activado "Reducir movimiento" en su sistema operativo,
 * este hook devuelve true para desactivar animaciones
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    // Verificar si el navegador soporta matchMedia
    if (typeof window !== 'undefined' && window.matchMedia) {
      // Crear media query para detectar preferencia de movimiento reducido
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      // Establecer estado inicial
      setPrefersReducedMotion(mediaQuery.matches);
      
      // Función para manejar cambios en la preferencia
      const handleChange = (event) => {
        setPrefersReducedMotion(event.matches);
      };
      
      // Escuchar cambios en la preferencia
      mediaQuery.addListener(handleChange);
      
      // Limpiar listener al desmontar componente
      return () => {
        mediaQuery.removeListener(handleChange);
      };
    }
  }, []);
  
  return prefersReducedMotion;
}