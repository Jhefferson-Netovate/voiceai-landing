import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeProvider';

export default function Cookies() {
  const { prefersReducedMotion } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('cookies.title')}
            </h1>
            <p className="text-gray-400 mb-8">
              {t('cookies.lastUpdate')}
            </p>

            <div className="prose prose-invert max-w-none">
              <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t('cookies.whatAreTitle')}
                </h2>
                <p className="text-gray-300">
                  {t('cookies.whatAreText')}
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t('cookies.typesTitle')}
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t('cookies.necessaryTitle')}
                    </h3>
                    <p className="text-gray-300">
                      {t('cookies.necessaryDesc')}
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                      <li>{t('cookies.necessaryItem1')}</li>
                      <li>{t('cookies.necessaryItem2')}</li>
                      <li>{t('cookies.necessaryItem3')}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t('cookies.analyticsTitle')}
                    </h3>
                    <p className="text-gray-300">
                      {t('cookies.analyticsDesc')}
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                      <li>{t('cookies.analyticsItem1')}</li>
                      <li>{t('cookies.analyticsItem2')}</li>
                      <li>{t('cookies.analyticsItem3')}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t('cookies.marketingTitle')}
                    </h3>
                    <p className="text-gray-300">
                      {t('cookies.marketingDesc')}
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                      <li>{t('cookies.marketingItem1')}</li>
                      <li>{t('cookies.marketingItem2')}</li>
                      <li>{t('cookies.marketingItem3')}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t('cookies.managementTitle')}
                </h2>
                <p className="text-gray-300 mb-4">
                  {t('cookies.managementText')}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t('cookies.managementItem1')}</li>
                  <li>{t('cookies.managementItem2')}</li>
                  <li>
                    {t('cookies.managementItem3')}{' '}
                    <a href={`mailto:${t('cookies.managementEmail')}`} className="text-purple-400 hover:text-purple-300">
                      {t('cookies.managementEmail')}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                <p className="text-sm text-blue-300">
                  <strong>💡 {t('cookies.noteLabel')}</strong> {t('cookies.noteText')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
