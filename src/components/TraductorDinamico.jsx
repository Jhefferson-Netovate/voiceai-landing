import { useState } from 'react';
import { useAzureTranslate } from '../hooks/useAzureTranslate';

function TraductorDinamico() {
  const [textoOriginal, setTextoOriginal] = useState('');
  const [textoTraducido, setTextoTraducido] = useState('');
  const { translate, loading, error } = useAzureTranslate();

  const handleTraducir = async () => {
    const resultado = await translate(textoOriginal, 'en');
    if (resultado) {
      setTextoTraducido(resultado);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <textarea 
        className="w-full p-2 border rounded mb-2"
        value={textoOriginal}
        onChange={(e) => setTextoOriginal(e.target.value)}
        placeholder="Escribe algo..."
      />
      <button 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
        onClick={handleTraducir} 
        disabled={loading}
      >
        {loading ? 'Traduciendo...' : 'Traducir'}
      </button>
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      {textoTraducido && <p className="mt-2">Traducción: {textoTraducido}</p>}
    </div>
  );
}

export default TraductorDinamico;
