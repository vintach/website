import { ImageResponse } from 'next/og';
import { getConfigFile } from '@/lib/content';
import { OG } from '@/components/og';
import { configSite } from 'content/site/_config';
import { getFile } from '@/utils/get-file';

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
  const interBold = await getFile('assets/Inter-Bold.ttf');
  const { meta } = getConfigFile({ lang, dirPath: 'content/site' });

  return new ImageResponse(
    <OG preTitle={configSite.meta?.title} title={meta?.description} />,
    {
      ...size,
      fonts: [
        {
          name: 'InterBold',
          data: interBold,
          style: 'normal'
        }
      ]
    }
  );
}
