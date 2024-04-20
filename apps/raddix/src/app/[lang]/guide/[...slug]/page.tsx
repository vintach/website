import { getMdxFileBySlug } from '@/lib/content';
import { rehypeFolderCodeBlock } from '@/lib/rehype-folder-code-block';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkSlug from 'remark-slug';
import { components } from '@/components/mdx';
import { getFiles } from '@/utils/get-file';

interface Props {
  params: { slug: string; lang: string };
}

export function generateStaticParams() {
  const paths = getFiles({
    contentDirPath: 'content/guide',
    pattern: '*/*.mdx'
  });

  return paths.map(({ fileDir, fileName }) => ({
    slug: [fileName.replace(/\.mdx$/, '')],
    lang: fileDir
  }));
}

export function generateMetadata({ params }: Props) {
  const { meta } = getMdxFileBySlug({ params, filePath: 'guide' });

  return {
    title: meta.title,
    description: meta.description,
    authors: [{ name: 'Raddix' }]
  };
}

export default async function Page({ params }: Props) {
  const { content, meta } = getMdxFileBySlug({ params, filePath: 'guide' });

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
    <article className='box-border overflow-hidden'>
      <header>
        <h1 className='pb-[3px] text-[2.6rem] font-bold leading-[1.16] tracking-[-.04em] md:pb-[6px] md:text-[3.2rem] md:leading-[1.12] md:tracking-[-.042em]'>
          {meta.title}
        </h1>
        <p className='my-sm text-sm tracking-[-.010em] text-gray-80 md:text-md dark:text-gray-10'>
          {meta.description}
        </p>
      </header>
      {mdxCompile.content}
    </article>
  );
}
