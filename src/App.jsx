import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ROICalculator from './components/ROICalculator';
import CookieBanner from './components/CookieBanner';
import ExitIntentPopup from './components/ExitIntentPopup';
import ContactForm from './components/ContactForm';
import { GlowOrb, GridPattern } from './components/SVGShapes';

// Iconos para las características
import { 
  CpuChipIcon,
  PhoneIcon,
  ChartBarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

// Datos de características del producto
const features = [
  {
    icon: CpuChipIcon,
    title: 'IA Conversacional Avanzada',
    description: 'Tecnología de procesamiento de lenguaje natural que mantiene conversaciones naturales e inteligentes con tus clientes, adaptándose al contexto y tono de cada llamada.',
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    icon: PhoneIcon,
    title: 'Llamadas 24/7 Automatizadas',
    description: 'Sistema autónomo que nunca duerme. Realiza seguimientos de ventas, agenda citas, gestiona consultas y califica leads sin intervención humana.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics en Tiempo Real',
    description: 'Dashboard completo con métricas de rendimiento, tasas de conversión, análisis de sentimientos y ROI detallado de cada campaña.',
    gradient: 'from-cyan-500 to-teal-500'
  },
  {
    icon: ClockIcon,
    title: 'Integración Instantánea',
    description: 'Conecta con tu CRM favorito (Salesforce, HubSpot, Pipedrive) en menos de 5 minutos. API REST completa para integraciones personalizadas.',
    gradient: 'from-teal-500 to-green-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Seguridad Empresarial',
    description: 'Cumplimiento GDPR completo, encriptación end-to-end, auditoría de todas las interacciones y certificaciones ISO 27001.',
    gradient: 'from-green-500 to-yellow-500'
  },
  {
    icon: CogIcon,
    title: 'Personalización Total',
    description: 'Entrena la IA con tu propia voz de marca, scripts personalizados, tonos específicos y flujos de conversación adaptados a tu industria.',
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

      {/* Características Principales */}
  <section id="caracteristicas" className="relative section-padding bg-black overflow-hidden">
    <GridPattern opacity={0.05} />
    <GlowOrb 
      size={500} 
      color="blue" 
      opacity={0.2}
      className="top-0 right-1/4" 
    />
    <div className="relative z-10 container-scale">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Por qué elegir{' '}
              <span className="text-gradient">Netovate OÜ</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Nuestra tecnología de vanguardia combina inteligencia artificial conversacional, 
              procesamiento de lenguaje natural y integración empresarial para revolucionar 
              la comunicación telefónica de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
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

      {/* Casos de Uso */}
  <section id="casos" className="section-padding bg-black">
        <div className="container-scale">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Casos de uso{' '}
              <span className="text-gradient">reales</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Descubre cómo empresas como la tuya están transformando sus comunicaciones
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                emoji: '🏢',
                title: 'Ventas B2B',
                description: 'Automatiza la prospección y calificación de leads. Aumenta un 300% las citas cualificadas identificando interés real y agendando reuniones automáticamente.',
                stats: '+300% citas cualificadas'
              },
              {
                emoji: '🏥',
                title: 'Sector Salud',
                description: 'Recordatorios automáticos de citas médicas, confirmaciones y reprogramación por voz. Reduce las ausencias un 60% mejorando la eficiencia operativa.',
                stats: '-60% ausencias a citas'
              },
              {
                emoji: '🛒',
                title: 'E-commerce',
                description: 'Recupera carritos abandonados con llamadas personalizadas automáticas. ROI del 400% en los primeros 3 meses recuperando ventas perdidas.',
                stats: '400% ROI primer año'
              },
              {
                emoji: '🏠',
                title: 'Inmobiliario',
                description: 'Cualificación automática de leads 24/7. Solo recibes llamadas de clientes realmente interesados con presupuesto confirmado y necesidad real.',
                stats: '85% leads cualificados'
              },
            ].map((useCase, index) => (
              <div
                key={useCase.title}
                className="bg-dark-100 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-dark-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-5xl mb-4">{useCase.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-scale-purple to-scale-blue bg-opacity-10 text-scale-purple font-semibold text-sm rounded-full">
                      {useCase.stats}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculadora ROI */}
  <section id="roi" className="section-padding bg-dark-100">
        <div className="container-scale">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Calcula tu{' '}
              <span className="text-gradient">retorno de inversión</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Descubre cuánto puedes ahorrar automatizando tus procesos con Netovate OÜ
            </p>
          </div>
          
          <ROICalculator />
        </div>
      </section>

      {/* Precios */}
      <Pricing />

      {/* Formulario de Contacto */}
  <section id="contacto" className="section-padding bg-black">
        <div className="container-scale">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Listo para{' '}
              <span className="text-gradient">empezar</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Completa el formulario y nuestro equipo te contactará en menos de 24 horas
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-br from-scale-purple via-scale-blue to-scale-cyan relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-dark-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-dark-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container-scale relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para revolucionar tus llamadas?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a más de 2,500 empresas que ya confían en Netovate OÜ para automatizar sus comunicaciones telefónicas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="primary">
                🚀 Prueba Gratis 14 Días
              </Button>
              <Button variant="primary">
                📞 Hablar con Ventas
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-80">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Sin compromiso
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Sin tarjeta de crédito
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Configuración en 5 minutos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Cookie Banner - GDPR Compliant */}
      <CookieBanner />

      {/* Exit Intent Popup */}
      <ExitIntentPopup />
    </div>
  );
}

export default App;