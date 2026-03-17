import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/motion.css'
import './App.css'
import './utils/scrollReveal'

// Page load sequence - premium entrance
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.6s cubic-bezier(0.33, 1, 0.68, 1)';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 50);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
