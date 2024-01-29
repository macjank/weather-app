import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './assets/locale/en.json';
import { Langs } from './types/GlobalTypes';

export const defaultLang = Langs.EN;

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: defaultLang,
    returnNull: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
    },
  });

export default i18n;
