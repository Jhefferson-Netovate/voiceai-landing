import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, CurrencyEuroIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import { GAEvents } from '../config/analytics';

/**
 * CALCULADORA ROI - NETOVATE OU
 * ===============================
 * Widget interactivo para calcular el retorno de inversión
 * de las soluciones de automatización
 */

export default function ROICalculator() {
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
    timeSaved: 0
  });

  // Calcular ROI cada vez que cambien los inputs
  useEffect(() => {
    calculateROI();
  }, [employees, hourlyRate, hoursPerDay, workDays]);

  const calculateROI = () => {
    // Cálculo del coste actual mensual
    const hoursPerMonth = hoursPerDay * workDays;
    const costPerEmployee = hoursPerMonth * hourlyRate;
    const totalCurrentCost = costPerEmployee * employees;

    // Precio de Netovate (Plan Professional)
    const netovatePrice = 499;

    // Ahorro mensual
    const monthlySavings = totalCurrentCost - netovatePrice;

    // ROI porcentual
    const roiPercentage = ((monthlySavings / netovatePrice) * 100).toFixed(0);

    // Período de recuperación en meses
    const paybackMonths = netovatePrice / monthlySavings;

    // Tiempo ahorrado en horas
    const timeSaved = hoursPerMonth * employees;

    setResults({
      currentCost: Math.round(totalCurrentCost),
      netovatePrice,
      savings: Math.round(monthlySavings),
      roi: roiPercentage,
      paybackMonths: paybackMonths.toFixed(1),
      timeSaved: Math.round(timeSaved)
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
    <div className="bg-gradient-to-br from-[#F7F9FC] to-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Calcula tu <span className="text-[#0F52BA]">ROI</span>
        </h2>
        <p className="text-gray-600">
          Descubre cuánto puedes ahorrar con Netovate OU
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* INPUTS */}
        <div className="space-y-6">
          <h3 className="font-semibold text-gray-900 mb-4">Tus datos actuales</h3>

          {/* Número de empleados */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <UserGroupIcon className="w-5 h-5 mr-2 text-[#0F52BA]" />
              Número de empleados en tareas manuales
            </label>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="100"
                value={employees}
                onChange={(e) => handleInputChange(setEmployees, Number(e.target.value), 'employees')}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0F52BA]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span className="font-semibold text-[#0F52BA] text-base">{employees}</span>
                <span>100</span>
              </div>
            </div>
          </div>

          {/* Coste por hora */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <CurrencyEuroIcon className="w-5 h-5 mr-2 text-[#0F52BA]" />
              Coste por hora del empleado (€)
            </label>
            <div className="relative">
              <input
                type="range"
                min="10"
                max="100"
                value={hourlyRate}
                onChange={(e) => handleInputChange(setHourlyRate, Number(e.target.value), 'hourly_rate')}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0F52BA]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>10€</span>
                <span className="font-semibold text-[#0F52BA] text-base">{hourlyRate}€</span>
                <span>100€</span>
              </div>
            </div>
          </div>

          {/* Horas por día */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <ClockIcon className="w-5 h-5 mr-2 text-[#0F52BA]" />
              Horas diarias en tareas automatizables
            </label>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="8"
                value={hoursPerDay}
                onChange={(e) => handleInputChange(setHoursPerDay, Number(e.target.value), 'hours_per_day')}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0F52BA]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1h</span>
                <span className="font-semibold text-[#0F52BA] text-base">{hoursPerDay}h</span>
                <span>8h</span>
              </div>
            </div>
          </div>

          {/* Días laborables */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <ChartBarIcon className="w-5 h-5 mr-2 text-[#0F52BA]" />
              Días laborables al mes
            </label>
            <div className="relative">
              <input
                type="range"
                min="15"
                max="30"
                value={workDays}
                onChange={(e) => handleInputChange(setWorkDays, Number(e.target.value), 'work_days')}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0F52BA]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>15</span>
                <span className="font-semibold text-[#0F52BA] text-base">{workDays}</span>
                <span>30</span>
              </div>
            </div>
          </div>
        </div>

        {/* RESULTADOS */}
        <div className="bg-white rounded-xl p-6 border-2 border-[#0F52BA] border-opacity-20">
          <h3 className="font-semibold text-gray-900 mb-6 text-center text-lg">
            Tus Resultados
          </h3>

          <div className="space-y-4">
            {/* Coste actual */}
            <motion.div
              className="p-4 bg-red-50 rounded-lg border border-red-200"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-red-700 mb-1">Coste Actual Mensual</p>
              <p className="text-3xl font-bold text-red-600">
                {results.currentCost.toLocaleString('es-ES')}€
              </p>
            </motion.div>

            {/* Precio Netovate */}
            <motion.div
              className="p-4 bg-blue-50 rounded-lg border border-blue-200"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p className="text-sm text-blue-700 mb-1">Con Netovate OU</p>
              <p className="text-3xl font-bold text-blue-600">
                {results.netovatePrice}€
              </p>
              <p className="text-xs text-blue-600 mt-1">Plan Professional</p>
            </motion.div>

            {/* Ahorro mensual */}
            <motion.div
              className="p-4 bg-green-50 rounded-lg border border-green-200"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <p className="text-sm text-green-700 mb-1">Ahorro Mensual</p>
              <p className="text-3xl font-bold text-green-600">
                {results.savings > 0 ? '+' : ''}{results.savings.toLocaleString('es-ES')}€
              </p>
            </motion.div>

            {/* Métricas adicionales */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#0F52BA]">
                  {results.roi}%
                </p>
                <p className="text-xs text-gray-600 mt-1">ROI</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#0F52BA]">
                  {results.paybackMonths}
                </p>
                <p className="text-xs text-gray-600 mt-1">Meses recuperación</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-1">Tiempo ahorrado mensual</p>
              <p className="text-xl font-bold text-[#FF6B35]">
                {results.timeSaved.toLocaleString('es-ES')} horas
              </p>
            </div>
          </div>

          {/* CTA */}
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
              Comenzar Ahora →
            </Button>
            <p className="text-xs text-gray-500 text-center mt-2">
              14 días de prueba gratis • Sin tarjeta
            </p>
          </div>
        </div>
      </div>

      {/* Nota informativa */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-900">
          <strong>💡 Nota:</strong> Esta calculadora proporciona estimaciones basadas en 
          promedios de la industria. Los resultados reales pueden variar según tu caso específico.
        </p>
      </div>
    </div>
  );
}