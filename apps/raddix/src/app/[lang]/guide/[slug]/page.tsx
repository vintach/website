import { getConfigFile, getMdxFileBySlug } from '@/lib/content';
import { rehypeFolderCodeBlock } from '@/lib/rehype-folder-code-block';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkSlug from 'remark-slug';
import { components } from '@/components/mdx';
import { getFiles } from '@/utils/get-file';
import { Pager, TableOfContent } from 'vintex';
import { type Metadata } from 'next';
import { getLocaleUrl, getLocaleUrls } from '@/i18n/utils';
import { configSite } from 'content/site/_config';

interface Props {
  params: { slug: string; lang: string };
}

export function generateStaticParams() {
  const paths = getFiles({
    contentDirPath: 'content/guide',
    pattern: '*/*.mdx'
  });

  return paths.map(({ fileDir, fileName }) => ({
    slug: fileName.replace(/\.mdx$/, ''),
    lang: fileDir
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const { meta } = getMdxFileBySlug({ params, filePath: 'guide' });
  const url = `/guide/${params.slug}`;
  const site = configSite.meta;

  return {
    title: meta.title,
    description: meta.description,
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
  const { content, meta } = getMdxFileBySlug({ params, filePath: 'guide' });
  const config = getConfigFile({ lang: params.lang, dirPath: 'content/guide' });

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
        <header>
          <h1 className='pb-[3px] text-[2.6rem] font-bold leading-[1.16] tracking-[-.04em] md:pb-[6px] md:text-[3.2rem] md:leading-[1.12] md:tracking-[-.042em]'>
            {meta.title}
          </h1>
          <p className='my-sm text-sm tracking-[-.010em] text-gray-80 md:text-md dark:text-gray-10'>
            {meta.description}
          </p>
        </header>
        {mdxCompile.content}
        <Pager sidebar={config.sidebar} />
      </article>
      <TableOfContent content={content} />
    </main>
  );
}
