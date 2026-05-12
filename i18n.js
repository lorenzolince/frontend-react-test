import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import index_en from './locales/en/index.json';
import index_es from './locales/es/index.json';


i18n.use(initReactI18next).init({
  resources: {
    en: {
      index:index_en
      
    },
    es: {
      index:index_es
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;