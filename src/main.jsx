import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import './styles/tailwind.css'

// Importar configuraciones (comentadas hasta que las necesites)
// import { initGA } from './config/analytics'
// import { initCrisp } from './config/crisp'

// Inicializar servicios externos (descomenta cuando configures)
// if (import.meta.env.PROD) {
//   initGA()
//   initCrisp()
// }

// Punto de entrada principal de la aplicación React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)