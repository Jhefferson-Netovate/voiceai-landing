import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración básica de Vite para React
// Nota: La configuración de MDX se añadirá más adelante cuando sea necesaria
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173
  }
})