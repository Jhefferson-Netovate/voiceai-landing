import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4">
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-9xl font-bold text-scale-purple mb-4">
            {t('notFound.error')}
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            {t('notFound.title')}
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            {t('notFound.description')}
          </p>
          
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg"
          >
            {t('notFound.button')}
          </Link>

          <div className="mt-12">
            <p className="text-gray-500 mb-4">
              {t('notFound.helpText')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/#caracteristicas" className="text-scale-purple hover:underline">
                {t('notFound.features')}
              </a>
              <a href="/#precios" className="text-scale-purple hover:underline">
                {t('notFound.pricing')}
              </a>
              <a href="/#contacto" className="text-scale-purple hover:underline">
                {t('notFound.contact')}
              </a>
              <a href="/about" className="text-scale-purple hover:underline">
                {t('notFound.about')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}