import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChartBarIcon, CurrencyEuroIcon, ClockIcon, UserGroupIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import { GAEvents } from '../config/analytics';

/**
 * CALCULADORA ROI - NETOVATE OU (VERSIÓN CORREGIDA)
 * ==================================================
 * Widget interactivo para calcular el retorno de inversión
 * 
 * MEJORAS:
 * - Cálculo correcto del ROI y métricas
 * - Diseño responsive con max-width
 * - Validación de casos edge
 * - Mejor jerarquía visual
 * - Estilo inspirado en Scale.com
 */

export default function ROICalculator() {
  const { t } = useTranslation();

  // Estados para inputs del usuario
  const [employees, setEmployees] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [hoursPerDay, setHoursPerDay] = useState(2);
  const [workDays, setWorkDays] = useState(22);

  // Estados para resultados
  const [results, setResults] = useState({
    currentCost: 0,
    netovatePrice: 499, // Plan Professional
    savings: 0,
    roi: 0,
    paybackMonths: 0,
    timeSaved: 0,
    annualSavings: 0,
    isPositive: true
  });

  // Calcular ROI cada vez que cambien los inputs
  useEffect(() => {
    calculateROI();
  }, [employees, hourlyRate, hoursPerDay, workDays]);

  const calculateROI = () => {
    // ========================================
    // VALIDACIÓN DE INPUTS
    // ========================================
    // Prevenir valores inválidos
    const validEmployees = Math.max(1, employees || 1);
    const validHourlyRate = Math.max(1, hourlyRate || 1);
    const validHoursPerDay = Math.max(1, hoursPerDay || 1);
    const validWorkDays = Math.max(1, workDays || 1);

    // ========================================
    // CÁLCULO DEL COSTE ACTUAL MENSUAL
    // ========================================
    const hoursPerMonth = validHoursPerDay * validWorkDays;
    const costPerEmployee = hoursPerMonth * validHourlyRate;
    const totalCurrentCost = costPerEmployee * validEmployees;

    // ========================================
    // PRECIO DE NETOVATE
    // ========================================
    const netovatePrice = 499; // Plan Professional mensual

    // ========================================
    // AHORRO MENSUAL
    // ========================================
    const monthlySavings = totalCurrentCost - netovatePrice;

    // ========================================
    // AHORRO ANUAL
    // ========================================
    const annualSavings = monthlySavings * 12;

    // ========================================
    // ROI CORREGIDO (Retorno sobre Inversión Anual)
    // ========================================
    // ROI = ((Beneficio Anual - Inversión Anual) / Inversión Anual) × 100
    const annualInvestment = netovatePrice * 12; // 5,988€ al año
    const roiPercentage = annualInvestment > 0
      ? ((annualSavings - annualInvestment) / annualInvestment * 100).toFixed(0)
      : 0;

    // ========================================
    // PERÍODO DE RECUPERACIÓN (Payback)
    // ========================================
    // Solo calcular si hay ahorro positivo y evitar división por cero
    const paybackMonths = monthlySavings > 0
      ? (netovatePrice / monthlySavings).toFixed(1)
      : monthlySavings === 0
        ? 999 // Si no hay ahorro, nunca se recupera
        : 0; // Si hay pérdida, mostrar 0

    // ========================================
    // TIEMPO AHORRADO EN HORAS
    // ========================================
    const timeSaved = hoursPerMonth * validEmployees;

    // ========================================
    // VALIDACIÓN: ¿Es rentable?
    // ========================================
    const isPositive = monthlySavings > 0;

    setResults({
      currentCost: Math.round(totalCurrentCost),
      netovatePrice,
      savings: Math.round(monthlySavings),
      roi: parseInt(roiPercentage),
      paybackMonths: parseFloat(paybackMonths),
      timeSaved: Math.round(timeSaved),
      annualSavings: Math.round(annualSavings),
      isPositive
    });
  };

  // Tracking cuando el usuario interactúa
  const handleInputChange = (setter, value, label) => {
    setter(value);
    GAEvents.trackEvent('roi_calculator_interaction', {
      event_category: 'engagement',
      event_label: label,
      value: value
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-700/50 backdrop-blur-sm">
        
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('roi.titlePart1')} <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{t('roi.titlePart2')}</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">
            {t('roi.subtitle')}
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* ========================================
              COLUMNA IZQUIERDA: INPUTS
              ======================================== */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-xl mb-6 flex items-center">
              <ChartBarIcon className="w-6 h-6 mr-2 text-purple-400" />
              {t('roi.inputsTitle')}
            </h3>

            {/* Número de empleados */}
            <div className="space-y-3">
              <label className="flex items-center text-sm font-medium text-gray-300">
                <UserGroupIcon className="w-5 h-5 mr-2 text-purple-400" />
                {t('roi.employeesLabel')}
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={employees}
                  onChange={(e) => handleInputChange(setEmployees, Number(e.target.value), 'employees')}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  style={{
                    background: `linear-gradient(to right, #8B5CF6 0%, #8B5CF6 ${employees}%, #374151 ${employees}%, #374151 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1</span>
                  <span className="font-bold text-purple-400 text-lg">{employees}</span>
                  <span>100</span>
                </div>
              </div>
            </div>

            {/* Coste por hora */}
            <div className="space-y-3">
              <label className="flex items-center text-sm font-medium text-gray-300">
                <CurrencyEuroIcon className="w-5 h-5 mr-2 text-blue-400" />
                {t('roi.hourlyRateLabel')}
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={hourlyRate}
                  onChange={(e) => handleInputChange(setHourlyRate, Number(e.target.value), 'hourly_rate')}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  style={{
                    background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(hourlyRate - 10) / 0.9}%, #374151 ${(hourlyRate - 10) / 0.9}%, #374151 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>10€</span>
                  <span className="font-bold text-blue-400 text-lg">{hourlyRate}€</span>
                  <span>100€</span>
                </div>
              </div>
            </div>

            {/* Horas por día */}
            <div className="space-y-3">
              <label className="flex items-center text-sm font-medium text-gray-300">
                <ClockIcon className="w-5 h-5 mr-2 text-cyan-400" />
                {t('roi.hoursPerDayLabel')}
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={hoursPerDay}
                  onChange={(e) => handleInputChange(setHoursPerDay, Number(e.target.value), 'hours_per_day')}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  style={{
                    background: `linear-gradient(to right, #06B6D4 0%, #06B6D4 ${(hoursPerDay - 1) / 0.07}%, #374151 ${(hoursPerDay - 1) / 0.07}%, #374151 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1h</span>
                  <span className="font-bold text-cyan-400 text-lg">{hoursPerDay}h</span>
                  <span>8h</span>
                </div>
              </div>
            </div>

            {/* Días laborables */}
            <div className="space-y-3">
              <label className="flex items-center text-sm font-medium text-gray-300">
                <ChartBarIcon className="w-5 h-5 mr-2 text-pink-400" />
                {t('roi.workDaysLabel')}
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="15"
                  max="30"
                  value={workDays}
                  onChange={(e) => handleInputChange(setWorkDays, Number(e.target.value), 'work_days')}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
                  style={{
                    background: `linear-gradient(to right, #EC4899 0%, #EC4899 ${(workDays - 15) / 0.15}%, #374151 ${(workDays - 15) / 0.15}%, #374151 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>15</span>
                  <span className="font-bold text-pink-400 text-lg">{workDays}</span>
                  <span>30</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================
              COLUMNA DERECHA: RESULTADOS
              ======================================== */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-xl mb-6">
              {t('roi.resultsTitle')}
            </h3>

            {/* Alerta si no es rentable */}
            {!results.isPositive && (
              <motion.div
                className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-yellow-400">{t('roi.alertTitle')}</p>
                    <p className="text-xs text-yellow-300/80 mt-1">
                      {t('roi.alertText')}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Coste actual */}
            <motion.div
              className="p-5 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl border border-red-500/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-red-400 mb-2 font-medium">{t('roi.currentCostLabel')}</p>
              <p className="text-4xl font-bold text-white">
                {results.currentCost.toLocaleString('es-ES')}€
              </p>
              <p className="text-xs text-red-300/70 mt-1">
                {employees} {t('roi.employeesLabel')} × {hoursPerDay}h/{t('roi.hoursPerDayLabel')} × {hourlyRate}€/h
              </p>
            </motion.div>

            {/* Precio Netovate */}
            <motion.div
              className="p-5 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p className="text-sm text-blue-400 mb-2 font-medium">{t('roi.netovatePriceLabel')}</p>
              <p className="text-4xl font-bold text-white">
                {results.netovatePrice}€
              </p>
              <p className="text-xs text-blue-300/70 mt-1">{t('roi.netovatePlan')}</p>
            </motion.div>

            {/* Ahorro mensual */}
            <motion.div
              className={`p-5 rounded-xl border ${
                results.isPositive
                  ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20'
                  : 'bg-gradient-to-br from-gray-500/10 to-gray-600/10 border-gray-500/20'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <p className={`text-sm mb-2 font-medium ${results.isPositive ? 'text-green-400' : 'text-gray-400'}`}>
                {results.isPositive ? t('roi.savingsPositive') : t('roi.savingsNegative')}
              </p>
              <p className={`text-4xl font-bold ${results.isPositive ? 'text-white' : 'text-gray-400'}`}>
                {results.savings > 0 ? '+' : ''}{results.savings.toLocaleString('es-ES')}€
              </p>
              {results.isPositive && (
                <p className="text-xs text-green-300/70 mt-1">
                  💰 {t('roi.annualSavings').replace('{amount}', results.annualSavings.toLocaleString('es-ES'))}
                </p>
              )}
            </motion.div>

            {/* Métricas adicionales */}
            {results.isPositive && (
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 text-center">
                  <p className="text-3xl font-bold text-white">
                    {results.roi > 0 ? '+' : ''}{results.roi}%
                  </p>
                  <p className="text-xs text-purple-300 mt-1">{t('roi.roiLabel')}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 text-center">
                  <p className="text-3xl font-bold text-white">
                    {results.paybackMonths}
                  </p>
                  <p className="text-xs text-cyan-300 mt-1">{t('roi.paybackLabel')}</p>
                </div>
              </div>
            )}

            {/* Tiempo ahorrado */}
            <div className="p-4 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl border border-orange-500/20 text-center">
              <p className="text-sm text-orange-300 mb-1">{t('roi.timeSavedLabel')}</p>
              <p className="text-3xl font-bold text-white">
                {results.timeSaved.toLocaleString('es-ES')} {t('roi.timeSavedHours')}
              </p>
              <p className="text-xs text-orange-300/70 mt-1">
                {t('roi.timeSavedDays').replace('{days}', (results.timeSaved / 8).toFixed(1))}
              </p>
            </div>

            {/* CTA */}
            {results.isPositive && (
              <div className="mt-6">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={() => {
                    GAEvents.trackEvent('roi_calculator_cta_click', {
                      event_category: 'conversion',
                      savings: results.savings,
                      roi: results.roi
                    });
                    window.location.href = '#contacto';
                  }}
                >
                  {t('roi.ctaButton')}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  {t('roi.ctaSubtext')}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Nota informativa */}
        <div className="mt-8 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <p className="text-sm text-blue-300">
            <strong>💡 {t('roi.noteTitle')}</strong> {t('roi.noteText').replace('{amount}', (results.netovatePrice * 12).toString())}
          </p>
        </div>
      </div>
    </div>
  );
}