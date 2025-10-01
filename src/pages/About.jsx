import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card, { StatCard } from '../components/Card'; // ✅ CORREGIDO: StatCard en lugar de StatsCard
import { DottedPattern, GradientOrb, FloatingShapes } from '../components/SVGShapes';
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
      icon: <UsersIcon />,
      trend: '+45%',
      trendUp: true
    },
    { 
      value: '15M+', 
      label: 'Llamadas Procesadas',
      icon: <RocketLaunchIcon />,
      trend: '+120%',
      trendUp: true
    },
    { 
      value: '50+', 
      label: 'Países',
      icon: <GlobeAltIcon />
    },
    { 
      value: '98%', 
      label: 'Satisfacción Cliente',
      icon: <HeartIcon />,
      trend: '+2%',
      trendUp: true
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

  // Equipo (puedes agregar fotos reales más adelante)
  const team = [
    {
      name: 'Ana García',
      role: 'CEO & Fundadora',
      bio: 'Experta en IA con 15 años de experiencia en automatización empresarial.',
      image: 'https://ui-avatars.com/api/?name=Ana+Garcia&background=8B5CF6&color=fff&size=200'
    },
    {
      name: 'Carlos Ruiz',
      role: 'CTO',
      bio: 'Arquitecto de sistemas con pasión por crear infraestructura escalable.',
      image: 'https://ui-avatars.com/api/?name=Carlos+Ruiz&background=3B82F6&color=fff&size=200'
    },
    {
      name: 'María López',
      role: 'Head of AI',
      bio: 'Investigadora en NLP y deep learning, PhD en Computer Science.',
      image: 'https://ui-avatars.com/api/?name=Maria+Lopez&background=06B6D4&color=fff&size=200'
    },
    {
      name: 'David Chen',
      role: 'Head of Product',
      bio: 'Product Manager con experiencia en startups de rápido crecimiento.',
      image: 'https://ui-avatars.com/api/?name=David+Chen&background=8B5CF6&color=fff&size=200'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <DottedPattern />
          <GradientOrb size={600} color="purple" className="top-0 right-0" />
          <GradientOrb size={400} color="blue" className="bottom-0 left-0" />
        </div>

        <div className="relative z-10 container-scale py-24 md:py-32">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={prefersReducedMotion ? {} : { scale: 0 }}
              animate={prefersReducedMotion ? {} : { scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
            >
              <span className="animate-pulse">✨</span>
              <span className="text-sm font-semibold">Sobre Netovate OU</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Revolucionando la 
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Comunicación Empresarial
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Somos un equipo de ingenieros, diseñadores e innovadores apasionados 
              por transformar cómo las empresas se comunican con sus clientes.
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
      <section className="py-16 bg-white">
        <div className="container-scale">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard  
                key={stat.label}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                trend={stat.trend}
                trendUp={stat.trendUp}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NUESTRA MISIÓN */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white relative overflow-hidden">
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

      {/* NUESTROS VALORES */}
      <section className="py-24 bg-gray-50">
        <div className="container-scale">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión que tomamos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="default" hoverable>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{value.emoji}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NUESTRO EQUIPO */}
      <section className="py-24 bg-white">
        <div className="container-scale">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Conoce al Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Las personas detrás de Netovate OU
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="default" hoverable>
                  <div className="text-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-purple-100"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container-scale">
          <Card variant="gradient">
            <div className="text-center py-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                ¿Quieres unirte a nosotros?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Estamos siempre buscando talento excepcional para unirse a nuestro equipo
              </p>
              <Button variant="primary" size="lg">
                Ver Posiciones Abiertas
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}