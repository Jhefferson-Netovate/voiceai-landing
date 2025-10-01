import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CpuChipIcon, PhoneIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function BlogPost() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-scale-purple text-white rounded-full text-sm font-bold mb-4">
                {t('blog.postTag')}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t('blogpost.title')}
              </h1>
              <div className="flex items-center justify-center gap-4 text-gray-400">
                <span>{t('blogpost.author')}</span>
                <span>•</span>
                <span>{t('blogpost.date')}</span>
                <span>•</span>
                <span>{t('blogpost.readTime')}</span>
              </div>
            </div>

            <div className="bg-dark-100 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{t('blogpost.intro')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t('blogpost.introText')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="glass-effect p-4 rounded-lg flex items-start gap-3 shadow-glow-purple">
                <CpuChipIcon className="w-7 h-7 text-scale-purple flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1 leading-tight">
                    {t('blogpost.feature1Title')}
                  </h3>
                  <p className="text-gray-400 text-xs leading-normal">
                    {t('blogpost.feature1Desc')}
                  </p>
                </div>
              </div>
              <div className="glass-effect p-4 rounded-lg flex items-start gap-3 shadow-glow-blue">
                <PhoneIcon className="w-7 h-7 text-scale-blue flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1 leading-tight">
                    {t('blogpost.feature2Title')}
                  </h3>
                  <p className="text-gray-400 text-xs leading-normal">
                    {t('blogpost.feature2Desc')}
                  </p>
                </div>
              </div>
              <div className="glass-effect p-4 rounded-lg flex items-start gap-3 shadow-glow-cyan">
                <ChartBarIcon className="w-7 h-7 text-scale-cyan flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1 leading-tight">
                    {t('blogpost.feature3Title')}
                  </h3>
                  <p className="text-gray-400 text-xs leading-normal">
                    {t('blogpost.feature3Desc')}
                  </p>
                </div>
              </div>
              <div className="glass-effect p-4 rounded-lg flex items-start gap-3 shadow-glow-purple">
                <ShieldCheckIcon className="w-7 h-7 text-scale-purple flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1 leading-tight">
                    {t('blogpost.feature4Title')}
                  </h3>
                  <p className="text-gray-400 text-xs leading-normal">
                    {t('blogpost.feature4Desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-100 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{t('blogpost.conclusionTitle')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t('blogpost.conclusionText')}
              </p>
            </div>

            <div className="text-center mt-12">
              <a
                href="/#contacto"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg"
              >
                {t('blogpost.cta')}
              </a>
            </div>
          </motion.article>
        </div>
      </main>
      <Footer />
    </div>
  );
}