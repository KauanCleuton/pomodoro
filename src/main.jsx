import React from 'react'
import ReactDOM from 'react-dom/client'
import { Details } from './pages/Details/Details.jsx'


import { GlobalStyle } from './styles/global.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GlobalStyle />
      <Details />
  </React.StrictMode>,
)
