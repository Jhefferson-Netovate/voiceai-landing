import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * THEME PROVIDER - NETOVATE OU
 * ==============================
 * Proveedor de contexto para gestionar el tema global
 * Incluye modo oscuro y preferencias de accesibilidad
 */

// Crear contexto del tema
const ThemeContext = createContext();

// Hook personalizado para usar el tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
};

// Valores por defecto del tema
const defaultTheme = {
  colors: {
    brand: {
      navy: '#0A1F44',
      blue: '#0F52BA',
      cyan: '#00D9FF',
      purple: '#6366F1',
      coral: '#FF6B35',
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
  },
  fonts: {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    display: 'Cal Sans, Inter, system-ui, sans-serif',
    mono: 'JetBrains Mono, Menlo, monospace',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
};

export const ThemeProvider = ({ children }) => {
  // Estado del modo oscuro
  const [darkMode, setDarkMode] = useState(false);
  
  // Estado de preferencias de accesibilidad
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Estado del tema personalizado
  const [theme, setTheme] = useState(defaultTheme);

  // Detectar preferencia de modo oscuro del sistema
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(darkModeQuery.matches);

    const handleChange = (e) => setDarkMode(e.matches);
    darkModeQuery.addEventListener('change', handleChange);
    
    return () => darkModeQuery.removeEventListener('change', handleChange);
  }, []);

  // Detectar preferencia de movimiento reducido
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleChange);
    
    return () => motionQuery.removeEventListener('change', handleChange);
  }, []);

  // Aplicar clase de modo oscuro al HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Funciones para cambiar el tema
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  const updateTheme = (newTheme) => {
    setTheme({ ...theme, ...newTheme });
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
  };

  // Valor del contexto
  const value = {
    // Estados
    darkMode,
    prefersReducedMotion,
    theme,
    
    // Funciones
    toggleDarkMode,
    updateTheme,
    resetTheme,
    
    // Utilidades
    getColor: (colorPath) => {
      const keys = colorPath.split('.');
      let value = theme.colors;
      for (const key of keys) {
        value = value[key];
        if (!value) return null;
      }
      return value;
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// ============================================
// COMPONENTE DE EJEMPLO: Dark Mode Toggle
// ============================================
export const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
};

// ============================================
// EJEMPLO DE USO
// ============================================
/*
// En tu main.jsx o App.jsx:
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}

// En cualquier componente:
import { useTheme, DarkModeToggle } from './components/ThemeProvider';

function MyComponent() {
  const { theme, darkMode, prefersReducedMotion } = useTheme();
  
  return (
    <div>
      <DarkModeToggle />
      <h1 style={{ color: theme.colors.brand.blue }}>
        Hola Netovate!
      </h1>
    </div>
  );
}
*/

export default ThemeProvider;