import NextI18Next from 'next-i18next';
import { IS_SERVER } from './constant/common';

const NextI18NextInstance: NextI18Next = new NextI18Next({
  localePath: IS_SERVER ? 'public/static/locales' : 'static/locales',
  preload: ['kr'],
  defaultLanguage: 'kr',
  otherLanguages: ['en'],
  browserLanguageDetection: true,
  localeSubpaths: {
    kr: 'kr',
    en: 'en',
  },
});

export default NextI18NextInstance;

export const {
  appWithTranslation,
  useTranslation,
} = NextI18NextInstance;
