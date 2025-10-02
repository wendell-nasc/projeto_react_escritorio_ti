import { useCallback } from 'react';
import { facebookPixelService } from './facebookPixelService';

export const useFacebookPixel = () => {
  const trackEvent = useCallback((eventName: string, parameters: Record<string, any> = {}) => {
    facebookPixelService.trackEvent(eventName, parameters);
  }, []);

  const trackViewContent = useCallback((contentName: string, contentCategory?: string, value?: number) => {
    facebookPixelService.trackViewContent(contentName, contentCategory, value);
  }, []);

  const trackAddToCart = useCallback((value: number, contentIds: string[], currency: string = 'BRL') => {
    facebookPixelService.trackAddToCart(value, contentIds, currency);
  }, []);

  const trackPurchase = useCallback((value: number, contentIds: string[], currency: string = 'BRL') => {
    facebookPixelService.trackPurchase(value, contentIds, currency);
  }, []);

  const trackLead = useCallback((value: number = 0, currency: string = 'BRL') => {
    facebookPixelService.trackLead(value, currency);
  }, []);

  return {
    trackEvent,
    trackViewContent,
    trackAddToCart,
    trackPurchase,
    trackLead
  };
};