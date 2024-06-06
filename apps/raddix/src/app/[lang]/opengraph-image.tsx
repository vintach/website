import { ImageResponse } from 'next/og';
import { OG } from '@/components/og';
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

  return new ImageResponse(
    <OG preTitle={'Raddix'} title={'Collection of essential React Hooks'} />,
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
