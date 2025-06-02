
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'it' | 'de' | 'nl';

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  currency: string;
  formatPrice: (price: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const currency = language === 'pt' ? 'BRL' : 'EUR';

  const formatPrice = (price: number): string => {
    if (language === 'pt') {
      return `R$ ${price.toLocaleString('pt-BR')}`;
    } else {
      // Convert BRL to EUR (approximate rate: 1 BRL = 0.18 EUR)
      const euroPrice = Math.round(price * 0.18);
      return `€${euroPrice.toLocaleString('de-DE')}`;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, currency, formatPrice }}>
      {children}
    </LanguageContext.Provider>
  );
};
