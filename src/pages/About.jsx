import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card, { StatsCard } from '../components/Card';
import { GradientOrb, FloatingShapes, DottedPattern } from '../components/SVGShapes';
import { useTheme } from '../components/ThemeProvider';
import { 
  UsersIcon, 
  RocketLaunchIcon, 
  GlobeAltIcon,
  HeartIcon 
} from '@heroicons/react/24/outline';

/**
 * ABOUT PAGE - NETOVATE OU
 * ==========================
 * Página "Sobre Nosotros" refactorizada con el nuevo sistema de diseño
 * Inspirada en Scale.com
 */

export default function About() {
  const { prefersReducedMotion } = useTheme();

  // Estadísticas de la empresa
  const stats = [
    { 
      value: '2,500+', 
      label: 'Empresas Activas',
      icon: UsersIcon,
      trend: 'up',
      trendValue: '+45% este año'
    },
    { 
      value: '15M+', 
      label: 'Llamadas Procesadas',
      icon: RocketLaunchIcon,
      trend: 'up',
      trendValue: '+120% mensual'
    },
    { 
      value: '50+', 
      label: 'Países',
      icon: GlobeAltIcon
    },
    { 
      value: '98%', 
      label: 'Satisfacción Cliente',
      icon: HeartIcon,
      trend: 'up',
      trendValue: '+2% vs Q3'
    },
  ];

  // Valores de la empresa
  const values = [
    {
      emoji: '🚀',
      title: 'Innovación Continua',
      description: 'Nos desafiamos constantemente a crear soluciones que redefinan los estándares de la industria.'
    },
    {
      emoji: '🤝',
      title: 'Cliente en el Centro',
      description: 'Cada decisión que tomamos está guiada por el impacto que tendrá en nuestros clientes.'
    },
    {
      emoji: '💡',
      title: 'Transparencia Total',
      description: 'Creemos en la honestidad radical y en compartir tanto éxitos como desafíos.'
    },
    {
      emoji: '🌍',
      title: 'Impacto Global',
      description: 'Construimos tecnología que democratiza el acceso a la automatización empresarial.'
    },
  ];

  // Miembros del equipo (ejemplo)
  const team = [
    {
      name: 'María González',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: '15+ años en IA y automatización'
    },
    {
      name: 'Carlos Ruiz',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      bio: 'Ex-Google, Stanford CS PhD'
    },
    {
      name: 'Ana Martínez',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      bio: 'Product leader en startups SaaS'
    },
    {
      name: 'David López',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      bio: 'Senior Engineer desde 2010'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Efectos visuales de fondo */}
        <GradientOrb size={500} color="purple" className="top-0 right-0 -translate-y-1/2" />
        <GradientOrb size={400} color="cyan" className="bottom-0 left-0 translate-y-1/2" />
        <DottedPattern />
        <FloatingShapes />

        <div className="relative z-10 container-scale text-center py-20">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              Sobre Netovate OU
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto">
              Construyendo el{' '}
              <span className="text-gradient">futuro</span>
              {' '}de la automatización
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              En Netovate, creemos que la automatización inteligente debe ser accesible 
              para todas las empresas, sin importar su tamaño.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Únete al Equipo
              </Button>
              <Button variant="secondary" size="lg">
                Conoce Nuestra Historia
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className="section-padding bg-white">
        <div className="container-scale">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard
                key={stat.label}
                {...stat}
                animated
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NUESTRA MISIÓN */}
      <section className="section-padding bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white relative overflow-hidden">
        <GradientOrb size={400} color="purple" className="top-0 left-0" />
        
        <div className="relative z-10 container-scale">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nuestra Misión
              </h2>
              <p className="text-xl leading-relaxed opacity-90">
                Democratizar el acceso a la automatización empresarial mediante 
                inteligencia artificial de última generación. Creemos que cada 
                empresa merece tener herramientas de clase mundial para competir 
                en la economía digital, sin necesidad de equipos técnicos masivos 
                o presupuestos millonarios.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="section-padding bg-white">
        <div className="container-scale">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros{' '}
              <span className="text-gradient">Valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principios que guían cada decisión y cada línea de código que escribimos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                variant="hover" 
                animated 
                delay={index * 0.1}
              >
                <div className="text-5xl mb-4">{value.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="section-padding bg-gray-50">
        <div className="container-scale">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conoce al{' '}
              <span className="text-gradient">Equipo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertos apasionados por construir el futuro de la automatización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                variant="hover" 
                padding="lg"
                animated 
                delay={index * 0.1}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-blue font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              ¿Quieres formar parte de nuestro equipo?
            </p>
            <Button variant="primary" size="lg">
              Ver Posiciones Abiertas →
            </Button>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <DottedPattern />
        </div>

        <div className="relative z-10 container-scale text-center">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Únete a las 2,500+ empresas que ya confían en Netovate OU
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Comenzar Gratis
              </Button>
              <Button variant="outline" size="lg">
                Hablar con Ventas
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}