/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */

const header = {
  en: () => import('./en/_config.json').then(m => m.default),
  es: () => import('./es/_config.json').then(m => m.default)
};

export const getGuide = async (lang: string) => {
  return header[lang]?.() ?? header.en();
};
