/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ============================================
      // 🎨 PALETA DE COLORES NETOVATE OU
      // Inspirada en Scale.com
      // ============================================
      colors: {
        // Colores principales de marca
        brand: {
          navy: '#0A1F44',      // Azul marino profundo - Headers y texto principal
          blue: '#0F52BA',      // Azul corporativo - CTAs y enlaces
          cyan: '#00D9FF',      // Cian brillante - Acentos y highlights
          purple: '#6366F1',    // Púrpura moderno - Gradientes y hover states
          coral: '#FF6B35',     // Coral energético - Warnings y badges
        },

        // Escala de grises refinada
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

        // Aliases para mantener compatibilidad
        'scale-purple': '#6366F1',
        'scale-blue': '#0F52BA',
        'scale-cyan': '#00D9FF',
      },

      // ============================================
      // 📐 TIPOGRAFÍA
      // ============================================
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },

      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },

      // ============================================
      // 🎭 EFECTOS Y ANIMACIONES
      // ============================================
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.4)',
        'glow-cyan': '0 0 20px rgba(0, 217, 255, 0.4)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.5)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'hard': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },

      // ============================================
      // 📏 ESPACIADO Y LAYOUT
      // ============================================
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },

      // ============================================
      // 🎯 BREAKPOINTS PERSONALIZADOS
      // ============================================
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },

      // ============================================
      // 🌈 GRADIENTES PREDEFINIDOS
      // ============================================
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #6366F1 0%, #0F52BA 50%, #00D9FF 100%)',
        'gradient-brand-reverse': 'linear-gradient(135deg, #00D9FF 0%, #0F52BA 50%, #6366F1 100%)',
      },
    },
  },
  plugins: [
    // Añadir plugins útiles aquí
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}