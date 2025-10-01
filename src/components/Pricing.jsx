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
    <section id="precios" className="section-padding bg-gray-50">
      <div className="container-scale">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? {} : { duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Planes que se adaptan a{' '}
            <span className="text-gradient">tu negocio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Sin costes ocultos. Cancela cuando quieras. 14 días de prueba gratuita en todos los planes.
          </p>
          
          {/* Toggle anual/mensual */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm border border-gray-200">
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-scale-purple to-scale-blue text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Mensual
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                billingPeriod === 'annual'
                  ? 'bg-gradient-to-r from-scale-purple to-scale-blue text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setBillingPeriod('annual')}
            >
              Anual
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
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
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-scale-purple scale-105' : ''
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
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-scale-purple to-scale-blue text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <StarIcon className="w-4 h-4 mr-1" />
                    Más Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                {/* Header del plan */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
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
                            <span className="text-4xl font-bold text-gray-900">
                              €{billingPeriod === 'monthly' ? plan.priceMonthly : plan.priceAnnual}
                            </span>
                            <span className="text-gray-600 ml-1">/mes</span>
                            {billingPeriod === 'annual' && (
                              <div className="text-sm text-green-600 font-medium mt-1">
                                Ahorras €{(plan.priceMonthly - plan.priceAnnual) * 12}/año
                              </div>
                            )}
                          </>
                        ) : (
                          <span className="text-4xl font-bold text-gray-900">
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
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
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
          className="text-center mt-16 text-gray-600"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          transition={prefersReducedMotion ? {} : { duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg">
            ¿Necesitas un plan personalizado?{' '}
            <a href="#contacto" className="text-scale-purple hover:text-scale-blue font-semibold link-hover">
              Hablamos
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}