import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

/**
 * CARD COMPONENT - NETOVATE OU
 * ==============================
 * Componente de tarjeta reutilizable con múltiples variantes
 * Inspirado en el sistema de diseño de Scale.com
 * 
 * @param {string} variant - 'default' | 'hover' | 'glass' | 'gradient' | 'bordered'
 * @param {string} padding - 'none' | 'sm' | 'md' | 'lg' | 'xl'
 * @param {boolean} shadow - Si debe tener sombra
 * @param {boolean} animated - Si debe tener animaciones de entrada
 * @param {number} delay - Delay para la animación (segundos)
 * @param {React.ReactNode} children - Contenido de la tarjeta
 * @param {string} className - Clases CSS adicionales
 * @param {function} onClick - Función al hacer click
 */

const Card = ({
  variant = 'default',
  padding = 'md',
  shadow = true,
  animated = false,
  delay = 0,
  children,
  className = '',
  onClick,
  ...props
}) => {
  const { prefersReducedMotion } = useTheme();

  // Clases base
  const baseClasses = 'rounded-xl transition-all duration-200';

  // Variantes de estilo
  const variantClasses = {
    default: 'bg-white border border-gray-100',
    hover: 'bg-white border border-gray-100 hover:shadow-medium hover:scale-105 cursor-pointer',
    glass: 'bg-white/80 backdrop-blur-lg border border-white/20',
    gradient: 'bg-gradient-to-br from-white to-gray-50 border border-gray-100',
    bordered: 'bg-white border-2 border-brand-blue',
  };

  // Tamaños de padding
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  // Sombras
  const shadowClasses = shadow ? 'shadow-soft' : '';

  // Combinar todas las clases
  const cardClasses = `
    ${baseClasses}
    ${variantClasses[variant] || variantClasses.default}
    ${paddingClasses[padding] || paddingClasses.md}
    ${shadowClasses}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Configuración de animación
  const animationConfig = animated && !prefersReducedMotion ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true }
  } : {};

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      {...animationConfig}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// SUB-COMPONENTES ESPECIALIZADOS
// ============================================

// Card Header
export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

// Card Title
export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-bold text-gray-900 ${className}`}>
    {children}
  </h3>
);

// Card Description
export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-gray-600 leading-relaxed ${className}`}>
    {children}
  </p>
);

// Card Footer
export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-6 pt-6 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);

// ============================================
// CARDS ESPECIALIZADAS
// ============================================

// Feature Card (para características del producto)
export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient = 'from-purple-500 to-blue-500',
  animated = true,
  delay = 0 
}) => {
  return (
    <Card variant="hover" animated={animated} delay={delay}>
      <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6`}>
        {Icon && <Icon className="w-7 h-7 text-white" />}
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="mt-3">{description}</CardDescription>
    </Card>
  );
};

// Pricing Card (para planes de precios)
export const PricingCard = ({
  name,
  price,
  period = 'mes',
  features = [],
  highlighted = false,
  buttonText = 'Comenzar',
  onButtonClick,
  animated = true,
  delay = 0
}) => {
  return (
    <Card 
      variant={highlighted ? 'bordered' : 'default'} 
      shadow={highlighted}
      animated={animated}
      delay={delay}
      className={highlighted ? 'ring-2 ring-brand-blue scale-105' : ''}
    >
      {highlighted && (
        <div className="inline-block px-3 py-1 bg-gradient-to-r from-brand-purple to-brand-blue text-white text-sm font-semibold rounded-full mb-4">
          Más Popular
        </div>
      )}
      
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">{price}€</span>
          <span className="text-gray-500 ml-2">/{period}</span>
        </div>
      </CardHeader>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onButtonClick}
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
          highlighted
            ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:shadow-lg'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {buttonText}
      </button>
    </Card>
  );
};

// Testimonial Card (para testimonios)
export const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
  animated = true,
  delay = 0
}) => {
  return (
    <Card variant="glass" animated={animated} delay={delay}>
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <CardDescription className="mb-6 italic">
        "{quote}"
      </CardDescription>

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
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role} • {company}</p>
        </div>
      </div>
    </Card>
  );
};

// Stats Card (para métricas/estadísticas)
export const StatsCard = ({
  value,
  label,
  icon: Icon,
  trend,
  trendValue,
  animated = true,
  delay = 0
}) => {
  return (
    <Card variant="gradient" animated={animated} delay={delay}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
          <p className="text-gray-600">{label}</p>
          
          {trend && (
            <div className={`flex items-center gap-1 mt-2 text-sm ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d={
                  trend === 'up' 
                    ? "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    : "M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                } clipRule="evenodd" />
              </svg>
              <span>{trendValue}</span>
            </div>
          )}
        </div>
        
        {Icon && (
          <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-blue rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
      </div>
    </Card>
  );
};

// ============================================
// EJEMPLO DE USO
// ============================================
/*
import Card, { 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter,
  FeatureCard,
  PricingCard,
  TestimonialCard,
  StatsCard
} from './components/Card';

// Card básica
<Card variant="default" padding="lg">
  <h3>Título</h3>
  <p>Contenido</p>
</Card>

// Card con sub-componentes
<Card variant="hover" animated delay={0.2}>
  <CardHeader>
    <CardTitle>Mi Tarjeta</CardTitle>
  </CardHeader>
  <CardDescription>
    Esta es una descripción
  </CardDescription>
  <CardFooter>
    <button>Acción</button>
  </CardFooter>
</Card>

// Feature Card
<FeatureCard
  icon={SparklesIcon}
  title="IA Avanzada"
  description="Tecnología de última generación"
  gradient="from-purple-500 to-blue-500"
  animated
  delay={0.1}
/>

// Pricing Card
<PricingCard
  name="Professional"
  price="499"
  features={[
    '10,000 llamadas/mes',
    'Soporte prioritario',
    'Analytics avanzado'
  ]}
  highlighted
  buttonText="Empezar Ahora"
  onButtonClick={() => alert('Click!')}
/>
*/

export default Card;