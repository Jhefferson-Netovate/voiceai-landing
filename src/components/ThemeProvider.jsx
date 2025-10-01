import React, { createContext, useContext, useEffect } from 'react';
import { theme, generateCSSVariables } from '../config/theme';

/**
 * THEME PROVIDER - NETOVATE OU
 * ==============================
 * Proveedor de tema que inyecta variables CSS globales
 * y proporciona acceso al tema en toda la aplicación
 */

// Crear contexto del tema
const ThemeContext = createContext(theme);

/**
 * Hook personalizado para acceder al tema
 * Uso: const theme = useTheme();
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
};

/**
 * Componente ThemeProvider
 * Envuelve toda la aplicación para proporcionar acceso al tema
 */
export default function ThemeProvider({ children }) {
  useEffect(() => {
    // Inyectar variables CSS en el documento
    const style = document.createElement('style');
    style.textContent = `
      :root {
        ${generateCSSVariables()}
      }
    `;
    document.head.appendChild(style);

    // Cleanup al desmontar
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}