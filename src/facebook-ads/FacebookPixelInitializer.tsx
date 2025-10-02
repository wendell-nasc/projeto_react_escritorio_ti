// src/facebook-ads/FacebookPixelInitializer.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { facebookPixelService } from './facebookPixelService';

const FacebookPixelInitializer: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Inicializa o serviço
    facebookPixelService.init();
  }, []);

  useEffect(() => {
    // Rastreia mudanças de página
    facebookPixelService.trackPageView();
  }, [location]);

  return null; // Não renderiza nada
};

export default FacebookPixelInitializer;