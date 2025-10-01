import React from 'react';
import ContactForm from '../components/ContactForm';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contacta con <span className="text-[#0F52BA]">Netovate OU</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a transformar tu negocio con automatización inteligente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <PhoneIcon className="w-8 h-8 text-[#0F52BA] mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Teléfono</h3>
            <p className="text-gray-600">+372 XXX XXXX</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <EnvelopeIcon className="w-8 h-8 text-[#0F52BA] mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">hello@netovate.eu</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <MapPinIcon className="w-8 h-8 text-[#0F52BA] mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Oficina</h3>
            <p className="text-gray-600">Tallin, Estonia</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}