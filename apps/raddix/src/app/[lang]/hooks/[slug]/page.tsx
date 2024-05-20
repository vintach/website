import { compileMDX } from 'next-mdx-remote/rsc';
import { components } from '@/components/mdx';
import remarkSlug from 'remark-slug';
import { rehypeFolderCodeBlock } from '@/lib/rehype-folder-code-block';
import { getConfigFileRepo, getMdxFileRepoBySlug } from '@/lib/content';
import { Pager, TableOfContent } from 'vintex';
import { defaultLocale } from '@/i18n';
import { Links } from '@/components/links';
import { getLocaleUrl, getLocaleUrls } from '@/i18n/utils';
import { type Metadata } from 'next';
import { configSite } from 'content/site/_config';

const configRepo = {
  repo: 'raddix',
  owner: 'vintach',
  contentDirPath: 'docs'
};

interface Props {
  params: { slug: string; lang: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { meta } = await getMdxFileRepoBySlug({ params, ...configRepo });
  const url = `/hooks/${params.slug}`;
  const site = configSite.meta;

  return {
    title: `${meta.title} React Hook`,
    description: meta.description,
    keywords: [
      'React Hook',
      `${meta.title} hook`,
      `react-${params.slug}`,
      params.slug
    ],
    authors: [
      { name: site?.author?.name, url: site?.author?.url },
      {
        name: `${site?.title}`,
        url: site?.url
      }
    ],
    alternates: {
      canonical: getLocaleUrl(url, params.lang),
      languages: getLocaleUrls(url)
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'article',
      authors: [`${site?.author?.name}`],
      url: getLocaleUrl(url, params.lang),
      locale: params.lang
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta?.description,
      creator: `@${site?.author?.username}`
    }
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
