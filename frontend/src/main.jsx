import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Loader from './components/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={  <Loader/>}  >
    <App />
    </Suspense>
  </StrictMode>,
)
