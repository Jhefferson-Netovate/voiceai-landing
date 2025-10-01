
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { BookOpenIcon, CpuChipIcon, PhoneIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge y icono principal */}
            <div className="flex flex-col items-center mb-8">
              <span className="badge-primary mb-4 px-4 py-2 rounded-full text-sm font-bold tracking-wide">Blog Post</span>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scale-purple to-scale-blue rounded-full shadow-glow-purple mb-4">
                <BookOpenIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-2 text-center">El Futuro de la IA en Agentes Telefónicos: 2025</h1>
              <p className="text-base text-gray-400 mb-2 text-center">Publicado el <span className="font-semibold text-scale-purple">01/10/2025</span> por <span className="font-semibold text-scale-blue">Netovate OU</span></p>
            </div>

            {/* Card principal con glassmorphism */}
            <div className="card-glass p-8 md:p-10 mb-8">
              <p className="text-lg text-gray-300 mb-6 text-center">
                En 2025, la inteligencia artificial ha transformado radicalmente el sector de agentes telefónicos. Las empresas ahora confían en agentes virtuales capaces de gestionar miles de llamadas simultáneas, personalizar la experiencia del cliente y resolver problemas complejos en tiempo real.
              </p>

              {/* Avances destacados */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="glass-effect p-4 rounded-lg flex items-start gap-3 shadow-glow-purple">
                  <CpuChipIcon className="w-7 h-7 text-scale-purple flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1 leading-tight">Conversaciones naturales</h3>
                    <p className="text-gray-400 text-xs leading-normal">Modelos de lenguaje avanzados para interacciones casi humanas.</p>
                  </div>
                </div>
                <div className="glass-effect p-4 rounded-lg flex items-start gap-3 shadow-glow-blue">
                  <PhoneIcon className="w-7 h-7 text-scale-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1 leading-tight">Automatización total</h3>
                    <p className="text-gray-400 text-xs leading-normal">Procesos automatizados de extremo a extremo, desde verificación hasta gestión de incidencias.</p>
                  </div>
                </div>
                <div className="glass-effect p-4 rounded-lg flex items-start gap-3 shadow-glow-cyan">
                  <ChartBarIcon className="w-7 h-7 text-scale-cyan flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1 leading-tight">Integración omnicanal</h3>
                    <p className="text-gray-400 text-xs leading-normal">Conexión con CRM, chat, email y redes sociales para una experiencia centralizada.</p>
                  </div>
                </div>
                <div className="glass-effect p-4 rounded-lg flex items-start gap-3 shadow-glow-purple">
                  <ShieldCheckIcon className="w-7 h-7 text-scale-purple flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1 leading-tight">Aprendizaje continuo</h3>
                    <p className="text-gray-400 text-xs leading-normal">Análisis de cada llamada para mejorar respuestas y anticipar tendencias.</p>
                  </div>
                </div>
              </div>

              {/* Beneficios */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gradient mb-4">Beneficios para empresas y clientes</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Reducción de costes operativos y tiempos de espera.</li>
                  <li>Disponibilidad 24/7 y escalabilidad ilimitada.</li>
                  <li>Mayor satisfacción y fidelización de clientes.</li>
                  <li>Análisis avanzado de datos para toma de decisiones estratégicas.</li>
                </ul>
              </div>

              {/* Desafíos y oportunidades */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gradient mb-4">Desafíos y oportunidades</h2>
                <p className="text-gray-300 mb-2">Aunque la IA ha revolucionado la telefonía, los retos éticos y de privacidad siguen presentes. La transparencia, la protección de datos y la supervisión humana son esenciales para mantener la confianza.</p>
                <p className="text-gray-300">En Netovate OU, seguimos innovando para que las empresas aprovechen todo el potencial de la IA en agentes telefónicos. El futuro es ahora: ¿estás listo para transformar tu atención al cliente?</p>
              </div>

              <hr className="my-8 border-scale-purple/30" />

              {/* CTA final */}
              <div className="text-center">
                <p className="text-base text-gray-400 mb-2">¿Te gustaría saber más sobre nuestras soluciones de IA conversacional?</p>
                <a href="/contacto" className="btn-primary inline-block mt-2">Contáctanos</a>
                <p className="mt-4 text-xs text-gray-500">Descubre cómo podemos ayudarte a escalar tu negocio en 2025.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
