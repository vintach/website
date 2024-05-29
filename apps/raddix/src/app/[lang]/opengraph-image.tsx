import { ImageResponse } from 'next/og';
import { OG } from '@/components/og';
import { getSiteConfig } from 'content/site/get-config';
import { configSite } from 'content/site/_config';

interface Props {
  params: { lang: string };
}

// Route segment config
export const runtime = 'edge';
export const alt = 'Raddix Home Page';
export const size = {
  width: 1200,
  height: 630
};
export const contentType = 'image/png';

export default async function Image({ params: { lang } }: Props) {
  const inter = fetch(
    new URL('../../../assets/Inter-Bold.ttf', import.meta.url)
  ).then(res => res.arrayBuffer());
  const config = await getSiteConfig(lang);

  return new ImageResponse(
    <OG preTitle={configSite.meta?.title} title={config.meta?.description} />,
    {
      ...size,
      fonts: [
        { name: 'Inter', data: await inter, style: 'normal', weight: 700 }
      ]
    }
  );
}
