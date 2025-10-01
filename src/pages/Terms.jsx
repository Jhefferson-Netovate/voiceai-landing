import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

export default function Terms() {
  return (
    <div className="min-h-screen bg-black py-24 px-4">
      <Header />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-scale-purple to-scale-blue rounded-full mb-6">
            <DocumentTextIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-gray-400">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>

        <div className="bg-dark-100 rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-300 leading-relaxed">
              Al acceder y usar los servicios de Netovate OÜ ("Netovate", "nosotros", "nuestro"),
              aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo, no uses
              nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Descripción del Servicio</h2>
            <p className="text-gray-300 leading-relaxed">
              Netovate proporciona servicios de inteligencia artificial para automatización de llamadas
              telefónicas, incluyendo pero no limitado a: agentes virtuales, transcripción de llamadas,
              análisis de sentimientos y gestión de CRM.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Registro y Cuenta</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">3.1 Elegibilidad:</strong> Debes tener al menos 18
                años y capacidad legal para celebrar contratos.
              </p>
              <p>
                <strong className="text-white">3.2 Información Precisa:</strong> Debes proporcionar
                información veraz, actual y completa durante el registro.
              </p>
              <p>
                <strong className="text-white">3.3 Seguridad:</strong> Eres responsable de mantener
                la confidencialidad de tu cuenta y contraseña.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Precios y Pagos</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">4.1 Planes:</strong> Los precios están disponibles
                en nuestra página de precios y pueden cambiar con 30 días de aviso.
              </p>
              <p>
                <strong className="text-white">4.2 Facturación:</strong> Los cargos se facturan
                por adelantado mensual o anualmente.
              </p>
              <p>
                <strong className="text-white">4.3 Impuestos:</strong> Los precios no incluyen
                impuestos aplicables (IVA, GST, etc.).
              </p>
              <p>
                <strong className="text-white">4.4 Cancelación:</strong> Puedes cancelar en
                cualquier momento. Las cancelaciones surten efecto al final del período de facturación.
              </p>
              <p>
                <strong className="text-white">4.5 Reembolsos:</strong> No ofrecemos reembolsos
                por períodos parcialmente utilizados, excepto según lo requiera la ley.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Uso Aceptable</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Al usar nuestros servicios, aceptas NO:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Violar leyes o regulaciones aplicables</li>
              <li>Realizar llamadas spam o no solicitadas</li>
              <li>Usar el servicio para fraude, phishing o engaño</li>
              <li>Intentar acceder sin autorización a sistemas o datos</li>
              <li>Interferir con el funcionamiento del servicio</li>
              <li>Revender o redistribuir el servicio sin autorización</li>
              <li>Realizar ingeniería inversa del software</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Propiedad Intelectual</h2>
            <p className="text-gray-300 leading-relaxed">
              Todo el contenido, software, marcas comerciales y tecnología de Netovate OÜ son
              propiedad de Netovate OU y están protegidos por leyes de propiedad intelectual.
              Te otorgamos una licencia limitada, no exclusiva y revocable para usar el servicio
              según estos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Privacidad y Datos</h2>
            <p className="text-gray-300 leading-relaxed">
              El uso de nuestros servicios está sujeto a nuestra{' '}
              <a href="/privacy" className="text-scale-purple hover:underline">
                Política de Privacidad
              </a>
              . Cumplimos con GDPR y otras regulaciones de protección de datos aplicables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Garantías y Responsabilidades</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">8.1 Disponibilidad:</strong> Nos esforzamos por
                mantener un 99.9% de uptime, pero no garantizamos disponibilidad ininterrumpida.
              </p>
              <p>
                <strong className="text-white">8.2 Limitación de Responsabilidad:</strong> No
                seremos responsables de daños indirectos, incidentales o consecuentes derivados
                del uso del servicio.
              </p>
              <p>
                <strong className="text-white">8.3 Indemnización:</strong> Aceptas indemnizarnos
                contra reclamaciones derivadas de tu uso del servicio o violación de estos términos.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Modificaciones del Servicio</h2>
            <p className="text-gray-300 leading-relaxed">
              Nos reservamos el derecho de modificar, suspender o descontinuar cualquier parte del
              servicio en cualquier momento. Te notificaremos de cambios significativos con 30 días
              de anticipación cuando sea posible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Terminación</h2>
            <p className="text-gray-300 leading-relaxed">
              Podemos terminar o suspender tu acceso inmediatamente si violas estos términos. Tras
              la terminación, tus datos serán eliminados según nuestra política de retención, excepto
              cuando la ley requiera su conservación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Ley Aplicable</h2>
            <p className="text-gray-300 leading-relaxed">
              Estos términos se rigen por las leyes de Estonia. Cualquier disputa se resolverá en
              los tribunales de Tallin, Estonia. Para usuarios de la UE, se aplican también las
              protecciones del consumidor de tu país.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Contacto</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Para preguntas sobre estos términos:
            </p>
            <div className="bg-dark-200 rounded-lg p-6 border border-gray-800">
              <p className="text-white font-semibold mb-2">Netovate OU</p>
              <p className="text-gray-300 mb-1">Email: legal@netovate.eu</p>
              <p className="text-gray-300">Tallin, Estonia</p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center text-scale-purple hover:text-scale-blue font-semibold transition-colors"
          >
            ← Volver al Inicio
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}