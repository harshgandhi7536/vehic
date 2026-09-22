import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import Form from './components/form.jsx'
import LoginPage from './components/loginscreen.jsx'
import TransportSharingPage from './components/transport_sharing.jsx'
import MenuPage from './components/menuPage.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
