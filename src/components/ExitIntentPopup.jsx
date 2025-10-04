import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import { XMarkIcon, GiftIcon } from '@heroicons/react/24/outline';
import { GAEvents } from '../config/analytics';

export default function ExitIntentPopup() {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('exit-popup-shown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    let activated = false;
    let handleMouseLeave;
    const activationTimer = setTimeout(() => {
      handleMouseLeave = (e) => {
        if (activated) return;
        if (e.clientY <= 0 && !hasShown) {
          setShowPopup(true);
          setHasShown(true);
          sessionStorage.setItem('exit-popup-shown', 'true');
          activated = true;
          document.removeEventListener('mouseleave', handleMouseLeave);
          GAEvents.trackEvent('exit_intent_triggered', {
            event_category: 'engagement',
            event_label: 'Exit Intent Popup'
          });
        }
      };
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(activationTimer);
      if (handleMouseLeave) {
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [hasShown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    GAEvents.trackEvent('exit_intent_email_submitted', {
      event_category: 'conversion',
      event_label: 'Exit Intent Email'
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const handleClose = () => {
    setShowPopup(false);
    GAEvents.trackEvent('exit_intent_closed', {
      event_category: 'engagement'
    });
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {!submitSuccess ? (
                <div className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <GiftIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
                    {t('exitPopup.title')}
                  </h2>
                  <p className="text-gray-600 text-center mb-6">
                    {t('exitPopup.subtitle')}
                  </p>

                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-center text-gray-900 font-semibold text-xl mb-2">
                      {t('exitPopup.offer')}
                    </p>
                    <p className="text-center text-gray-600 text-sm">
                      {t('exitPopup.offerDesc')}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('exitPopup.emailPlaceholder')}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t('exitPopup.submitting') : t('exitPopup.submitButton')}
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-700 mb-3 text-center">
                      {t('exitPopup.alsoReceive')}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {t('exitPopup.benefit1')}
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {t('exitPopup.benefit2')}
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {t('exitPopup.benefit3')}
                      </li>
                    </ul>
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    {t('exitPopup.privacyNote')}
                  </p>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('exitPopup.successTitle')}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t('exitPopup.successMessage')}
                  </p>
                  <Button
                    variant="primary"
                    onClick={handleClose}
                    fullWidth
                  >
                    {t('exitPopup.close')}
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
  }