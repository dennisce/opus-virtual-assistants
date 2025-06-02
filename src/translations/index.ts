
import { pt } from './pt';
import { en } from './en';
import { it } from './it';
import { de } from './de';
import { nl } from './nl';
import type { Language } from '@/contexts/LanguageContext';

const translations = {
  pt,
  en,
  it,
  de,
  nl
};

export const useTranslations = (language: Language) => {
  return translations[language];
};

export type TranslationType = typeof pt;
