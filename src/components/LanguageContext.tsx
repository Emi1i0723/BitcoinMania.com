"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface TranslationSet {
  welcome: string;
  login: string;
  signup: string;
  logout: string;
  dashboard: string;
  priceMonitor: string;
  cryptoCalc: string;
  eduTitle: string;
  eduBasics: string;
  eduNews: string;
  loading: string;
  conversion: string;
  comparison: string;
  convert: string;
  compare: string;
  amount: string;
  result: string;
  from: string;
  to: string;
  analogies: string;
  flashcards: string;
  next: string;
  previous: string;
  check: string;
  flip: string;
  congrats: string;
  restart: string;
}

const translations: Record<Language, TranslationSet> = {
  en: {
    welcome: 'Welcome to CryptoMania',
    login: 'Login',
    signup: 'Sign Up',
    logout: 'Logout',
    dashboard: 'Dashboard',
    priceMonitor: 'Price Monitor',
    cryptoCalc: 'CryptoCALC',
    eduTitle: 'CryptoMania EDU',
    eduBasics: 'Everything you need to know',
    eduNews: "What's New",
    loading: 'Generating AI Content...',
    conversion: 'Currency Conversion',
    comparison: 'Crypto Comparison',
    convert: 'Convert',
    compare: 'Compare',
    amount: 'Amount',
    result: 'Result',
    from: 'From',
    to: 'To',
    analogies: 'Analogies',
    flashcards: 'Knowledge Validation',
    next: 'Next',
    previous: 'Previous',
    check: 'Check Answer',
    flip: 'Flip Card',
    congrats: 'Well done!',
    restart: 'Try again',
  },
  es: {
    welcome: 'Bienvenido a CryptoMania',
    login: 'Iniciar Sesión',
    signup: 'Registrarse',
    logout: 'Cerrar Sesión',
    dashboard: 'Tablero',
    priceMonitor: 'Monitor de Precios',
    cryptoCalc: 'CryptoCALC',
    eduTitle: 'CryptoMania EDU',
    eduBasics: 'Todo lo que necesitas saber',
    eduNews: 'Novedades',
    loading: 'Generando contenido IA...',
    conversion: 'Conversión de Monedas',
    comparison: 'Comparación Crypto',
    convert: 'Convertir',
    compare: 'Comparar',
    amount: 'Cantidad',
    result: 'Resultado',
    from: 'De',
    to: 'A',
    analogies: 'Analogías',
    flashcards: 'Validación de Conocimientos',
    next: 'Siguiente',
    previous: 'Anterior',
    check: 'Verificar Respuesta',
    flip: 'Girar Carta',
    congrats: '¡Muy bien!',
    restart: 'Reintentar',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSet;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
