import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/i18n/locale/en.json';
import ko from '@/i18n/locale/ko.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      ko: {
        translation: ko,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
