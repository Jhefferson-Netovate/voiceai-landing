import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BellIcon } from '@heroicons/react/24/outline';

export default function Changelog() {
  const { t } = useTranslation();

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
                {t('changelog.title')}
              </h1>
              <p className="text-xl text-gray-400">
                {t('changelog.subtitle')}
              </p>
            </motion.div>
          </div>

          <div className="space-y-12">
            <article className="bg-dark-100 rounded-2xl shadow-sm p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-scale-purple text-white rounded-full text-xs font-bold">
                  {t('changelog.version')}
                </span>
                <span className="text-gray-400 text-sm">{t('changelog.date')}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {t('changelog.launchTitle')}
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>{t('changelog.feature1')}</li>
                <li>{t('changelog.feature2')}</li>
                <li>{t('changelog.feature3')}</li>
                <li>{t('changelog.feature4')}</li>
                <li>{t('changelog.feature5')}</li>
                <li>{t('changelog.feature6')}</li>
                <li>{t('changelog.feature7')}</li>
                <li>{t('changelog.feature8')}</li>
                <li>{t('changelog.feature9')}</li>
              </ul>
              <p className="text-gray-400">{t('changelog.thanksMessage')}</p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}