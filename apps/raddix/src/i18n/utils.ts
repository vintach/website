import { i18nConfig } from './config';

const { locales, defaultLocale } = i18nConfig;

export const getLocaleUrl = (url: string, lang?: string): string => {
  const langUrl = url === '/' ? `/${lang}` : `/${lang}${url}`;
  return lang === defaultLocale ? url : langUrl;
};

type LocaleUrls = Record<string, string>;
export const getLocaleUrls = (url: string): LocaleUrls => {
  const urls: LocaleUrls = {};

  locales.map(lang => {
    urls[lang] = getLocaleUrl(url, lang);
  });

  return urls;
};
