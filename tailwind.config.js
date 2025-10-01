/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  
  theme: {
    extend: {
      // Colores inspirados en Scale.com (gradientes iridiscentes)
      colors: {
        // Paleta principal inspirada en Scale AI
        'scale-purple': '#6366f1',
        'scale-blue': '#3b82f6', 
        'scale-cyan': '#06b6d4',
        'scale-pink': '#ec4899',
        'scale-orange': '#f97316',
        
        // Grises elegantes
        'gray-50': '#f9fafb',
        'gray-900': '#111827',
        'gray-800': '#1f2937',
      },
      
      // Tipografía moderna (similar a Scale)
      fontFamily: {
        sans: [
          'Inter', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'sans-serif'
        ],
        mono: ['JetBrains Mono', 'monospace'],
      },
      
      // Gradientes inspirados en Scale.com
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'scale-gradient': 'linear-gradient(135deg, #6366f1 0%, #3b82f6 25%, #06b6d4 50%, #ec4899 75%, #f97316 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      
      // Animaciones suaves (microinteracciones como Scale)
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      
      // Definición de las animaciones
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' },
        }
      },
      
      // Espaciado adicional para layouts amplios como Scale
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Sombras elegantes
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.4)',
      },
      
      // Efectos de vidrio (glassmorphism como Scale)
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  
  plugins: [],
}