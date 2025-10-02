import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { store } from './store';

import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";


import { HelmetProvider } from 'react-helmet-async';

// GOOGLE ADS E META FACEBOOK
import AdSenseHead from './google-ads/AdSenseHead';


//FACEBOOK META ADS
import FacebookPixelInitializer from '.₢/facebook-ads/FacebookPixelInitializer';







const App = () => {


  return (
    <HelmetProvider>
    <AdSenseHead /> 
    <Provider store={ store }>
      

      <BrowserRouter>
      
      <Header /> 
      {/* ✅ FacebookPixelInitializer FORA do Routes */}
        <FacebookPixelInitializer />
        <AppRouter />
      <Footer />
      <FloatingButtons />
      </BrowserRouter>
    </Provider>
     </HelmetProvider>
  
  )
}

export default App; // ✅ exporta como padrão
