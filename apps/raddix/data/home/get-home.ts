/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import 'server-only';

const home = {
  en: () => import('./en.json').then(m => m.default),
  es: () => import('./es.json').then(m => m.default)
};

export const getHome = async (lang: string) => {
  return home[lang]?.() ?? home.en();
};
