import React from 'react';
import Header from '../components/Header';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Privacy() {
  return (
  <div className="min-h-screen bg-black py-24 px-4">
      <Header />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scale-purple to-scale-blue rounded-full mb-6">
            <ShieldCheckIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Política de Privacidad
          </h1>
          <p className="text-gray-400">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>

        {/* Content */}
  <div className="bg-dark-100 rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              En Netovate OÜ (operado por Netovate OU), recopilamos la siguiente información:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
              <li>Información de contacto: nombre, email, teléfono, empresa</li>
              <li>Información de uso: páginas visitadas, tiempo en el sitio, clics</li>
              <li>Información técnica: dirección IP, navegador, sistema operativo</li>
              <li>Cookies y tecnologías similares para mejorar la experiencia</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Cómo Usamos tu Información</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Utilizamos tu información para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Comunicarnos contigo sobre tu cuenta y actualizaciones</li>
              <li>Enviar información de marketing (con tu consentimiento)</li>
              <li>Analizar el uso del sitio para mejorarlo</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Base Legal (GDPR)</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Procesamos tus datos personales basándonos en:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
              <li><strong>Consentimiento:</strong> Para comunicaciones de marketing</li>
              <li><strong>Ejecución de contrato:</strong> Para proporcionar servicios</li>
              <li><strong>Interés legítimo:</strong> Para análisis y mejoras</li>
              <li><strong>Obligación legal:</strong> Para cumplir con la ley</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Compartir Información</h2>
            <p className="text-gray-400 leading-relaxed">
              No vendemos tu información personal. Podemos compartirla con:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4 mt-4">
              <li>Proveedores de servicios (hosting, analytics, CRM)</li>
              <li>Autoridades legales cuando sea requerido por ley</li>
              <li>Socios comerciales con tu consentimiento explícito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Tus Derechos (GDPR)</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Tienes derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
              <li><strong>Acceso:</strong> Solicitar una copia de tus datos</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
              <li><strong>Eliminación:</strong> Solicitar la eliminación de tus datos</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos</li>
              <li><strong>Restricción:</strong> Limitar el uso de tus datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Seguridad de Datos</h2>
            <p className="text-gray-400 leading-relaxed">
              Implementamos medidas técnicas y organizativas para proteger tus datos, incluyendo:
              encriptación SSL/TLS, acceso restringido, auditorías regulares y cumplimiento ISO 27001.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies</h2>
            <p className="text-gray-400 leading-relaxed">
              Utilizamos cookies esenciales, analíticas y de marketing. Puedes gestionar tus preferencias
              en nuestro banner de cookies. Consulta nuestra{' '}
              <a href="/cookies" className="text-scale-purple hover:underline">
                Política de Cookies
              </a>
              {' '}para más información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Retención de Datos</h2>
            <p className="text-gray-600 leading-relaxed">
              Conservamos tus datos solo durante el tiempo necesario para cumplir con los propósitos
              descritos, o según lo requiera la ley (generalmente 5-7 años para datos fiscales).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Transferencias Internacionales</h2>
            <p className="text-gray-600 leading-relaxed">
              Algunos proveedores pueden estar fuera de la UE. En estos casos, aseguramos protecciones
              adecuadas mediante cláusulas contractuales estándar aprobadas por la UE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contacto</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Para ejercer tus derechos o hacer preguntas sobre esta política:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="text-gray-900 font-semibold mb-2">Netovate OU</p>
              <p className="text-gray-600 mb-1">Email: privacy@netovate.eu</p>
              <p className="text-gray-600 mb-1">Dirección: Tallin, Estonia</p>
              <p className="text-gray-600">Registro: [Número de registro]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Cambios a esta Política</h2>
            <p className="text-gray-600 leading-relaxed">
              Podemos actualizar esta política ocasionalmente. Te notificaremos de cambios significativos
              por email o mediante un aviso en el sitio web. La fecha de última actualización se muestra
              al inicio del documento.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center text-scale-purple hover:text-scale-blue font-semibold transition-colors"
          >
            ← Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  );
}