import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

// Correto: JSX com comentário de bloco
createRoot(document.getElementById('root')).render(
  <>
    {/* <StrictMode> */}
    <App />
    {/* </StrictMode> */}
  </>
)
