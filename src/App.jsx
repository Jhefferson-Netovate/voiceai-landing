import React from 'react';
import { useTranslation } from 'react-i18next'; // ⬅️ AÑADIR ESTO
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ROICalculator from './components/ROICalculator';
import CookieBanner from './components/CookieBanner';
import ExitIntentPopup from './components/ExitIntentPopup';
import ContactForm from './components/ContactForm';
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

function App() {
  const { t } = useTranslation(); // ⬅️ AÑADIR ESTO

  // Datos de características - AHORA USAN TRADUCCIONES
  const features = [
    {
      icon: CpuChipIcon,
      title: t('characteristics.feature1Title'), // ⬅️ TRADUCCIÓN
      description: t('characteristics.feature1Desc'), // ⬅️ TRADUCCIÓN
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: PhoneIcon,
      title: t('characteristics.feature2Title'), // ⬅️ TRADUCCIÓN
      description: t('characteristics.feature2Desc'), // ⬅️ TRADUCCIÓN
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ChartBarIcon,
      title: t('characteristics.feature3Title'), // ⬅️ TRADUCCIÓN
      description: t('characteristics.feature3Desc'), // ⬅️ TRADUCCIÓN
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      icon: ClockIcon,
      title: t('characteristics.feature4Title'), // ⬅️ TRADUCCIÓN
      description: t('characteristics.feature4Desc'), // ⬅️ TRADUCCIÓN
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: ShieldCheckIcon,
      title: t('characteristics.feature5Title'), // ⬅️ TRADUCCIÓN
      description: t('characteristics.feature5Desc'), // ⬅️ TRADUCCIÓN
      gradient: 'from-green-500 to-yellow-500'
    },
    {
      icon: CogIcon,
      title: t('characteristics.feature6Title'), // ⬅️ TRADUCCIÓN
      description: t('characteristics.feature6Desc'), // ⬅️ TRADUCCIÓN
      gradient: 'from-yellow-500 to-red-500'
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navegación */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Sección de Características */}
      <section 
  id="caracteristicas" 
  className="relative py-12 sm:py-16 md:py-20 bg-black overflow-hidden"
>
  {/* Elementos decorativos de fondo */}
  <GridPattern opacity={0.05} />
  <GlowOrb 
    size={500} 
    color="blue" 
    opacity={0.15}
    className="top-0 right-1/4" 
  />
  
  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Título de la sección - RESPONSIVE + i18n */}
    <div className="text-center mb-10 sm:mb-12 md:mb-16">
      <h2 className="
        text-3xl sm:text-4xl lg:text-5xl 
        font-bold text-white 
        mb-4 sm:mb-6
        leading-tight
        px-4
      ">
        {t('characteristics.title')}{' '}
        <span className="
          bg-gradient-to-r from-purple-500 to-blue-500 
          bg-clip-text text-transparent
          inline-block
        ">
          {t('characteristics.titleBrand')}
        </span>
        ?
      </h2>
      <p className="
        text-base sm:text-lg md:text-xl 
        text-gray-300 sm:text-gray-400 
        max-w-3xl mx-auto
        px-4
        leading-relaxed
      ">
        {t('characteristics.subtitle')}
      </p>
    </div>

    {/* Grid de características - RESPONSIVE Y OPTIMIZADO */}
    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      gap-4 sm:gap-6 lg:gap-8
    ">
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