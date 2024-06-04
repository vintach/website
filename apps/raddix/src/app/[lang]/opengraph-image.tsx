import { ImageResponse } from 'next/og';
import { getConfigFile } from '@/lib/content';
import { OG } from '@/components/og';
import { configSite } from 'content/site/_config';
import { readFile } from 'node:fs/promises';
import fetch from 'node-fetch';

interface Props {
  params: { lang: string };
}

export const alt = 'Raddix Home Page';
export const size = {
  width: 1200,
  height: 630
};
export const contentType = 'image/png';

export default async function Image({ params: { lang } }: Props) {
  const interBold = await fetch(
    'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf'
  );
  const { meta } = getConfigFile({ lang, dirPath: 'content/site' });

  return new ImageResponse(
    <OG preTitle={configSite.meta?.title} title={meta?.description} />,
    {
      ...size,
      fonts: [
        {
          name: 'InterBold',
          data: await interBold.arrayBuffer(),
          style: 'normal'
        }
      ]
    }
  );
}
