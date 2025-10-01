import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ROICalculator from './components/ROICalculator';
import CookieBanner from './components/CookieBanner';
import ExitIntentPopup from './components/ExitIntentPopup';
import ContactForm from './components/ContactForm';
import AnimatedBackground from './components/AnimatedBackground';
import { GlowOrb, GridPattern } from './components/SVGShapes';

// Iconos
import { 
  CpuChipIcon,
  PhoneIcon,
  ChartBarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

// Datos de características
const features = [
  {
    icon: CpuChipIcon,
    title: 'IA Conversacional Avanzada',
    description: 'Tecnología de procesamiento de lenguaje natural que mantiene conversaciones naturales e inteligentes con tus clientes.',
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    icon: PhoneIcon,
    title: 'Llamadas 24/7 Automatizadas',
    description: 'Sistema autónomo que nunca duerme. Realiza seguimientos, agenda citas y gestiona consultas sin intervención humana.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics en Tiempo Real',
    description: 'Dashboard completo con métricas de rendimiento, tasas de conversión y análisis de sentimientos.',
    gradient: 'from-cyan-500 to-teal-500'
  },
  {
    icon: ClockIcon,
    title: 'Integración Instantánea',
    description: 'Conecta con tu CRM favorito en menos de 5 minutos. API REST completa para integraciones personalizadas.',
    gradient: 'from-teal-500 to-green-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Seguridad Empresarial',
    description: 'Cumplimiento GDPR completo, encriptación end-to-end y certificaciones ISO 27001.',
    gradient: 'from-green-500 to-yellow-500'
  },
  {
    icon: CogIcon,
    title: 'Personalización Total',
    description: 'Entrena la IA con tu propia voz de marca, scripts personalizados y flujos adaptados a tu industria.',
    gradient: 'from-yellow-500 to-red-500'
  },
];

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navegación */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Sección de Características */}
      <section id="caracteristicas" className="relative py-20 bg-black overflow-hidden">
        <GridPattern opacity={0.05} />
        <GlowOrb 
          size={500} 
          color="blue" 
          opacity={0.15}
          className="top-0 right-1/4" 
        />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Por qué elegir{' '}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Netovate OU
              </span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nuestra tecnología de vanguardia revoluciona la comunicación telefónica empresarial.
            </p>
          </div>

          {/* Grid de características */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Precios */}
      <section id="precios" className="py-20 bg-black">
        <Pricing />
      </section>

      {/* Calculadora ROI */}
      <section className="py-20 bg-black">
        <ROICalculator />
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-20 bg-black">
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />

      {/* Componentes auxiliares */}
      <CookieBanner />
      <ExitIntentPopup />
    </div>
  );
}

export default App;