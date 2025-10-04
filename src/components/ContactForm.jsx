import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // ⬅️ AÑADIR
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useScrollAnimation } from '../hooks/useOptimizedAnimation';



export default function ContactForm() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useTranslation(); // ⬅️ AÑADIR
  const headerAnimation = useScrollAnimation({ type: 'fade' });
  const formAnimation = useScrollAnimation({ type: 'slide', delay: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    // Simular envío (aquí integrarías con tu backend)
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      
      // Resetear mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: false });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="relative py-20 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10" />
      
      <div className="container-scale relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            {...headerAnimation}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('contact.title')} {/* ⬅️ TRADUCCIÓN */}
            </h2>
            <p className="text-xl text-gray-400">
              {t('contact.subtitle')} {/* ⬅️ TRADUCCIÓN */}
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
             className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12"
             {...formAnimation}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  {t('contact.nameLabel')} {/* ⬅️ TRADUCCIÓN */}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.namePlaceholder')} /* ⬅️ TRADUCCIÓN */
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  {t('contact.emailLabel')} {/* ⬅️ TRADUCCIÓN */}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.emailPlaceholder')} /* ⬅️ TRADUCCIÓN */
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  {t('contact.phoneLabel')} {/* ⬅️ TRADUCCIÓN */}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.phonePlaceholder')} /* ⬅️ TRADUCCIÓN */
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>

              {/* Empresa */}
              <div>
                <label htmlFor="company" className="block text-white font-medium mb-2">
                  {t('contact.companyLabel')} {/* ⬅️ TRADUCCIÓN */}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('contact.companyPlaceholder')} /* ⬅️ TRADUCCIÓN */
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  {t('contact.messageLabel')} {/* ⬅️ TRADUCCIÓN */}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder={t('contact.messagePlaceholder')} /* ⬅️ TRADUCCIÓN */
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                />
              </div>

              {/* Botón Submit */}
              <motion.button
                type="submit"
                disabled={status.submitting}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  status.submitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl'
                } text-white`}
                whileHover={prefersReducedMotion || status.submitting ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion || status.submitting ? {} : { scale: 0.98 }}
              >
                {status.submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    {t('contact.sending')} {/* ⬅️ TRADUCCIÓN */}
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-5 h-5" />
                    {t('contact.sendButton')} {/* ⬅️ TRADUCCIÓN */}
                  </>
                )}
              </motion.button>

              {/* Mensajes de estado */}
              {status.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg text-center"
                >
                  {t('contact.successMessage')} {/* ⬅️ TRADUCCIÓN */}
                </motion.div>
              )}

              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-center"
                >
                  {t('contact.errorMessage')} {/* ⬅️ TRADUCCIÓN */}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Información de contacto adicional */}
          <motion.div
            className="mt-12 text-center"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
            transition={prefersReducedMotion ? {} : { duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-4">
              O escríbenos directamente a:
            </p>
            <a 
              href="mailto:info@netovate.com" 
              className="text-purple-400 hover:text-purple-300 text-lg font-semibold transition-colors"
            >
              info@netovate.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}