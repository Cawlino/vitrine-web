import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as Sentry from '@sentry/react'
import './index.css'
import App from './App.jsx'

Sentry.init({
  dsn: 'https://3b427a28a1205cb60eaf17a4a1c89538@o4512442806173696.ingest.us.sentry.io/4512442813972480',
  environment: import.meta.env.MODE,
  tracesSampleRate: 0.1,
})

window.addEventListener('securitypolicyviolation', (e) => {
  Sentry.captureMessage(`CSP Violation: ${e.violatedDirective} -> ${e.blockedURI}`, 'warning')
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Ocorreu um erro inesperado. Nossa equipe já foi notificada.</div>}>
      <App />
    </Sentry.ErrorBoundary>
  </StrictMode>,
)
