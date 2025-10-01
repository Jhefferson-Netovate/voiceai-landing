/**
 * USE AZURE TRANSLATE HOOK - NETOVATE OU
 * =======================================
 * Hook personalizado de React para usar Azure Translate fácilmente
 * 
 * Uso:
 * const { translate, isLoading, error } = useAzureTranslate();
 * const result = await translate('Hello', 'en', 'es');
 */

import { useState, useCallback } from 'react';
import { translateText, translateBatch, detectLanguage } from '../services/azureTranslator';

/**
 * Hook principal para traducciones
 * 
 * @returns {Object} - Funciones y estado de traducción
 */
export function useAzureTranslate() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastTranslation, setLastTranslation] = useState(null);

  /**
   * Traduce un texto
   */
  const translate = useCallback(async (text, fromLang, toLang) => {
    if (!text) return '';

    setIsLoading(true);
    setError(null);

    try {
      const result = await translateText(text, fromLang, toLang);
      setLastTranslation({
        original: text,
        translated: result,
        from: fromLang,
        to: toLang,
        timestamp: new Date(),
      });
      return result;
    } catch (err) {
      const errorMessage = err.message || 'Error al traducir';
      setError(errorMessage);
      console.error('Error en useAzureTranslate:', err);
      return text; // Devolver texto original en caso de error
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Traduce múltiples textos
   */
  const translateMultiple = useCallback(async (texts, fromLang, toLang) => {
    if (!texts || texts.length === 0) return [];

    setIsLoading(true);
    setError(null);

    try {
      const results = await translateBatch(texts, fromLang, toLang);
      return results;
    } catch (err) {
      const errorMessage = err.message || 'Error al traducir múltiples textos';
      setError(errorMessage);
      console.error('Error en translateMultiple:', err);
      return texts; // Devolver textos originales en caso de error
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Detecta el idioma de un texto
   */
  const detect = useCallback(async (text) => {
    if (!text) return null;

    setIsLoading(true);
    setError(null);

    try {
      const language = await detectLanguage(text);
      return language;
    } catch (err) {
      const errorMessage = err.message || 'Error al detectar idioma';
      setError(errorMessage);
      console.error('Error en detect:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Resetear estado
   */
  const reset = useCallback(() => {
    setError(null);
    setLastTranslation(null);
  }, []);

  return {
    translate,
    translateMultiple,
    detect,
    reset,
    isLoading,
    error,
    lastTranslation,
  };
}

/**
 * Hook para traducción con caché
 * Útil para evitar traducciones repetidas
 */
export function useCachedTranslate() {
  const [cache, setCache] = useState(new Map());
  const { translate, isLoading, error } = useAzureTranslate();

  const translateWithCache = useCallback(async (text, fromLang, toLang) => {
    // Crear clave única para el caché
    const cacheKey = `${text}_${fromLang}_${toLang}`;

    // Si existe en caché, devolverlo
    if (cache.has(cacheKey)) {
      console.log('✅ Traducción desde caché');
      return cache.get(cacheKey);
    }

    // Si no existe, traducir y guardar en caché
    const result = await translate(text, fromLang, toLang);
    
    setCache(prev => {
      const newCache = new Map(prev);
      newCache.set(cacheKey, result);
      return newCache;
    });

    return result;
  }, [cache, translate]);

  const clearCache = useCallback(() => {
    setCache(new Map());
  }, []);

  return {
    translate: translateWithCache,
    clearCache,
    cacheSize: cache.size,
    isLoading,
    error,
  };
}

/**
 * Hook para traducción automática al cambiar el idioma
 * Ideal para páginas completas
 */
export function useAutoTranslate(content, targetLanguage) {
  const [translatedContent, setTranslatedContent] = useState(content);
  const { translate, isLoading } = useAzureTranslate();

  const translateContent = useCallback(async () => {
    if (!content || !targetLanguage) return;

    const result = await translate(content, 'es', targetLanguage);
    setTranslatedContent(result);
  }, [content, targetLanguage, translate]);

  // Traducir automáticamente cuando cambie el idioma
  useState(() => {
    translateContent();
  }, [targetLanguage]);

  return {
    content: translatedContent,
    isLoading,
    refresh: translateContent,
  };
}

export default useAzureTranslate;