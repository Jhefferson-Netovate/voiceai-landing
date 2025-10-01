import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { RssIcon } from '@heroicons/react/24/outline';

export default function Blog() {
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
                <RssIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Blog
              </h1>
              <p className="text-xl text-gray-400">
                Artículos y noticias sobre automatización e IA.
              </p>
            </motion.div>
          </div>

          {/* Post destacado */}
          <div className="space-y-12">
            <article className="bg-dark-100 rounded-2xl shadow-sm p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-scale-purple text-white rounded-full text-xs font-bold">Post</span>
                <span className="text-gray-400 text-sm">01/10/2025</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">El Futuro de la IA en Agentes Telefónicos: 2025</h2>
              <p className="text-gray-300 mb-4">Descubre cómo la inteligencia artificial está revolucionando la atención telefónica, automatizando procesos y mejorando la experiencia del cliente en empresas de todo el mundo.</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Conversaciones naturales y personalizadas.</li>
                <li>Automatización total de procesos.</li>
                <li>Integración omnicanal con CRM y redes sociales.</li>
                <li>Aprendizaje continuo y análisis avanzado.</li>
                <li>Desafíos éticos y oportunidades de negocio.</li>
              </ul>
              <Link
                to="/blogpost"
                  className="inline-block mt-4 px-6 py-2 bg-scale-purple text-white rounded-lg font-semibold hover:bg-scale-blue transition-colors z-10"
              >
                Leer artículo completo
              </Link>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}