import {
  DEVELOPMENT_MODE,
  DOMAIN,
  PORT,
  PREVIEW_MODE,
  PRODUCTION_MODE,
  SITE_URL
} from './constants';

export const getSiteUrl = (): string => {
  if (PRODUCTION_MODE) return SITE_URL;
  if (PREVIEW_MODE) return `https://${DOMAIN}`;
  if (DEVELOPMENT_MODE) return `http://localhost:${PORT}`;

  return SITE_URL;
};
