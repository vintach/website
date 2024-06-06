import { ImageResponse } from 'next/og';
import { getMdxFileBySlug } from '@/lib/content';
import { OG } from '@/components/og';

interface Props {
  params: { slug: string; lang: string };
}

export const alt = 'Guide Documentation';
export const size = {
  width: 1200,
  height: 630
};
export const contentType = 'image/png';

export default async function Image({ params }: Props) {
  const interBold = await fetch(
    'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf'
  );
  const interRegular = await fetch(
    'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf'
  );
  const { meta } = getMdxFileBySlug({ params, filePath: 'guide' });
  const { title, description } = meta;

  return new ImageResponse(<OG title={title} description={description} />, {
    ...size,
    fonts: [
      {
        name: 'InterBold',
        data: await interBold.arrayBuffer(),
        style: 'normal'
      },
      {
        name: 'InterRegular',
        data: await interRegular.arrayBuffer(),
        style: 'normal'
      }
    ]
  });
}
