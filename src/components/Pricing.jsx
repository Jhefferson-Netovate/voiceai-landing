import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, StarIcon } from '@heroicons/react/24/solid';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const plans = [
  {
    name: 'Starter',
    description: 'Perfecto para pequeñas empresas',
    priceMonthly: 199,
    priceAnnual: 159,
    features: [
      'Hasta 1,000 llamadas/mes',
      'IA Conversacional básica',
      '2 números telefónicos',
      'Integración CRM',
      'Soporte por email',
      'Analytics básicos'
    ],
    popular: false,
    cta: 'Comenzar Prueba',
  },
  {
    name: 'Professional',
    description: 'Para empresas en crecimiento',
    priceMonthly: 499,
    priceAnnual: 399,
    features: [
      'Hasta 5,000 llamadas/mes',
      'IA Conversacional avanzada',
      '10 números telefónicos',
      'Integración CRM Premium',
      'Soporte prioritario 24/7',
      'Analytics avanzados',
      'A/B testing',
      'Webhooks y API'
    ],
    popular: true,
    cta: 'Comenzar Prueba',
  },
  {
    name: 'Enterprise',
    description: 'Para grandes organizaciones',
    priceMonthly: 'Personalizado',
    priceAnnual: 'Personalizado',
    features: [
      'Llamadas ilimitadas',
      'IA Conversacional personalizada',
      'Números ilimitados',
      'Integraciones personalizadas',
      'Account Manager dedicado',
      'SLA garantizado 99.9%',
      'Onboarding personalizado',
      'Compliance y seguridad avanzada'
    ],
    popular: false,
    cta: 'Contactar Ventas',
  }
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const prefersReducedMotion = usePrefersReducedMotion();
  
  return (
    <section id="precios" className="section-padding bg-black relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
      <div className="absolute inset-0 opacity-5 dot-pattern" />
      
      <div className="container-scale relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? {} : { duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Planes que se adaptan a{' '}
            <span className="text-gradient">tu negocio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Sin costes ocultos. Cancela cuando quieras. 14 días de prueba gratuita en todos los planes.
          </p>
          
          {/* Toggle anual/mensual */}
          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/10">
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Mensual
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                billingPeriod === 'annual'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('annual')}
            >
              Anual
              <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white/5 backdrop-blur-xl rounded-2xl border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500/50 ring-2 ring-purple-500/20 shadow-2xl shadow-purple-500/20' 
                  : 'border-white/10 hover:border-white/20'
              }`}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? {} : { 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: 'easeOut' 
              }}
              whileHover={prefersReducedMotion ? {} : { 
                y: -5,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
            >
              {/* Badge "Popular" */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold rounded-full flex items-center gap-1 shadow-lg">
                  <StarIcon className="w-4 h-4" />
                  Más Popular
                </div>
              )}
              
              <div className="p-8">
                {/* Header del plan */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  {/* Precio */}
                  <div className="mb-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={billingPeriod}
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                        animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {typeof plan.priceMonthly === 'number' ? (
                          <>
                            <span className="text-4xl font-bold text-white">
                              €{billingPeriod === 'monthly' ? plan.priceMonthly : plan.priceAnnual}
                            </span>
                            <span className="text-gray-400 ml-1">/mes</span>
                            {billingPeriod === 'annual' && (
                              <div className="text-sm text-green-400 font-medium mt-1">
                                Ahorras €{(plan.priceMonthly - plan.priceAnnual) * 12}/año
                              </div>
                            )}
                          </>
                        ) : (
                          <span className="text-4xl font-bold text-white">
                            {plan.priceMonthly}
                          </span>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start"
                      initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                      whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                      transition={prefersReducedMotion ? {} : { 
                        duration: 0.3, 
                        delay: (index * 0.1) + (featureIndex * 0.05) 
                      }}
                      viewport={{ once: true }}
                    >
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer message */}
        <motion.div
          className="text-center mt-16 text-gray-400"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          transition={prefersReducedMotion ? {} : { duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg">
            ¿Necesitas un plan personalizado?{' '}
            <a href="#contacto" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
              Hablamos
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}