import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import "./widgets/meu-widget.js"; // Importa o Web Component


// Correto: JSX com comentário de bloco
createRoot(document.getElementById('root')).render(
  <>
    {/* <StrictMode> */}
    <App />    
    {/* </StrictMode> */}
  </>
)
