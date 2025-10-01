import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Gdpr() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-scale-purple to-scale-blue rounded-full mb-4 sm:mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                Cumplimiento GDPR
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400">
                Nuestro compromiso con la protección de tus datos personales y la transparencia en el tratamiento de la información.
              </p>
            </div>
            <section className="prose prose-invert max-w-none text-gray-300 mx-auto text-base sm:text-lg md:text-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-scale-purple mb-3 sm:mb-4">¿Qué es el GDPR?</h2>
              <div className="bg-dark-100 rounded-xl p-4 mb-6 border border-scale-purple/30">
                <p className="text-lg text-gray-200">El Reglamento General de Protección de Datos (GDPR) es la normativa europea que regula el tratamiento de datos personales de los ciudadanos de la Unión Europea. Su objetivo es proteger la privacidad y los derechos de los usuarios, garantizando un uso responsable y seguro de la información.</p>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-scale-purple mt-6 mb-3 sm:mt-8 sm:mb-4">Principios de protección de datos</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><span className="font-bold text-scale-blue">Licitud, lealtad y transparencia:</span> Tratamos tus datos de forma legal, justa y transparente.</li>
                <li><span className="font-bold text-scale-blue">Limitación de la finalidad:</span> Solo utilizamos tus datos para los fines específicos para los que fueron recogidos.</li>
                <li><span className="font-bold text-scale-blue">Minimización de datos:</span> Recogemos únicamente los datos necesarios para cada propósito.</li>
                <li><span className="font-bold text-scale-blue">Exactitud:</span> Mantenemos tus datos actualizados y corregimos cualquier inexactitud.</li>
                <li><span className="font-bold text-scale-blue">Limitación del plazo de conservación:</span> Conservamos tus datos solo el tiempo necesario.</li>
                <li><span className="font-bold text-scale-blue">Integridad y confidencialidad:</span> Protegemos tus datos mediante medidas de seguridad técnicas y organizativas.</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-scale-purple mt-6 mb-3 sm:mt-8 sm:mb-4">¿Qué datos recogemos?</h2>
              <div className="bg-dark-100 rounded-xl p-4 mb-6 border border-scale-blue/30">
                <p>Recopilamos datos personales como <span className="font-semibold text-scale-purple">nombre, correo electrónico, teléfono y empresa</span>, únicamente cuando tú los proporcionas a través de formularios de contacto, registro o contratación de servicios.</p>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-scale-purple mt-6 mb-3 sm:mt-8 sm:mb-4">¿Para qué usamos tus datos?</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Gestionar solicitudes y consultas.</li>
                <li>Prestar servicios contratados.</li>
                <li>Enviar información relevante sobre productos, novedades y eventos <span className="italic">(solo si lo autorizas)</span>.</li>
                <li>Mejorar nuestros servicios y experiencia de usuario.</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-scale-purple mt-6 mb-3 sm:mt-8 sm:mb-4">Tus derechos como usuario</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-dark-100 rounded-xl p-4 border border-scale-purple/20">
                  <ul className="space-y-2">
                    <li><span className="font-bold text-scale-blue">Acceso:</span> Puedes solicitar qué datos tuyos tenemos y cómo los usamos.</li>
                    <li><span className="font-bold text-scale-blue">Rectificación:</span> Puedes corregir datos inexactos o incompletos.</li>
                    <li><span className="font-bold text-scale-blue">Supresión:</span> Puedes pedir que eliminemos tus datos cuando ya no sean necesarios.</li>
                  </ul>
                </div>
                <div className="bg-dark-100 rounded-xl p-4 border border-scale-blue/20">
                  <ul className="space-y-2">
                    <li><span className="font-bold text-scale-blue">Limitación:</span> Puedes solicitar que limitemos el tratamiento de tus datos en ciertos casos.</li>
                    <li><span className="font-bold text-scale-blue">Portabilidad:</span> Puedes recibir tus datos en formato electrónico y transferirlos a otro proveedor.</li>
                    <li><span className="font-bold text-scale-blue">Oposición:</span> Puedes oponerte al tratamiento de tus datos para fines específicos.</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-scale-purple mt-6 mb-3 sm:mt-8 sm:mb-4">Medidas de seguridad</h2>
              <div className="bg-dark-100 rounded-xl p-4 mb-6 border border-scale-purple/30">
                <p>En Netovate OU aplicamos <span className="font-semibold text-scale-purple">medidas técnicas y organizativas avanzadas</span> para proteger tus datos: encriptación, acceso restringido, auditorías periódicas y formación continua de nuestro equipo.</p>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-scale-purple mt-6 mb-3 sm:mt-8 sm:mb-4">Transferencias internacionales</h2>
              <div className="bg-dark-100 rounded-xl p-4 mb-6 border border-scale-blue/30">
                <p>Si tus datos se transfieren fuera del Espacio Económico Europeo, garantizamos que se hará bajo mecanismos legales adecuados (<span className="font-semibold text-scale-purple">cláusulas contractuales tipo, Privacy Shield, etc.</span>).</p>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-scale-purple mt-6 mb-3 sm:mt-8 sm:mb-4">Contacto y reclamaciones</h2>
              <div className="bg-dark-100 rounded-xl p-4 mb-6 border border-scale-purple/30">
                <p>Si tienes dudas, deseas ejercer tus derechos o presentar una reclamación, puedes contactarnos en <a href="mailto:privacidad@netovate.com" className="text-scale-purple hover:underline">privacidad@netovate.com</a>.<br />
                También puedes dirigirte a la Agencia Española de Protección de Datos (AEPD) si consideras que tus derechos no han sido respetados.</p>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-scale-purple mt-6 mb-3 sm:mt-8 sm:mb-4">Actualizaciones de esta política</h2>
              <div className="bg-dark-100 rounded-xl p-4 mb-6 border border-scale-blue/30">
                <p>Esta página puede actualizarse periódicamente para reflejar cambios legales o mejoras en nuestros procesos. Te recomendamos revisarla regularmente.</p>
              </div>

              <hr />
              <p className="mt-8 text-center text-gray-400">
                Última actualización: <span className="text-scale-purple font-semibold">01/10/2025</span><br />
                <span className="font-bold text-scale-blue">Netovate OU</span> &mdash; Comprometidos con tu privacidad.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}