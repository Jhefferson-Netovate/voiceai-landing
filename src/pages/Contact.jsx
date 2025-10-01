import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
  <div className="min-h-screen bg-black py-24 px-4">
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contacta con <span className="text-[#0F52BA]">Netovate OU</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a transformar tu negocio con automatización inteligente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-dark-100 p-6 rounded-xl shadow-sm text-center">
            <PhoneIcon className="w-8 h-8 text-[#0F52BA] mx-auto mb-4" />
            <h3 className="font-semibold text-white mb-2">Teléfono</h3>
            <p className="text-gray-400">+372 XXX XXXX</p>
          </div>
          
          <div className="bg-dark-100 p-6 rounded-xl shadow-sm text-center">
            <EnvelopeIcon className="w-8 h-8 text-[#0F52BA] mx-auto mb-4" />
            <h3 className="font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400">hello@netovate.eu</p>
          </div>
          
          <div className="bg-dark-100 p-6 rounded-xl shadow-sm text-center">
            <MapPinIcon className="w-8 h-8 text-[#0F52BA] mx-auto mb-4" />
            <h3 className="font-semibold text-white mb-2">Oficina</h3>
            <p className="text-gray-400">Tallin, Estonia</p>
          </div>
        </div>

  <div className="bg-dark-100 rounded-2xl shadow-lg p-8 md:p-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}