import type { MetadataRoute } from 'next';
import { configSite } from 'content/site/_config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${configSite.meta?.url}/sitemap.xml`
  };
}
