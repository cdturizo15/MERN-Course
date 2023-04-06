import React from 'react'
import ReactDOM from 'react-dom/client'
import { AnimekiApp } from './AnimekiApp'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimekiApp />
    </BrowserRouter>
  </React.StrictMode>,
)
