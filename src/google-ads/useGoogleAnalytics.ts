// src/hooks/useGoogleAnalytics.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const useGoogleAnalytics = () => {
  const location = useLocation();
  const GA_MEASUREMENT_ID = 'G-63C5CWW43R';

  useEffect(() => {
    // Carrega o script do gtag
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Inicializa o gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href
    });

    // Define a função global
    window.gtag = gtag;
  }, []);

  // Rastreia mudanças de página
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search
      });
    }
  }, [location, GA_MEASUREMENT_ID]);
};

// Hook para eventos customizados
export const useGAEvents = () => {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  };

  return { trackEvent };
};