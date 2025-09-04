import { useEffect } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { store } from './store';

import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {


  useEffect(() => {
    // Garante que o Web Component foi carregado
    if (!customElements.get("meu-widget")) {
      console.warn("⚠️ O componente <meu-widget> ainda não foi registrado!");
    }
  }, []);

  return (
    <Provider store={ store }>
      

      <BrowserRouter>
      
      <Header /> 
        {/* Web Component isolado */}
        
          <meu-widget></meu-widget>
        
        <AppRouter />
      <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App; // ✅ exporta como padrão
