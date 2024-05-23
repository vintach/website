/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { type Config } from '@/types/content';
import 'server-only';

const siteConfig = {
  en: () => import('./en/_config.json').then(m => m.default),
  es: () => import('./es/_config.json').then(m => m.default)
};

export const getSiteConfig = async (lang: string): Promise<Config> => {
  return siteConfig[lang]?.() ?? siteConfig.en();
};
