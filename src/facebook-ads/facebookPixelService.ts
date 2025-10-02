
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}

class FacebookPixelService {
  private pixelId: string = '515409416515598';
  private initialized: boolean = false;

  constructor() {
    this.init();
  }

  init() {
    if (this.initialized || typeof window === 'undefined') return;

    // Configura a função fbq se não existir
    if (!window.fbq) {
      window.fbq = function() {
        window.fbq.callMethod ? 
          window.fbq.callMethod.apply(window.fbq, arguments) : 
          window.fbq.queue.push(arguments);
      };
      
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];
    }

    // Carrega o script do Facebook Pixel
    this.loadPixelScript();
    
    // Inicializa o Pixel
    window.fbq('init', this.pixelId);
    window.fbq('track', 'PageView');

    this.initialized = true;
    console.log('✅ Facebook Pixel inicializado');
  }

  private loadPixelScript() {
    // Verifica se o script já foi carregado
    if (document.querySelector('script[src*="fbevents.js"]')) {
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    
    // Adiciona o script ao documento
    document.head.appendChild(script);

    // Adiciona o noscript fallback
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${this.pixelId}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.head.appendChild(noscript);
  }

  trackPageView() {
    if (!this.initialized) this.init();
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }

  trackEvent(eventName: string, parameters: Record<string, any> = {}) {
    if (!this.initialized) this.init();
    if (window.fbq) {
      window.fbq('track', eventName, parameters);
      console.log(`🎯 Facebook Pixel: ${eventName}`, parameters);
    }
  }

  // Métodos específicos para eventos comuns
  trackViewContent(contentName: string, contentCategory?: string, value?: number) {
    this.trackEvent('ViewContent', {
      content_name: contentName,
      content_category: contentCategory,
      value: value
    });
  }

  trackAddToCart(value: number, contentIds: string[], currency: string = 'BRL') {
    this.trackEvent('AddToCart', {
      value: value,
      currency: currency,
      content_ids: contentIds
    });
  }

  trackPurchase(value: number, contentIds: string[], currency: string = 'BRL') {
    this.trackEvent('Purchase', {
      value: value,
      currency: currency,
      content_ids: contentIds
    });
  }

  trackInitiateCheckout(value?: number, contentIds?: string[]) {
    this.trackEvent('InitiateCheckout', {
      value: value,
      content_ids: contentIds
    });
  }

  trackLead(value: number = 0, currency: string = 'BRL') {
    this.trackEvent('Lead', {
      value: value,
      currency: currency
    });
  }

  trackCompleteRegistration() {
    this.trackEvent('CompleteRegistration');
  }

  trackSearch(searchTerm: string) {
    this.trackEvent('Search', {
      search_string: searchTerm
    });
  }

  // Método para consentimento (GDPR)
  grantConsent() {
    if (window.fbq) {
      window.fbq('consent', 'grant');
    }
  }

  revokeConsent() {
    if (window.fbq) {
      window.fbq('consent', 'revoke');
    }
  }
}

// Exporta uma instância única (Singleton)
export const facebookPixelService = new FacebookPixelService();