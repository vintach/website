/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import 'server-only';

const sidebar = {
  en: () => import('./en.json').then(m => m.default),
  es: () => import('./es.json').then(m => m.default)
};

export const getSidebar = async (lang: string) => {
  return sidebar[lang]?.() ?? sidebar.en();
};
