const axios = require('axios');

module.exports = async function (context, req) {
    // Configuración de Azure Translator
    const key = process.env.TRANSLATOR_KEY;
    const endpoint = 'https://api.cognitive.microsofttranslator.com';
    const location = process.env.TRANSLATOR_LOCATION;
    
    // Obtener datos de la petición
    const text = req.body?.text;
    const targetLanguage = req.body?.targetLanguage || 'es';
    
    if (!text) {
        context.res = {
            status: 400,
            body: { error: 'Falta el texto a traducir' }
        };
        return;
    }

    try {
        const response = await axios({
            baseURL: endpoint,
            url: '/translate',
            method: 'post',
            headers: {
                'Ocp-Apim-Subscription-Key': key,
                'Ocp-Apim-Subscription-Region': location,
                'Content-type': 'application/json'
            },
            params: {
                'api-version': '3.0',
                'to': targetLanguage
            },
            data: [{
                'text': text
            }],
            responseType: 'json'
        });

        context.res = {
            status: 200,
            body: {
                translatedText: response.data[0].translations[0].text,
                detectedLanguage: response.data[0].detectedLanguage?.language
            }
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: { error: 'Error al traducir', details: error.message }
        };
    }
};
