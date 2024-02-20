/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import 'server-only';

const menu = {
  en: () => import('./en.json').then(m => m.default),
  es: () => import('./es.json').then(m => m.default)
};

export const getMenu = async (lang: string) => {
  return menu[lang]?.() ?? menu.en();
};
