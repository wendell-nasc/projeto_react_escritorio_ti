import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { store } from './store';

import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {


  return (
    <Provider store={ store }>
      

      <BrowserRouter>
      
      <Header /> 
        <AppRouter />
      <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App; // ✅ exporta como padrão
