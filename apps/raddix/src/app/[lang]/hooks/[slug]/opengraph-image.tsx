import fetch from 'node-fetch';
import { ImageResponse } from 'next/og';
import { getMdxFileRepoBySlug } from '@/lib/content';
import { OG } from '@/components/og';

const configRepo = {
  repo: 'raddix',
  owner: 'vintach',
  contentDirPath: 'docs'
};

interface Props {
  params: { slug: string; lang: string };
}

export const alt = 'Hook Documentation';
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
  const { meta } = await getMdxFileRepoBySlug({ params, ...configRepo });
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
