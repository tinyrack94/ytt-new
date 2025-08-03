import { DEFAULT_LANGUAGE } from '@/constants';
import en from '@/i18n/locale/en.json';
import ko from '@/i18n/locale/ko.json';

const ui: {
  [key: string]: {
    [key: string]: string;
  };
} = {
  ko,
  en,
};

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof DEFAULT_LANGUAGE.CODE]) {
    return ui[lang][key] || ui[DEFAULT_LANGUAGE.CODE][key];
  };
}
