import { DocsLayout } from '@/layouts/docs';
import { getAllPathsMdx, getMdxBySlug, getSidebarData } from '@/lib/mdx';
import type { SidebarList } from '@/types/sidebar';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType
} from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXComponents } from '@/components/mdx';

import remarkSlug from 'remark-slug';
import { getMeta } from '@/utils/mdx';
import { rehypeFolderCodeBlock } from '@/lib/rehype-folder-code-block';

const DocsPage = ({
  mdxSource,
  sidebar,
  meta
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <DocsLayout sidebar={sidebar} meta={meta}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </DocsLayout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPathsMdx('docs');

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
  meta: Record<string, string>;
  sidebar: SidebarList[];
}> = async ({ params, locale }) => {
  const { content, meta } = getMdxBySlug({
    params,
    locale,
    file: 'docs'
  });
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkSlug],
      rehypePlugins: [rehypeFolderCodeBlock]
    }
  });

  const sidebar = getSidebarData(locale);

  return {
    props: {
      mdxSource: mdxSource,
      meta: getMeta(meta),
      sidebar
    }
  };
};

export default DocsPage;
