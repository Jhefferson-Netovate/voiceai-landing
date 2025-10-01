/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  
  theme: {
    extend: {
      // ============================================
      // 🌑 PALETA OSCURA - INSPIRADA EN SCALE.COM
      // ============================================
      colors: {
        // Fondos Oscuros (El alma de Scale.com)
        'dark': {
          DEFAULT: '#000000',     // Negro puro
          50: '#0a0a0a',          // Casi negro
          100: '#111111',         // Negro con un toque de gris
          200: '#1a1a1a',         // Gris muy oscuro
          300: '#262626',         // Gris oscuro
          400: '#333333',         // Gris medio-oscuro
          500: '#404040',         // Gris medio
          600: '#525252',         // Gris
          700: '#666666',         // Gris claro
          800: '#808080',         // Gris más claro
          900: '#999999',         // Gris muy claro
        },

        // Acentos Brillantes (Los que hacen POP sobre negro)
        'neon': {
          blue: '#0EA5E9',        // Azul eléctrico
          purple: '#8B5CF6',      // Púrpura vibrante
          pink: '#EC4899',        // Rosa neón
          cyan: '#06B6D4',        // Cian brillante
          green: '#10B981',       // Verde neón
          yellow: '#F59E0B',      // Amarillo brillante
          orange: '#F97316',      // Naranja vibrante
        },

        // Colores de marca Netovate (versión oscura)
        'brand': {
          navy: '#1E3A8A',        // Azul marino oscuro
          blue: '#2563EB',        // Azul brillante principal
          cyan: '#06B6D4',        // Cian eléctrico
          purple: '#8B5CF6',      // Púrpura vibrante
          coral: '#F97316',       // Naranja coral
        },

        // Grises para texto (alta legibilidad sobre negro)
        'gray': {
          50: '#FAFAFA',          // Blanco casi puro
          100: '#F5F5F5',         // Gris muy claro
          200: '#E5E5E5',         // Gris claro
          300: '#D4D4D4',         // Gris claro-medio
          400: '#A3A3A3',         // Gris medio
          500: '#737373',         // Gris
          600: '#525252',         // Gris oscuro
          700: '#404040',         // Gris muy oscuro
          800: '#262626',         // Casi negro
          900: '#171717',         // Negro con tinte
        },

        // Aliases para compatibilidad (migración suave)
        'scale-purple': '#8B5CF6',
        'scale-blue': '#2563EB',
        'scale-cyan': '#06B6D4',
        'scale-pink': '#EC4899',
        'scale-orange': '#F97316',
      },
      
      // ============================================
      // 🎨 GRADIENTES OSCUROS ÉPICOS
      // ============================================
      backgroundImage: {
        // Gradiente principal (púrpura a azul sobre negro)
        'gradient-dark': 'linear-gradient(135deg, #8B5CF6 0%, #2563EB 100%)',
        
        // Gradiente arcoíris oscuro
        'gradient-rainbow': 'linear-gradient(135deg, #8B5CF6 0%, #2563EB 25%, #06B6D4 50%, #EC4899 75%, #F97316 100%)',
        
        // Gradiente sutil para cards
        'gradient-subtle': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)',
        
        // Gradiente de vidrio (glassmorphism oscuro)
        'glass-dark': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        
        // Gradiente animado para fondos
        'animated-gradient': 'linear-gradient(270deg, #8B5CF6, #2563EB, #06B6D4, #EC4899)',
      },
      
      // ============================================
      // ✨ EFECTOS DE GLOW (MUY IMPORTANTES)
      // ============================================
      boxShadow: {
        // Glow púrpura
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
        'glow-purple-lg': '0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(139, 92, 246, 0.4)',
        
        // Glow azul
        'glow-blue': '0 0 30px rgba(37, 99, 235, 0.5), 0 0 60px rgba(37, 99, 235, 0.3)',
        'glow-blue-lg': '0 0 40px rgba(37, 99, 235, 0.6), 0 0 80px rgba(37, 99, 235, 0.4)',
        
        // Glow cyan
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)',
        'glow-cyan-lg': '0 0 40px rgba(6, 182, 212, 0.6), 0 0 80px rgba(6, 182, 212, 0.4)',
        
        // Glow rosa
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)',
        
        // Glow multicolor
        'glow-rainbow': '0 0 40px rgba(139, 92, 246, 0.4), 0 0 80px rgba(37, 99, 235, 0.3)',
        
        // Sombras para cards sobre fondo oscuro
        'dark-card': '0 8px 32px rgba(0, 0, 0, 0.6)',
        'dark-card-hover': '0 16px 48px rgba(0, 0, 0, 0.8)',
      },
      
      // ============================================
      // 🎭 ANIMACIONES SUAVES Y FLUIDAS
      // ============================================
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'gradient-x': 'gradientX 15s ease infinite',
        'gradient-y': 'gradientY 15s ease infinite',
        'gradient-xy': 'gradientXY 15s ease infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
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
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
            opacity: '1' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)',
            opacity: '0.8' 
          },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientY: {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
        },
        gradientXY: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
        },
      },
      
      // ============================================
      // 📐 TIPOGRAFÍA
      // ============================================
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      
      // ============================================
      // 📏 ESPACIADO EXTRA
      // ============================================
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      // ============================================
      // 🎯 BACKDROP BLUR (Para glassmorphism)
      // ============================================
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
      
      // ============================================
      // 🔲 BORDER RADIUS EXTRA
      // ============================================
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  
  plugins: [],
}