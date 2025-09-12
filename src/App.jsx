import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { store } from './store';

import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";


const App = () => {


  return (
    <Provider store={ store }>
      

      <BrowserRouter>
      
      <Header /> 
        <AppRouter />
      <Footer />
      <FloatingButtons />
      </BrowserRouter>
    </Provider>
  )
}

export default App; // ✅ exporta como padrão
