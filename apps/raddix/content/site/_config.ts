import { type Config } from '@/types/content';
import { IS_DEVELOPMENT } from '@/utils/constants';

export const configSite: Config = {
  sidebar: [],
  meta: {
    title: 'Raddix',
    url: IS_DEVELOPMENT
      ? `http://localhost:${process.env.PORT}`
      : `https://${process.env.VERCEL_URL}`,
    publicUrl: 'https://raddix.dev',
    author: {
      name: 'Moises Machuca Valverde',
      url: 'https://moisesmachuca.com',
      username: 'immois'
    }
  }
};
