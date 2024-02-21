/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import 'server-only';

const header = {
  en: () => import('./en.json').then(m => m.default),
  es: () => import('./es.json').then(m => m.default)
};

export const getHeader = async (lang: string) => {
  return header[lang]?.() ?? header.en();
};
