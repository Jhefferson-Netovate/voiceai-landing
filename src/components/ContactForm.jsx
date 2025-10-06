import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

export default function ContactForm() {
  const { t } = useTranslation();
  
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
            
            {/* Nombre */}
            <div>
              <label 
                htmlFor="name" 
                className="block text-white font-medium mb-2 text-xs sm:text-sm md:text-base"
              >
                {t('contact.nameLabel')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact.namePlaceholder')}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-white font-medium mb-2 text-xs sm:text-sm md:text-base"
              >
                {t('contact.emailLabel')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.emailPlaceholder')}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label 
                htmlFor="phone" 
                className="block text-white font-medium mb-2 text-xs sm:text-sm md:text-base"
              >
                {t('contact.phoneLabel')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('contact.phonePlaceholder')}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>

            {/* Empresa */}
            <div>
              <label 
                htmlFor="company" 
                className="block text-white font-medium mb-2 text-xs sm:text-sm md:text-base"
              >
                {t('contact.companyLabel')}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t('contact.companyPlaceholder')}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label 
                htmlFor="message" 
                className="block text-white font-medium mb-2 text-xs sm:text-sm md:text-base"
              >
                {t('contact.messageLabel')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder={t('contact.messagePlaceholder')}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
              />
            </div>

            {/* Botón Submit */}
            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base ${
                status.submitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl'
              } text-white`}
            >
              {status.submitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  {t('contact.sending')}
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  {t('contact.sendButton')}
                </>
              )}
            </button>

            {/* Mensajes de estado */}
            {status.submitted && (
              <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-center text-xs sm:text-sm md:text-base">
                {t('contact.successMessage')}
              </div>
            )}

            {status.error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-center text-xs sm:text-sm md:text-base">
                {t('contact.errorMessage')}
              </div>
            )}
          </form>
        </div>

        {/* Información de contacto adicional */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-center">
          <p className="text-gray-400 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
            {t('contact.orWriteUs')}
          </p>
          <a 
            href="mailto:info@netovateou.com" 
            className="text-purple-400 hover:text-purple-300 text-sm sm:text-base md:text-lg font-semibold transition-colors inline-block break-all"
          >
            info@netovateou.com
          </a>
        </div>
    </div>
  );
}