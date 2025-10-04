import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black py-24 px-4">
      <Header />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scale-purple to-scale-blue rounded-full mb-6">
            <DocumentTextIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('terms.title')}
          </h1>
          <p className="text-gray-400">
            {t('terms.lastUpdate')} {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-dark-100 rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('terms.section1Title')}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section1Text')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('terms.section2Title')}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section2Text')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('terms.section3Title')}
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">{t('terms.section3Sub1')}</strong>{' '}
                {t('terms.section3Sub1Text')}
              </p>
              <p>
                <strong className="text-white">{t('terms.section3Sub2')}</strong>{' '}
                {t('terms.section3Sub2Text')}
              </p>
              <p>
                <strong className="text-white">{t('terms.section3Sub3')}</strong>{' '}
                {t('terms.section3Sub3Text')}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('terms.section4Title')}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('terms.section4Text')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>{t('terms.section4Point1')}</li>
              <li>{t('terms.section4Point2')}</li>
              <li>{t('terms.section4Point3')}</li>
              <li>{t('terms.section4Point4')}</li>
              <li>{t('terms.section4Point5')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('terms.section5Title')}
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">{t('terms.section5Sub1')}</strong>{' '}
                {t('terms.section5Sub1Text')}
              </p>
              <p>
                <strong className="text-white">{t('terms.section5Sub2')}</strong>{' '}
                {t('terms.section5Sub2Text')}
              </p>
              <p>
                <strong className="text-white">{t('terms.section5Sub3')}</strong>{' '}
                {t('terms.section5Sub3Text')}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('terms.section6Title')}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section6Text')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('terms.section7Title')}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section7Text')}{' '}
              <a href="/privacy" className="text-scale-purple hover:underline">
                {t('terms.section7Link')}
              </a>
              {t('terms.section7Text2')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('terms.section8Title')}
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">{t('terms.section8Sub1')}</strong>{' '}
                {t('terms.section8Sub1Text')}
              </p>
              <p>
                <strong className="text-white">{t('terms.section8Sub2')}</strong>{' '}
                {t('terms.section8Sub2Text')}
              </p>
              <p>
                <strong className="text-white">{t('terms.section8Sub3')}</strong>{' '}
                {t('terms.section8Sub3Text')}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('terms.section9Title')}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section9Text')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('terms.section10Title')}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section10Text')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('terms.section11Title')}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section11Text')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('terms.section12Title')}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t('terms.section12Text')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('terms.section13Title')}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('terms.section13Text')}
            </p>
            <div className="bg-dark-200 rounded-lg p-6 border border-gray-800">
              <p className="text-white font-semibold mb-2">Netovate OU</p>
              <p className="text-gray-300 mb-1">Email: legal@netovateou.com</p>
              <p className="text-gray-300 mb-1">Address: Tallinn, Estonia</p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center text-scale-purple hover:text-scale-blue font-semibold transition-colors"
          >
            ← {t('terms.backHome')}
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}