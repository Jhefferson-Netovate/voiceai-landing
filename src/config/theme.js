/**
 * NETOVATE OU - CONFIGURACIÓN DE TEMA
 * ====================================
 * Centraliza todos los valores de diseño
 */

export const theme = {
  // Colores principales (match con tailwind.config.js)
  colors: {
    primary: '#6366f1',      // scale-purple
    secondary: '#3b82f6',    // scale-blue
    accent: '#06b6d4',       // scale-cyan
    success: '#10b981',      // emerald
    warning: '#f59e0b',      // amber
    danger: '#ef4444',       // red
    pink: '#ec4899',         // scale-pink
    orange: '#f97316',       // scale-orange
  },
  
  // Gradientes predefinidos (match con tus features)
  gradients: {
    purple: 'from-purple-500 to-blue-500',
    blue: 'from-blue-500 to-cyan-500',
    cyan: 'from-cyan-500 to-teal-500',
    green: 'from-teal-500 to-green-500',
    emerald: 'from-green-500 to-yellow-500',
    amber: 'from-yellow-500 to-red-500',
  },
  
  // Espaciado estándar
  spacing: {
    section: 'py-16 px-4 sm:px-6 lg:px-8',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  }
};

// Utilidades
export const getColor = (name) => theme.colors[name] || theme.colors.primary;
export const getGradient = (name) => theme.gradients[name] || theme.gradients.purple;

export default theme;