import { ImageResponse } from 'next/og';
import { getMdxFileRepoBySlug } from '@/lib/content';
import { OG } from '@/components/og';
import { getFileSync } from '@/utils/get-file';

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
  const interBold = getFileSync('assets', 'Inter-Bold.ttf');
  const interRegular = getFileSync('assets', 'Inter-Regular.ttf');
  const { meta } = await getMdxFileRepoBySlug({ params, ...configRepo });
  const { title, description } = meta;

  return new ImageResponse(<OG title={title} description={description} />, {
    ...size,
    fonts: [
      {
        name: 'InterBold',
        data: interBold,
        style: 'normal'
      },
      {
        name: 'InterRegular',
        data: interRegular,
        style: 'normal'
      }
    ]
  });
}
