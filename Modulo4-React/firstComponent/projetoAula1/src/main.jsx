import { StrictMode } from 'react' // importando apenas StrictMode por isso {}
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // importando tudo do APP.jsx

createRoot(document.getElementById('root')).render( //StrictMode é como se fosse modo teste.
  <StrictMode>
    <App />
  </StrictMode>,
)