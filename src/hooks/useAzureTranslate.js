import { useState } from 'react';

export const useAzureTranslate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const translate = async (text, targetLanguage) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text,
          targetLanguage: targetLanguage
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Error en la traducción');
      }

      return data.translatedText;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { translate, loading, error };
};
