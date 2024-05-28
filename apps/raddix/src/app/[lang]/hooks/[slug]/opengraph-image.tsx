import { ImageResponse } from 'next/og';
import { OG } from '@/components/og';
import { matter } from '@/lib/matter';
import { type MetaOptions } from '@/types/content';
import { getRemoteFile } from '@/utils/get-remote-file';
interface Props {
  params: { slug: string; lang: string };
}

const configRepo = {
  repo: 'raddix',
  owner: 'vintach',
  branch: 'main'
};

export const runtime = 'edge';
export const alt = 'Hook Docs';
export const size = {
  width: 1200,
  height: 630
};
export const contentType = 'image/png';

export default async function Image({ params }: Props) {
  const interBold = fetch(
    new URL('../../../../../assets/Inter-Bold.ttf', import.meta.url)
  ).then(res => res.arrayBuffer());
  const interRegular = fetch(
    new URL('../../../../../assets/Inter-Regular.ttf', import.meta.url)
  ).then(res => res.arrayBuffer());
  const response = await getRemoteFile({
    ...configRepo,
    filePath: `docs/${params.lang}/${params.slug}.mdx`
  });
  const { meta } = matter<MetaOptions>(response);
  const { title, description } = meta;

  return new ImageResponse(<OG title={title} description={description} />, {
    ...size,
    fonts: [
      {
        name: 'InterBold',
        data: await interBold,
        style: 'normal'
      },
      {
        name: 'InterRegular',
        data: await interRegular,
        style: 'normal'
      }
    ]
  });
}
