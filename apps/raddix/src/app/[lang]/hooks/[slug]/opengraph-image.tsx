import { ImageResponse } from 'next/og';
import { OG } from '@/components/og';
import { matter } from '@/lib/matter';
import { type MetaOptions } from '@/types/content';
interface Props {
  params: { slug: string; lang: string };
}

export const runtime = 'edge';
export const alt = 'Hook Documentation';
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
  const url = new URL(
    `vintach/raddix/main/docs/${params.lang}/${params.slug}.mdx`,
    'https://raw.githubusercontent.com/'
  );

  const response = await fetch(url.toString(), {
    headers: {
      Accept: 'application/vnd.github.v3.raw'
    }
  });
  const { meta } = matter<MetaOptions>(await response.text());
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
