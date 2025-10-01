import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { RssIcon } from '@heroicons/react/24/outline';

export default function Blog() {
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
                <RssIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t('blog.title')}
              </h1>
              <p className="text-xl text-gray-400">
                {t('blog.subtitle')}
              </p>
            </motion.div>
          </div>

          <div className="space-y-12">
            <article className="bg-dark-100 rounded-2xl shadow-sm p-8 md:p-12 relative z-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-scale-purple text-white rounded-full text-xs font-bold">
                  {t('blog.postTag')}
                </span>
                <span className="text-gray-400 text-sm">{t('blog.date')}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {t('blog.post1Title')}
              </h2>
              <p className="text-gray-300 mb-4">
                {t('blog.post1Desc')}
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>{t('blog.post1Point1')}</li>
                <li>{t('blog.post1Point2')}</li>
                <li>{t('blog.post1Point3')}</li>
                <li>{t('blog.post1Point4')}</li>
                <li>{t('blog.post1Point5')}</li>
              </ul>
              <Link
                to="/blogpost"
                className="inline-block mt-4 px-6 py-2 bg-scale-purple text-white rounded-lg font-semibold hover:bg-scale-blue transition-colors z-30 relative"
              >
                {t('blog.readMore')}
              </Link>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}