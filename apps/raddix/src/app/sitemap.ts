import type { MetadataRoute } from 'next';
import { configSite } from 'content/site/_config';
import { getConfigFile, getConfigFileRepo } from '@/lib/content';
import { getPaths } from 'vintex';
import { getLocaleUrls } from '@/i18n/utils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const guideConfig = getConfigFile({ lang: 'en', dirPath: 'content/guide' });
  const hookConfig = await getConfigFileRepo({
    repo: 'raddix',
    owner: 'vintach',
    contentDirPath: 'docs'
  });

  const guidePaths = getPaths(guideConfig.sidebar);
  const hookPaths = getPaths(hookConfig.sidebar);

  return [
    {
      url: `${configSite.meta?.url}`,
      alternates: {
        languages: getLocaleUrls('/', configSite.meta?.url)
      },
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    ...guidePaths.map(({ path }) => ({
      url: `${configSite.meta?.url}${path}`,
      alternates: {
        languages: getLocaleUrls(path, configSite.meta?.url)
      },
      lastModified: new Date(),
      priority: 0.8
    })),
    ...hookPaths.map(({ path }) => ({
      url: `${configSite.meta?.url}${path}`,
      alternates: {
        languages: getLocaleUrls(path, configSite.meta?.url)
      },
      lastModified: new Date(),
      priority: 0.9
    }))
  ];
}
