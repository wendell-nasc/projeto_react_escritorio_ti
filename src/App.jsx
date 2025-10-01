import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { store } from './store';

import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";


// GOOGLE ADS
import { HelmetProvider } from 'react-helmet-async';
import AdSenseHead from './components/google-ads/AdSenseHead';


const App = () => {


  return (
    <HelmetProvider>
    {/* <AdSenseHead />  */}
    <Provider store={ store }>
      

      <BrowserRouter>
      
      <Header /> 
        <AppRouter />
      <Footer />
      <FloatingButtons />
      </BrowserRouter>
    </Provider>
     </HelmetProvider>
  
  )
}

export default App; // ✅ exporta como padrão
