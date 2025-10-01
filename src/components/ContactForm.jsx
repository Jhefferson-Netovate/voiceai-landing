import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { GAEvents } from '../config/analytics';

/**
 * FORMULARIO DE CONTACTO - NETOVATE OU
 * ======================================
 * Formulario con validación completa usando Formik + Yup
 * CONTRASTE CORREGIDO PARA MODO OSCURO
 */

// Esquema de validación con Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre es demasiado largo')
    .required('El nombre es obligatorio'),
  
  email: Yup.string()
    .email('Email inválido')
    .required('El email es obligatorio'),
  
  phone: Yup.string()
    .matches(
      /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      'Número de teléfono inválido'
    )
    .required('El teléfono es obligatorio'),
  
  company: Yup.string()
    .min(2, 'El nombre de la empresa debe tener al menos 2 caracteres')
    .max(100, 'El nombre de la empresa es demasiado largo'),
  
  message: Yup.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje es demasiado largo')
    .required('El mensaje es obligatorio'),
  
  acceptsMarketing: Yup.boolean()
});

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Valores iniciales del formulario
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    acceptsMarketing: false
  };

  // Manejar envío del formulario
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // IMPORTANTE: Aquí debes reemplazar con tu endpoint real
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Éxito
      setSubmitStatus('success');
      resetForm();
      
      // Tracking de conversión
      GAEvents.submitForm('contact_form');
      
      // Reiniciar estado después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus('error');
      
      // Reiniciar estado después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre completo <span className="text-red-400">*</span>
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                  errors.name && touched.name
                    ? 'border-red-500/50 focus:ring-red-500/20'
                    : 'border-white/10 focus:ring-purple-500/20'
                } text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:border-purple-500 transition-all backdrop-blur-sm`}
                placeholder="Juan Pérez"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="mt-1 text-sm text-red-400 flex items-center"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email corporativo <span className="text-red-400">*</span>
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                  errors.email && touched.email
                    ? 'border-red-500/50 focus:ring-red-500/20'
                    : 'border-white/10 focus:ring-purple-500/20'
                } text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:border-purple-500 transition-all backdrop-blur-sm`}
                placeholder="juan@empresa.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="mt-1 text-sm text-red-400"
              />
            </div>

            {/* Teléfono y Empresa en dos columnas, apilados en móviles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Teléfono */}
              <div className="w-full">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono <span className="text-red-400">*</span>
                </label>
                <Field
                  type="tel"
                  name="phone"
                  id="phone"
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                    errors.phone && touched.phone
                      ? 'border-red-500/50 focus:ring-red-500/20'
                      : 'border-white/10 focus:ring-purple-500/20'
                  } text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:border-purple-500 transition-all backdrop-blur-sm`}
                  placeholder="+34 600 123 456"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="mt-1 text-sm text-red-400"
                />
              </div>

              {/* Empresa */}
              <div className="w-full">
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Empresa
                </label>
                <Field
                  type="text"
                  name="company"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all backdrop-blur-sm"
                  placeholder="Netovate OU"
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="mt-1 text-sm text-red-400"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mensaje <span className="text-red-400">*</span>
              </label>
              <Field
                as="textarea"
                name="message"
                id="message"
                rows="5"
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                  errors.message && touched.message
                    ? 'border-red-500/50 focus:ring-red-500/20'
                    : 'border-white/10 focus:ring-purple-500/20'
                } text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:border-purple-500 transition-all resize-none backdrop-blur-sm`}
                placeholder="Cuéntanos cómo podemos ayudarte..."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="mt-1 text-sm text-red-400"
              />
            </div>

            {/* Checkbox Marketing */}
            <div className="flex items-start">
              <Field
                type="checkbox"
                name="acceptsMarketing"
                id="acceptsMarketing"
                className="mt-1 h-4 w-4 text-purple-500 focus:ring-purple-500/20 border-white/20 rounded bg-white/5"
              />
              <label htmlFor="acceptsMarketing" className="ml-2 text-sm text-gray-400">
                Acepto recibir comunicaciones comerciales de Netovate OU
              </label>
            </div>

            {/* Botón Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>

            {/* Mensajes de estado */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-start backdrop-blur-sm"
                >
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-400">
                      ¡Mensaje enviado con éxito!
                    </p>
                    <p className="text-sm text-green-300/80 mt-1">
                      Te responderemos en menos de 24 horas.
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start backdrop-blur-sm"
                >
                  <ExclamationCircleIcon className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-400">
                      Error al enviar el mensaje
                    </p>
                    <p className="text-sm text-red-300/80 mt-1">
                      Por favor, inténtalo de nuevo o contacta por email.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Nota de privacidad */}
            <p className="text-xs text-gray-500 text-center">
              Al enviar este formulario, aceptas nuestra{' '}
              <a href="/privacidad" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors">
                Política de Privacidad
              </a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}