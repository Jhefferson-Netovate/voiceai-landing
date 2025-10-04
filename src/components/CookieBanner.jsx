import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import { XMarkIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function CookieBanner() {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 2000);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      activateCookies(savedPreferences);
    }
  }, []);

  const activateCookies = (prefs) => {
    if (prefs.analytics && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }

    if (prefs.marketing && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    }
  };

  const acceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    savePreferences(allPreferences);
  };

  const rejectAll = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    savePreferences(minimalPreferences);
  };

  const savePreferences = (prefs) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    setPreferences(prefs);
    activateCookies(prefs);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-black/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            {!showPreferences ? (
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t('cookies.title')}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t('cookies.description')}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowBanner(false)}
                    className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="primary"
                    onClick={acceptAll}
                    className="flex-1"
                  >
                    {t('cookies.acceptAll')}
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={rejectAll}
                    className="flex-1"
                  >
                    {t('cookies.rejectAll')}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowPreferences(true)}
                    className="flex-1"
                  >
                    {t('cookies.customize')}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  {t('cookies.preferencesTitle')}
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">
                        {t('cookies.necessaryTitle')}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {t('cookies.necessaryDesc')}
                      </p>
                    </div>
                    <div className="ml-4">
                      <span className="text-xs text-gray-500">{t('cookies.alwaysActive')}</span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">
                        {t('cookies.analyticsTitle')}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {t('cookies.analyticsDesc')}
                      </p>
                    </div>
                    <label className="ml-4 relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => togglePreference('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>

                  <div className="flex items-start justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">
                        {t('cookies.marketingTitle')}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {t('cookies.marketingDesc')}
                      </p>
                    </div>
                    <label className="ml-4 relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => togglePreference('marketing')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="secondary"
                    onClick={() => setShowPreferences(false)}
                    className="flex-1"
                  >
                    {t('cookies.back')}
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => savePreferences(preferences)}
                    className="flex-1"
                  >
                    {t('cookies.savePreferences')}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
