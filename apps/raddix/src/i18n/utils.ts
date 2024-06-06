import { i18nConfig } from './config';

const { locales, defaultLocale } = i18nConfig;

export const getLocaleUrl = (
  url: string,
  lang?: string,
  prefix?: string
): string => {
  prefix = !prefix ? '' : prefix;
  const langUrl = url === '/' ? `/${lang}` : `/${lang}${url}`;
  return lang === defaultLocale ? `${prefix}${url}` : `${prefix}${langUrl}`;
};

type LocaleUrls = Record<string, string>;
export const getLocaleUrls = (url: string, prefix?: string): LocaleUrls => {
  const urls: LocaleUrls = {};

  locales.map(lang => {
    urls[lang] = getLocaleUrl(url, lang, prefix);
  });

  return urls;
};
