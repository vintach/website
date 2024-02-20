import { components } from '@/components/mdx';
import { getAllPathsMdx, getMdxBySlug } from '@/lib/mdx';
import { rehypeFolderCodeBlock } from '@/lib/rehype-folder-code-block';
import type { Metadata } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkSlug from 'remark-slug';

interface Props {
  params: { slug: string; lang: string };
}

export function generateStaticParams() {
  const paths = getAllPathsMdx('docs');

  const newPaths = paths.filter(path => path.slug.length > 0);
  return newPaths;
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { meta } = getMdxBySlug({ params, file: 'docs' });

  return {
    title: meta.title,
    description: meta.description,
    authors: [{ name: 'Raddix' }]
  };
}

export default async function Page({ params }: Props) {
  const { content } = getMdxBySlug({ params, file: 'docs' });

  const mdxCompile = await compileMDX({
    source: content,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkSlug],
        rehypePlugins: [rehypeFolderCodeBlock]
      }
    }
  });

  return <section>{mdxCompile.content}</section>;
}
