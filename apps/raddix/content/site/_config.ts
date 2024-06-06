import { type Config } from '@/types/content';
import { DEVELOPMENT_MODE, DOMAIN, PORT } from '@/utils/constants';

export const configSite: Config = {
  sidebar: [],
  meta: {
    title: 'Raddix',
    url: DEVELOPMENT_MODE ? `http://localhost:${PORT}` : `https://${DOMAIN}`,
    author: {
      name: 'Moises Machuca Valverde',
      url: 'https://moisesmachuca.com',
      username: 'immois'
    }
  }
};
