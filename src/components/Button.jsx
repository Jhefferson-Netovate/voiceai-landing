import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

/**
 * COMPONENTE BUTTON - NETOVATE OU
 * =================================
 * Botón reutilizable con variantes de estilo
 * 
 * VARIANTES:
 * - primary: Azul corporativo (acciones principales)
 * - secondary: Cian tecnológico (acciones secundarias)
 * - accent: Naranja energético (CTAs destacados)
 * - outline: Borde sin relleno (acciones terciarias)
 * - ghost: Sin borde ni fondo (acciones sutiles)
 * 
 * TAMAÑOS:
 * - sm: Pequeño
 * - md: Mediano (default)
 * - lg: Grande
 * - xl: Extra grande
 */

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon = null,
  rightIcon = null,
  onClick = () => {},
  type = 'button',
  className = '',
  ...props
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Clases base del botón
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Variantes de estilo
  const variants = {
    primary: 'bg-[#0F52BA] text-white hover:bg-[#0A3B8A] focus:ring-[#0F52BA] shadow-md hover:shadow-lg',
    secondary: 'bg-[#00D9FF] text-[#1A1F36] hover:bg-[#00A8CC] focus:ring-[#00D9FF] shadow-md hover:shadow-lg',
    accent: 'bg-[#FF6B35] text-white hover:bg-[#E55420] focus:ring-[#FF6B35] shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-[#0F52BA] text-[#0F52BA] hover:bg-[#0F52BA] hover:text-white focus:ring-[#0F52BA]',
    ghost: 'bg-transparent text-[#0F52BA] hover:bg-[#F7F9FC] focus:ring-[#0F52BA]'
  };

  // Tamaños
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-lg',
    xl: 'px-8 py-4 text-xl rounded-xl'
  };

  // Combinar clases
  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  // Props de animación condicionales
  const animationProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 }
      };

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...animationProps}
      {...props}
    >
      {/* Icono izquierdo */}
      {leftIcon && !loading && (
        <span className="mr-2 flex-shrink-0">
          {leftIcon}
        </span>
      )}

      {/* Loader si está cargando */}
      {loading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {/* Contenido del botón */}
      <span>{children}</span>

      {/* Icono derecho */}
      {rightIcon && !loading && (
        <span className="ml-2 flex-shrink-0">
          {rightIcon}
        </span>
      )}
    </motion.button>
  );
}