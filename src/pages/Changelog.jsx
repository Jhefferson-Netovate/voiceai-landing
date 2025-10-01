import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { BellIcon } from '@heroicons/react/24/outline';

export default function Changelog() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scale-purple to-scale-blue rounded-full mb-6">
                <BellIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Changelog
              </h1>
              <p className="text-xl text-gray-400">
                Novedades y actualizaciones de la plataforma.
              </p>
            </motion.div>
          </div>

          {/* Entradas tipo blog de logs */}
          <div className="space-y-12">
            {/* Versión 1.0 */}
            <article className="bg-dark-100 rounded-2xl shadow-sm p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-scale-purple text-white rounded-full text-xs font-bold">v1.0</span>
                <span className="text-gray-400 text-sm">01/10/2025</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Lanzamiento inicial de VoiceAI Landing 🚀</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Nuevo sistema de diseño oscuro, glassmorphism y efectos neon.</li>
                <li>Hero section con GlowOrb y animaciones modernas.</li>
                <li>Cards de features con glass y hover.</li>
                <li>Pricing con bordes neon y fondo oscuro.</li>
                <li>Footer y Header adaptativos con modo oscuro.</li>
                <li>Legal pages accesibles y con alto contraste.</li>
                <li>Dot/grid pattern de fondo en secciones clave.</li>
                <li>Botones con efectos glow y gradientes animados.</li>
                <li>Integración inicial con analytics y crisp.</li>
              </ul>
              <p className="text-gray-400">¡Gracias por probar la primera versión! Envíanos feedback para seguir mejorando.</p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}