import { compileMDX } from 'next-mdx-remote/rsc';
import { components } from '@/components/mdx';
import remarkSlug from 'remark-slug';
import { rehypeFolderCodeBlock } from '@/lib/rehype-folder-code-block';
import { getConfigFileRepo, getMdxFileRepoBySlug } from '@/lib/content';
import { Pager, TableOfContent } from 'vintex';
import { defaultLocale } from '@/i18n';
import { Links } from '@/components/links';

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
  const [{ content, meta }, { sidebar }] = await Promise.all([
    getMdxFileRepoBySlug({ params, ...configRepo }),
    getConfigFileRepo(configRepo)
  ]);

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
      <article className='overflow-hidden'>
        <header className='pb-2'>
          <h1 className='text-[2.5rem] font-bold leading-[40px] tracking-[-.04em] md:text-[3rem] md:leading-[45px] md:tracking-[-.042em]'>
            {meta.title}
          </h1>
          <p className='mb-sm mt-[24px] text-sm tracking-[-.010em] text-gray-80 md:text-md dark:text-gray-10'>
            {meta.description}
          </p>
          <Links slug={params.slug} />
        </header>
        {mdxCompile.content}
        <Pager
          sidebar={sidebar}
          lang={params.lang}
          defaultLang={defaultLocale}
        />
      </article>
      <TableOfContent content={content} />
    </main>
  );
}
