import { compileMDX } from 'next-mdx-remote/rsc';
import { components } from '@/components/mdx';
import remarkSlug from 'remark-slug';
import { rehypeFolderCodeBlock } from '@/lib/rehype-folder-code-block';
import { getMdxFileRepoBySlug } from '@/lib/content';
import { TableOfContent } from 'vintex';

const configRepo = {
  repo: 'raddix',
  owner: 'vintach',
  contentDirPath: 'docs'
};

interface Props {
  params: { slug: string; lang: string };
}

export async function generateMetadata({ params }: Props) {
  const { meta } = await getMdxFileRepoBySlug({ params, ...configRepo });

  return {
    title: meta.title,
    description: meta.description,
    authors: [{ name: 'Raddix' }]
  };
}

export default async function Page({ params }: Props) {
  const { content } = await getMdxFileRepoBySlug({ params, ...configRepo });

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

  return (
    <main className='relative grid w-full gap-2xl md:grid-cols-1xa'>
      <article className='overflow-hidden'>{mdxCompile.content}</article>
      <TableOfContent content={content} />
    </main>
  );
}
