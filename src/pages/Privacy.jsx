import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black py-24 px-4">
      <Header />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scale-purple to-scale-blue rounded-full mb-6">
            <ShieldCheckIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('privacy.title')}
          </h1>
          <p className="text-gray-400">
            {t('privacy.lastUpdate')} {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-dark-100 rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.section1Title')}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              {t('privacy.section1Text')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
              <li>{t('privacy.section1Point1')}</li>
              <li>{t('privacy.section1Point2')}</li>
              <li>{t('privacy.section1Point3')}</li>
              <li>{t('privacy.section1Point4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.section2Title')}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              {t('privacy.section2Text')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
              <li>{t('privacy.section2Point1')}</li>
              <li>{t('privacy.section2Point2')}</li>
              <li>{t('privacy.section2Point3')}</li>
              <li>{t('privacy.section2Point4')}</li>
              <li>{t('privacy.section2Point5')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.section3Title')}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              {t('privacy.section3Text')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
              <li><strong>{t('privacy.section3Point1')}</strong></li>
              <li><strong>{t('privacy.section3Point2')}</strong></li>
              <li><strong>{t('privacy.section3Point3')}</strong></li>
              <li><strong>{t('privacy.section3Point4')}</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.section4Title')}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {t('privacy.section4Text')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4 mt-4">
              <li>{t('privacy.section4Point1')}</li>
              <li>{t('privacy.section4Point2')}</li>
              <li>{t('privacy.section4Point3')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.section5Title')}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              {t('privacy.section5Text')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
              <li><strong>{t('privacy.section5Point1')}</strong></li>
              <li><strong>{t('privacy.section5Point2')}</strong></li>
              <li><strong>{t('privacy.section5Point3')}</strong></li>
              <li><strong>{t('privacy.section5Point4')}</strong></li>
              <li><strong>{t('privacy.section5Point5')}</strong></li>
              <li><strong>{t('privacy.section5Point6')}</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.section6Title')}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {t('privacy.section6Text')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.section7Title')}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {t('privacy.section7Text')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.section8Title')}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t('privacy.section8Text')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.section9Title')}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t('privacy.section9Text')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.section10Title')}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('privacy.section10Text')}
            </p>
            <div className="bg-dark-200 rounded-lg p-6 border border-gray-800">
              <p className="text-white font-semibold mb-2">
                {t('privacy.contactCompany')}
              </p>
              <p className="text-gray-300 mb-1">{t('privacy.contactEmail')}</p>
              <p className="text-gray-300 mb-1">{t('privacy.contactAddress')}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.section11Title')}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t('privacy.section11Text')}
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center text-scale-purple hover:text-scale-blue font-semibold transition-colors"
          >
            ← {t('privacy.backHome')}
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}