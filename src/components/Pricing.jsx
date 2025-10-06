import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, StarIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useTranslation(); // ⬅️ AÑADIR

  // Planes - AHORA USAN TRADUCCIONES
  const plans = [
    {
      name: t('pricing.starterName'), // ⬅️ TRADUCCIÓN
      description: t('pricing.starterDesc'), // ⬅️ TRADUCCIÓN
      priceMonthly: 199,
      priceAnnual: 159,
      features: [
        t('pricing.starterFeature1'), // ⬅️ TRADUCCIÓN
        t('pricing.starterFeature2'), // ⬅️ TRADUCCIÓN
        t('pricing.starterFeature3'), // ⬅️ TRADUCCIÓN
        t('pricing.starterFeature4'), // ⬅️ TRADUCCIÓN
        t('pricing.starterFeature5'), // ⬅️ TRADUCCIÓN
        t('pricing.starterFeature6'), // ⬅️ TRADUCCIÓN
      ],
      popular: false,
      cta: t('pricing.starterCTA'), // ⬅️ TRADUCCIÓN
    },
    {
      name: t('pricing.proName'), // ⬅️ TRADUCCIÓN
      description: t('pricing.proDesc'), // ⬅️ TRADUCCIÓN
      priceMonthly: 499,
      priceAnnual: 399,
      features: [
        t('pricing.proFeature1'), // ⬅️ TRADUCCIÓN
        t('pricing.proFeature2'), // ⬅️ TRADUCCIÓN
        t('pricing.proFeature3'), // ⬅️ TRADUCCIÓN
        t('pricing.proFeature4'), // ⬅️ TRADUCCIÓN
        t('pricing.proFeature5'), // ⬅️ TRADUCCIÓN
        t('pricing.proFeature6'), // ⬅️ TRADUCCIÓN
        t('pricing.proFeature7'), // ⬅️ TRADUCCIÓN
        t('pricing.proFeature8'), // ⬅️ TRADUCCIÓN
      ],
      popular: true,
      cta: t('pricing.proCTA'), // ⬅️ TRADUCCIÓN
    },
    {
      name: t('pricing.enterpriseName'), // ⬅️ TRADUCCIÓN
      description: t('pricing.enterpriseDesc'), // ⬅️ TRADUCCIÓN
      priceMonthly: t('pricing.enterprisePrice'), // ⬅️ TRADUCCIÓN
      priceAnnual: t('pricing.enterprisePrice'), // ⬅️ TRADUCCIÓN
      features: [
        t('pricing.enterpriseFeature1'), // ⬅️ TRADUCCIÓN
        t('pricing.enterpriseFeature2'), // ⬅️ TRADUCCIÓN
        t('pricing.enterpriseFeature3'), // ⬅️ TRADUCCIÓN
        t('pricing.enterpriseFeature4'), // ⬅️ TRADUCCIÓN
        t('pricing.enterpriseFeature5'), // ⬅️ TRADUCCIÓN
        t('pricing.enterpriseFeature6'), // ⬅️ TRADUCCIÓN
        t('pricing.enterpriseFeature7'), // ⬅️ TRADUCCIÓN
        t('pricing.enterpriseFeature8'), // ⬅️ TRADUCCIÓN
      ],
      popular: false,
      cta: t('pricing.enterpriseCTA'), // ⬅️ TRADUCCIÓN
    }
  ];
  
  return (
    <div className="container-scale">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? {} : { duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('pricing.title')}{' '} {/* ⬅️ TRADUCCIÓN */}
            <span className="text-gradient">{t('pricing.titleHighlight')}</span> {/* ⬅️ TRADUCCIÓN */}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            {t('pricing.subtitle')} {/* ⬅️ TRADUCCIÓN */}
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
              {t('pricing.monthly')} {/* ⬅️ TRADUCCIÓN */}
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                billingPeriod === 'annual'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('annual')}
            >
              {t('pricing.annual')} {/* ⬅️ TRADUCCIÓN */}
              <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
                {t('pricing.discount')} {/* ⬅️ TRADUCCIÓN */}
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
              whileHover={prefersReducedMotion ? {} : { y: -8 }}
              viewport={{ once: true }}
            >
              {/* Badge "Más Popular" */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <StarIcon className="w-4 h-4" />
                    {t('pricing.mostPopular')}
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Nombre y descripción */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                {/* Precio */}
                <div className="mb-8">
                  {typeof plan.priceMonthly === 'number' ? (
                    <>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-white">
                          €{billingPeriod === 'monthly' ? plan.priceMonthly : plan.priceAnnual}
                        </span>
                        <span className="text-gray-400">
                          {t('pricing.perMonth')} {/* ⬅️ TRADUCCIÓN */}
                        </span>
                      </div>
                      {billingPeriod === 'annual' && (
                        <p className="text-sm text-green-400 mt-2">
                          {t('pricing.saveAnnually')} €{(plan.priceMonthly - plan.priceAnnual) * 12} {t('pricing.perYear')}
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-3xl font-bold text-white">{plan.priceMonthly}</div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
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
            {t('pricing.footerText')}{' '} {/* ⬅️ TRADUCCIÓN */}
            <a href="#contacto" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
              {t('pricing.footerLink')} {/* ⬅️ TRADUCCIÓN */}
            </a>
          </p>
        </motion.div>
    </div>
  );
}