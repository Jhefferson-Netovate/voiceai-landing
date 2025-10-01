import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Sobre <span className="text-[#0F52BA]">Netovate OU</span>
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Netovate OU es una empresa tecnológica líder en soluciones de automatización 
            empresarial e inteligencia artificial conversacional, fundada con la misión de 
            democratizar el acceso a tecnologías avanzadas para empresas de todos los tamaños.
          </p>

          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
            <p className="text-gray-600 leading-relaxed">
              Transformar la manera en que las empresas se comunican con sus clientes mediante 
              soluciones de IA accesibles, éticas y altamente efectivas que generen valor real 
              y medible.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#0F52BA] font-bold mr-2">→</span>
                <span><strong>Innovación continua:</strong> Siempre a la vanguardia tecnológica</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F52BA] font-bold mr-2">→</span>
                <span><strong>Transparencia total:</strong> Sin costes ocultos ni sorpresas</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F52BA] font-bold mr-2">→</span>
                <span><strong>Compromiso con el cliente:</strong> Tu éxito es nuestro éxito</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F52BA] font-bold mr-2">→</span>
                <span><strong>Ética en IA:</strong> Tecnología responsable y sostenible</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}