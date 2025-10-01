/**
 * CRISP CHAT - CONFIGURACIÓN
 * ============================
 * Chat en vivo para soporte y conversiones
 * 
 * INSTRUCCIONES PARA NO PROGRAMADORES:
 * 1. Ve a https://crisp.chat y crea una cuenta gratuita
 * 2. Ve a Configuración > Configuración del sitio web
 * 3. Copia el "Website ID" (formato: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
 * 4. Pégalo en tu archivo .env como VITE_CRISP_WEBSITE_ID
 * 
 * ALTERNATIVA: Si prefieres Intercom o Tawk.to, puedes adaptar este código
 */

const CRISP_WEBSITE_ID = import.meta.env.VITE_CRISP_WEBSITE_ID;

/**
 * Inicializar Crisp Chat
 */
export const initCrisp = () => {
  // Verificar que existe el Website ID
  if (!CRISP_WEBSITE_ID) {
    console.warn('⚠️ Crisp Chat: No se encontró VITE_CRISP_WEBSITE_ID en .env');
    return;
  }

  // Configurar Crisp
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

  // Cargar script de Crisp
  const script = document.createElement('script');
  script.src = 'https://client.crisp.chat/l.js';
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    console.log('✅ Crisp Chat cargado correctamente');
    
    // Configuración adicional (opcional)
    window.$crisp.push(['safe', true]); // Modo seguro GDPR
    window.$crisp.push(['config', 'hide:on:away', false]); // Siempre visible
  };
};

/**
 * Abrir el chat programáticamente
 */
export const openChat = () => {
  if (window.$crisp) {
    window.$crisp.push(['do', 'chat:open']);
  }
};

/**
 * Cerrar el chat
 */
export const closeChat = () => {
  if (window.$crisp) {
    window.$crisp.push(['do', 'chat:close']);
  }
};

/**
 * Mostrar el chat
 */
export const showChat = () => {
  if (window.$crisp) {
    window.$crisp.push(['do', 'chat:show']);
  }
};

/**
 * Ocultar el chat
 */
export const hideChat = () => {
  if (window.$crisp) {
    window.$crisp.push(['do', 'chat:hide']);
  }
};

/**
 * Enviar un mensaje automático
 * @param {string} message - Mensaje a enviar
 */
export const sendMessage = (message) => {
  if (window.$crisp) {
    window.$crisp.push(['do', 'message:send', ['text', message]]);
  }
};

/**
 * Establecer datos del usuario
 * @param {object} userData - Datos del usuario
 */
export const setUserData = (userData) => {
  if (window.$crisp) {
    if (userData.email) {
      window.$crisp.push(['set', 'user:email', [userData.email]]);
    }
    if (userData.name) {
      window.$crisp.push(['set', 'user:nickname', [userData.name]]);
    }
    if (userData.phone) {
      window.$crisp.push(['set', 'user:phone', [userData.phone]]);
    }
  }
};

/**
 * Eventos personalizados para Crisp
 */
export const CrispEvents = {
  // Cuando el usuario visita la página de precios
  viewedPricing: () => {
    if (window.$crisp) {
      window.$crisp.push(['set', 'session:event', [['viewed_pricing']]]);
    }
  },

  // Cuando el usuario inicia una prueba
  startedTrial: () => {
    if (window.$crisp) {
      window.$crisp.push(['set', 'session:event', [['started_trial']]]);
    }
  },

  // Cuando el usuario abandona el formulario
  abandonedForm: (formName) => {
    if (window.$crisp) {
      window.$crisp.push(['set', 'session:event', [[`abandoned_${formName}_form`]]]);
    }
  }
};

export default { 
  initCrisp, 
  openChat, 
  closeChat, 
  showChat, 
  hideChat, 
  sendMessage, 
  setUserData,
  CrispEvents 
};