import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import pl from './assets/locale/pl.json';
import { Langs } from './types/GlobalTypes';

export const defaultLang = Langs.PL;

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
      pl: {
        translation: pl,
      },
    },
  });

export default i18n;
