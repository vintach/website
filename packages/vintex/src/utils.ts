export interface I18nConfig {
  lang?: string;
  defaultLang?: string;
}

interface GetLocaleUrl extends I18nConfig {
  path: string;
}

/** A function to retrieve a relative path for a locale */
export const getLocaleUrl = ({
  lang,
  defaultLang,
  path
}: GetLocaleUrl): string => {
  return lang === defaultLang ? path : `/${lang}${path}`;
};
