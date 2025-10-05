import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { StatCard } from '../components/Card';
import { DottedPattern, GradientOrb } from '../components/SVGShapes';
import { useTheme } from '../components/ThemeProvider';
import {
  UsersIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export default function About() {
  const { prefersReducedMotion } = useTheme();
  const { t } = useTranslation();

  const stats = [
    { 
      value: t('about.stats1Value'),
      label: t('about.stats1Label'),
      icon: <UsersIcon />,
      trend: t('about.stats1Trend'),
      trendUp: true
    },
    { 
      value: t('about.stats2Value'),
      label: t('about.stats2Label'),
      icon: <RocketLaunchIcon />,
      trend: t('about.stats2Trend'),
      trendUp: true
    },
    { 
      value: t('about.stats3Value'),
      label: t('about.stats3Label'),
      icon: <GlobeAltIcon />
    },
    { 
      value: t('about.stats4Value'),
      label: t('about.stats4Label'),
      icon: <HeartIcon />,
      trend: t('about.stats4Trend'),
      trendUp: true
    },
  ];

  const values = [
    {
      emoji: '🚀',
      title: t('about.value1Title'),
      description: t('about.value1Desc')
    },
    {
      emoji: '🤝',
      title: t('about.value2Title'),
      description: t('about.value2Desc')
    },
    {
      emoji: '💡',
      title: t('about.value3Title'),
      description: t('about.value3Desc')
    },
    {
      emoji: '🌍',
      title: t('about.value4Title'),
      description: t('about.value4Desc')
    },
  ];

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
      image: 'https://ui-avatars.com/api/?name=Maria+Lopez&background=EC4899&color=fff&size=200'
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-24 px-4 relative overflow-hidden">
        <DottedPattern opacity={0.03} />
        <GradientOrb size={600} color="purple" opacity={0.1} className="top-20 right-0" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl font-bold text-white mb-4"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t('about.title')}
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('about.subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
          </div>

          <motion.div 
            className="bg-white/5 rounded-2xl p-8 mb-20 backdrop-blur-sm border border-white/10"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">{t('about.missionTitle')}</h2>
            <p className="text-gray-300 text-lg">{t('about.missionText')}</p>
          </motion.div>

          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12">{t('about.valuesTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{value.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}