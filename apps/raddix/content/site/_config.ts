import { type Config } from '@/types/content';
import { getSiteUrl } from '@/utils/get-site-url';

export const configSite: Config = {
  sidebar: [],
  meta: {
    title: 'Raddix',
    url: getSiteUrl(),
    author: {
      name: 'Moises Machuca Valverde',
      url: 'https://moisesmachuca.com',
      username: 'immois'
    }
  }
};
