import { compileMDX } from 'next-mdx-remote/rsc';
import { components } from '@/components/mdx';
import remarkSlug from 'remark-slug';
import { rehypeFolderCodeBlock } from '@/lib/rehype-folder-code-block';
import { getConfigFileRepo, getMdxFileRepoBySlug } from '@/lib/content';
import { createLocalizedPaths } from '@/utils/routes';
import { locales } from '@/i18n';

const configRepo = {
  repo: 'raddix',
  owner: 'vintach',
  contentDirPath: 'docs'
};

interface Props {
  params: { slug: string; lang: string };
}

export async function generateStaticParams() {
  const config = await getConfigFileRepo({
    repo: 'raddix',
    owner: 'vintach',
    contentDirPath: 'docs'
  });

  const allHooksPaths = createLocalizedPaths(config.sidebar, locales);
  return allHooksPaths;
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
    <article className='box-border overflow-hidden'>
      {mdxCompile.content}
    </article>
  );
}
