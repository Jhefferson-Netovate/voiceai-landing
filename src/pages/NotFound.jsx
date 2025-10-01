import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Número 404 grande */}
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-scale-purple via-scale-blue to-scale-cyan mb-4">
            404
          </h1>
          
          {/* Mensaje principal */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Página no encontrada
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          
          {/* Ilustración simple */}
          <div className="mb-8">
            <svg
              className="w-64 h-64 mx-auto text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-scale-purple to-scale-blue hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HomeIcon className="w-5 h-5 mr-2" />
              Volver al Inicio
            </motion.a>
            
            <motion.button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:bg-gray-50 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Página Anterior
            </motion.button>
          </div>
          
          {/* Links útiles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              ¿Necesitas ayuda? Visita estas páginas:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/#caracteristicas" className="text-scale-purple hover:underline">
                Características
              </a>
              <a href="/#precios" className="text-scale-purple hover:underline">
                Precios
              </a>
              <a href="/#contacto" className="text-scale-purple hover:underline">
                Contacto
              </a>
              <a href="/about" className="text-scale-purple hover:underline">
                Sobre Nosotros
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}