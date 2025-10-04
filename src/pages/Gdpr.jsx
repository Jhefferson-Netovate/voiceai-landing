import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Gdpr() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-scale-purple to-scale-blue rounded-full mb-4 sm:mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                {t('gdpr.title')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400">
                {t('gdpr.subtitle')}
              </p>
            </div>
            
            <section className="prose prose-invert max-w-none text-gray-300 mx-auto text-base sm:text-lg md:text-lg space-y-8">
              <div className="bg-dark-100 rounded-xl p-4 mb-6 border border-scale-purple/30">
                <h2 className="text-2xl sm:text-3xl font-bold text-scale-purple mb-3 sm:mb-4">
                  {t('gdpr.whatIsTitle')}
                </h2>
                <p className="text-lg text-gray-200">
                  {t('gdpr.whatIsText')}
                </p>
              </div>

              <div className="bg-dark-100 rounded-xl p-4 mb-6 border border-scale-blue/30">
                <h2 className="text-xl sm:text-2xl font-semibold text-scale-purple mt-6 mb-3 sm:mt-8 sm:mb-4">
                  {t('gdpr.principlesTitle')}
                </h2>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>
                    <span className="font-bold text-scale-blue">{t('gdpr.principle1')}</span>{' '}
                    {t('gdpr.principle1Text')}
                  </li>
                  <li>
                    <span className="font-bold text-scale-blue">{t('gdpr.principle2')}</span>{' '}
                    {t('gdpr.principle2Text')}
                  </li>
                  <li>
                    <span className="font-bold text-scale-blue">{t('gdpr.principle3')}</span>{' '}
                    {t('gdpr.principle3Text')}
                  </li>
                  <li>
                    <span className="font-bold text-scale-blue">{t('gdpr.principle4')}</span>{' '}
                    {t('gdpr.principle4Text')}
                  </li>
                  <li>
                    <span className="font-bold text-scale-blue">{t('gdpr.principle5')}</span>{' '}
                    {t('gdpr.principle5Text')}
                  </li>
                  <li>
                    <span className="font-bold text-scale-blue">{t('gdpr.principle6')}</span>{' '}
                    {t('gdpr.principle6Text')}
                  </li>
                </ul>
              </div>

              <div className="bg-dark-100 rounded-xl p-4 mb-6 border border-scale-blue/30">
                <h2 className="text-xl sm:text-2xl font-semibold text-scale-purple mt-6 mb-3 sm:mt-8 sm:mb-4">
                  {t('gdpr.dataCollectedTitle')}
                </h2>
                <p>
                  {t('gdpr.dataCollectedText')}{' '}
                  <span className="font-semibold text-scale-purple">
                    {t('gdpr.dataCollectedHighlight')}
                  </span>
                  {t('gdpr.dataCollectedText2')}
                </p>
              </div>

              <div className="bg-dark-100 rounded-xl p-4 mb-6 border border-scale-purple/30">
                <h2 className="text-xl sm:text-2xl font-semibold text-scale-purple mt-6 mb-3 sm:mt-8 sm:mb-4">
                  {t('gdpr.rightsTitle')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-dark-100 rounded-xl p-4 border border-scale-purple/20">
                    <ul className="space-y-2">
                      <li>
                        <span className="font-bold text-scale-blue">{t('gdpr.right1')}</span>{' '}
                        {t('gdpr.right1Text')}
                      </li>
                      <li>
                        <span className="font-bold text-scale-blue">{t('gdpr.right2')}</span>{' '}
                        {t('gdpr.right2Text')}
                      </li>
                      <li>
                        <span className="font-bold text-scale-blue">{t('gdpr.right3')}</span>{' '}
                        {t('gdpr.right3Text')}
                      </li>
                    </ul>
                  </div>
                  <div className="bg-dark-100 rounded-xl p-4 border border-scale-blue/20">
                    <ul className="space-y-2">
                      <li>
                        <span className="font-bold text-scale-blue">{t('gdpr.right4')}</span>{' '}
                        {t('gdpr.right4Text')}
                      </li>
                      <li>
                        <span className="font-bold text-scale-blue">{t('gdpr.right5')}</span>{' '}
                        {t('gdpr.right5Text')}
                      </li>
                      <li>
                        <span className="font-bold text-scale-blue">{t('gdpr.right6')}</span>{' '}
                        {t('gdpr.right6Text')}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-dark-100 rounded-xl p-4 mb-6 border border-scale-purple/30">
                <h2 className="text-xl sm:text-2xl font-semibold text-scale-purple mt-6 mb-3 sm:mt-8 sm:mb-4">
                  {t('gdpr.securityTitle')}
                </h2>
                <p>
                  {t('gdpr.securityText')}{' '}
                  <span className="font-semibold text-scale-purple">
                    {t('gdpr.securityHighlight')}
                  </span>{' '}
                  {t('gdpr.securityText2')}
                </p>
              </div>

              <div className="bg-dark-100 rounded-xl p-4 mb-6 border border-scale-blue/30">
                <h2 className="text-xl sm:text-2xl font-semibold text-scale-purple mt-6 mb-3 sm:mt-8 sm:mb-4">
                  {t('gdpr.contactTitle')}
                </h2>
                <p>
                  {t('gdpr.contactText')}{' '}
                  <a 
                    href={`mailto:${t('gdpr.contactEmail')}`}
                    className="text-scale-purple hover:underline"
                  >
                    {t('gdpr.contactEmail')}
                  </a>
                  {t('gdpr.contactText2')}
                </p>
              </div>

              <hr />
              <p className="mt-8 text-center text-gray-400">
                {t('gdpr.lastUpdateLabel')}{' '}
                <span className="text-scale-purple font-semibold">01/10/2025</span>
                <br />
                <span className="font-bold text-scale-blue">Netovate OÜ</span> &mdash;{' '}
                {t('gdpr.companyCommitment')}
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}