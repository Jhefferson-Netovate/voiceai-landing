/**
 * CARD COMPONENTS - NETOVATE OU
 * ==============================
 * Componentes de tarjetas reutilizables con múltiples variantes
 * Usa el sistema de diseño y animaciones de Framer Motion
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

/**
 * BASIC CARD
 * ==========
 * Tarjeta básica con padding y sombra
 * 
 * Uso:
 * <Card>Contenido aquí</Card>
 * <Card variant="glass">Efecto glassmorphism</Card>
 */
export function Card({ 
  children, 
  className = '', 
  variant = 'default',
  hoverable = true,
  ...props 
}) {
  const variants = {
    default: 'bg-white border border-gray-200',
    glass: 'bg-white/70 backdrop-blur-md border border-white/20',
    gradient: 'bg-gradient-to-br from-purple-50 to-blue-50 border-0',
    dark: 'bg-gray-900 text-white border border-gray-800',
  };

  return (
    <motion.div
      className={`
        ${variants[variant]}
        rounded-2xl shadow-lg p-6
        ${hoverable ? 'hover:shadow-xl transition-shadow' : ''}
        ${className}
      `}
      whileHover={hoverable ? { y: -5 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * FEATURE CARD
 * ============
 * Tarjeta para mostrar características con icono
 * 
 * Uso:
 * <FeatureCard 
 *   icon={<Icon />} 
 *   title="Título" 
 *   description="Descripción"
 * />
 */
export function FeatureCard({ 
  icon, 
  title, 
  description, 
  className = '',
  iconGradient = 'from-purple-500 to-blue-500',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`
        bg-white rounded-2xl p-6 shadow-lg border border-gray-100
        hover:shadow-2xl transition-all duration-300 cursor-pointer
        ${className}
      `}
    >
      {/* Icono con gradiente */}
      <div className={`
        w-14 h-14 rounded-xl mb-4 flex items-center justify-center
        bg-gradient-to-br ${iconGradient} shadow-lg
      `}>
        <div className="text-white w-7 h-7">
          {icon}
        </div>
      </div>

      {/* Contenido */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

/**
 * PRICING CARD
 * ============
 * Tarjeta especial para planes de precios
 * 
 * Uso:
 * <PricingCard 
 *   name="Pro"
 *   price={99}
 *   features={['Feature 1', 'Feature 2']}
 *   popular={true}
 * />
 */
export function PricingCard({ 
  name, 
  price, 
  period = '/mes',
  description,
  features = [], 
  popular = false,
  buttonText = 'Comenzar',
  onButtonClick,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`
        relative bg-white rounded-3xl p-8 shadow-xl border
        ${popular 
          ? 'border-purple-500 ring-2 ring-purple-500 shadow-2xl' 
          : 'border-gray-200'
        }
        transition-all duration-300
        ${className}
      `}
    >
      {/* Badge de Popular */}
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white 
                        px-4 py-1 rounded-full text-sm font-medium">
            ⭐ Más Popular
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        {description && (
          <p className="text-gray-600 text-sm">{description}</p>
        )}
      </div>

      {/* Precio */}
      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold text-gray-900">€{price}</span>
          <span className="text-gray-600 ml-2">{period}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg 
              className="w-6 h-6 text-green-500 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <motion.button
        onClick={onButtonClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          w-full py-4 rounded-xl font-semibold transition-all
          ${popular
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }
        `}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
}

/**
 * STAT CARD
 * =========
 * Tarjeta para mostrar estadísticas/métricas
 * 
 * Uso:
 * <StatCard 
 *   value="10K+"
 *   label="Usuarios Activos"
 *   icon={<Icon />}
 *   trend="+12%"
 * />
 */
export function StatCard({ 
  value, 
  label, 
  icon, 
  trend,
  trendUp = true,
  className = '' 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`
        bg-white rounded-2xl p-6 shadow-lg border border-gray-100
        ${className}
      `}
    >
      <div className="flex items-start justify-between mb-4">
        {icon && (
          <div className="p-3 bg-purple-100 rounded-xl">
            <div className="w-6 h-6 text-purple-600">
              {icon}
            </div>
          </div>
        )}
        
        {trend && (
          <span className={`
            text-sm font-semibold px-2 py-1 rounded-full
            ${trendUp 
              ? 'bg-green-100 text-green-600' 
              : 'bg-red-100 text-red-600'
            }
          `}>
            {trend}
          </span>
        )}
      </div>

      <div className="text-3xl font-bold text-gray-900 mb-1">
        {value}
      </div>
      <div className="text-gray-600 text-sm">
        {label}
      </div>
    </motion.div>
  );
}

/**
 * CTA CARD
 * ========
 * Tarjeta llamativa para llamadas a la acción
 * 
 * Uso:
 * <CTACard 
 *   title="¿Listo para empezar?"
 *   description="Únete hoy"
 *   buttonText="Comenzar"
 * />
 */
export function CTACard({ 
  title, 
  description, 
  buttonText = 'Comenzar',
  onButtonClick,
  backgroundGradient = 'from-purple-600 via-blue-600 to-cyan-600',
  className = '' 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
        relative overflow-hidden rounded-3xl p-8 md:p-12
        bg-gradient-to-r ${backgroundGradient}
        shadow-2xl
        ${className}
      `}
    >
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }} 
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          {description}
        </p>
        
        <motion.button
          onClick={onButtonClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold
                   shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
        >
          {buttonText}
          <ArrowRightIcon className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}

/**
 * TESTIMONIAL CARD
 * ================
 * Tarjeta para testimonios de clientes
 */
export function TestimonialCard({ 
  quote, 
  author, 
  role, 
  company,
  avatar,
  rating = 5,
  className = '' 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
        bg-white rounded-2xl p-8 shadow-lg border border-gray-100
        ${className}
      `}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg 
            key={i} 
            className="w-5 h-5 text-yellow-400" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 text-lg mb-6 italic">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {avatar && (
          <img 
            src={avatar} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <div className="font-bold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">
            {role} {company && `• ${company}`}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Exportar todos los componentes
export default {
  Card,
  FeatureCard,
  PricingCard,
  StatCard,
  CTACard,
  TestimonialCard,
};