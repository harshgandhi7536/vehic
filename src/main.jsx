import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Form from './form.jsx'
import LoginPage from './loginscreen.jsx'
import TransportSharingPage from './components/transport_sharing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TransportSharingPage/>
  </StrictMode>,
)
