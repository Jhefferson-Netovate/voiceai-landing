/**
 * AZURE TRANSLATOR SERVICE - NETOVATE OU
 * ========================================
 * Servicio para traducir textos usando Azure Cognitive Services
 * 
 * CONFIGURACIÓN NECESARIA:
 * 1. Ir a Azure Portal (portal.azure.com)
 * 2. Crear un recurso "Translator" en Cognitive Services
 * 3. Copiar la Key y el Endpoint
 * 4. Añadir al archivo .env
 */

import axios from 'axios';

// Configuración de Azure Translator
const AZURE_CONFIG = {
  // ⚠️ IMPORTANTE: Estas variables deben estar en tu archivo .env
  subscriptionKey: import.meta.env.VITE_AZURE_TRANSLATOR_KEY,
  endpoint: import.meta.env.VITE_AZURE_TRANSLATOR_ENDPOINT || 'https://api.cognitive.microsofttranslator.com',
  region: import.meta.env.VITE_AZURE_TRANSLATOR_REGION || 'westeurope',
};

/**
 * Traduce un texto de un idioma a otro usando Azure Translator
 * 
 * @param {string} text - Texto a traducir
 * @param {string} from - Idioma origen (ej: 'es', 'en', 'fr')
 * @param {string} to - Idioma destino (ej: 'es', 'en', 'fr')
 * @returns {Promise<string>} - Texto traducido
 */
export async function translateText(text, from = 'es', to = 'en') {
  // Validar configuración
  if (!AZURE_CONFIG.subscriptionKey) {
    console.error('❌ ERROR: Falta VITE_AZURE_TRANSLATOR_KEY en el archivo .env');
    return text; // Devolver texto original si no hay configuración
  }

  try {
    // Construir URL de la API
    const url = `${AZURE_CONFIG.endpoint}/translate?api-version=3.0&from=${from}&to=${to}`;
    
    // Hacer petición a Azure
    const response = await axios.post(
      url,
      [{ text }], // Azure espera un array de objetos con el texto
      {
        headers: {
          'Ocp-Apim-Subscription-Key': AZURE_CONFIG.subscriptionKey,
          'Ocp-Apim-Subscription-Region': AZURE_CONFIG.region,
          'Content-Type': 'application/json',
        },
      }
    );

    // Azure devuelve: [{ translations: [{ text: "..." }] }]
    const translatedText = response.data[0].translations[0].text;
    
    console.log(`✅ Traducido: "${text}" → "${translatedText}" (${from} → ${to})`);
    return translatedText;

  } catch (error) {
    console.error('❌ Error al traducir con Azure:', error.response?.data || error.message);
    
    // Si hay error, devolver texto original
    return text;
  }
}

/**
 * Traduce múltiples textos a la vez (más eficiente)
 * 
 * @param {string[]} texts - Array de textos a traducir
 * @param {string} from - Idioma origen
 * @param {string} to - Idioma destino
 * @returns {Promise<string[]>} - Array de textos traducidos
 */
export async function translateBatch(texts, from = 'es', to = 'en') {
  if (!AZURE_CONFIG.subscriptionKey) {
    console.error('❌ ERROR: Falta VITE_AZURE_TRANSLATOR_KEY en el archivo .env');
    return texts;
  }

  try {
    const url = `${AZURE_CONFIG.endpoint}/translate?api-version=3.0&from=${from}&to=${to}`;
    
    // Convertir array de strings a formato de Azure
    const body = texts.map(text => ({ text }));
    
    const response = await axios.post(url, body, {
      headers: {
        'Ocp-Apim-Subscription-Key': AZURE_CONFIG.subscriptionKey,
        'Ocp-Apim-Subscription-Region': AZURE_CONFIG.region,
        'Content-Type': 'application/json',
      },
    });

    // Extraer textos traducidos
    const translated = response.data.map(item => item.translations[0].text);
    
    console.log(`✅ Traducidos ${texts.length} textos (${from} → ${to})`);
    return translated;

  } catch (error) {
    console.error('❌ Error al traducir batch:', error.response?.data || error.message);
    return texts;
  }
}

/**
 * Detecta automáticamente el idioma de un texto
 * 
 * @param {string} text - Texto para detectar idioma
 * @returns {Promise<string>} - Código de idioma detectado (ej: 'es', 'en')
 */
export async function detectLanguage(text) {
  if (!AZURE_CONFIG.subscriptionKey) {
    console.error('❌ ERROR: Falta VITE_AZURE_TRANSLATOR_KEY');
    return 'es'; // Default
  }

  try {
    const url = `${AZURE_CONFIG.endpoint}/detect?api-version=3.0`;
    
    const response = await axios.post(
      url,
      [{ text }],
      {
        headers: {
          'Ocp-Apim-Subscription-Key': AZURE_CONFIG.subscriptionKey,
          'Ocp-Apim-Subscription-Region': AZURE_CONFIG.region,
          'Content-Type': 'application/json',
        },
      }
    );

    const detectedLanguage = response.data[0].language;
    console.log(`✅ Idioma detectado: ${detectedLanguage}`);
    return detectedLanguage;

  } catch (error) {
    console.error('❌ Error al detectar idioma:', error.response?.data || error.message);
    return 'es';
  }
}

/**
 * Obtiene lista de idiomas soportados por Azure Translator
 * 
 * @returns {Promise<Object>} - Objeto con idiomas disponibles
 */
export async function getSupportedLanguages() {
  try {
    const url = `${AZURE_CONFIG.endpoint}/languages?api-version=3.0`;
    
    const response = await axios.get(url);
    
    // Azure devuelve: { translation: { 'es': { name: 'Spanish' }, ... } }
    const languages = response.data.translation;
    
    console.log(`✅ Idiomas soportados: ${Object.keys(languages).length}`);
    return languages;

  } catch (error) {
    console.error('❌ Error al obtener idiomas:', error.message);
    return {};
  }
}

/**
 * Idiomas más comunes preconfigurados
 */
export const COMMON_LANGUAGES = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh-Hans', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

export default {
  translateText,
  translateBatch,
  detectLanguage,
  getSupportedLanguages,
  COMMON_LANGUAGES,
};