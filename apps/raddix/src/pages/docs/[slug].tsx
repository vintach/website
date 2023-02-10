import { DocsLayout } from '@/layouts/docs';
import { getAllMdx, getMdxBySlug, getSidebarData } from '@/lib/mdx';
import { SidebarList } from '@/types/sidebar';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import MDXComponents from '@/components/mdx';

const DocsPage = ({
  mdxSource,
  sidebar
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <DocsLayout sidebar={sidebar}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </DocsLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = getAllMdx('docs');

  const paths = docs.map(doc => {
    const slug = doc.replace(/\.mdx$/, '');
    const locale = slug.replace(/^[a-z-.-]+\./, '');

    return {
      params: {
        slug: slug.replace(/\.(en|es)$/, '')
      },
      locale
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
  meta: {
    [key: string]: any;
  };
  sidebar: SidebarList[];
}> = async ({ params, locale }) => {
  const { content, meta, slug } = getMdxBySlug({
    params,
    locale,
    file: 'docs'
  });
  const mdxSource = await serialize(content);

  const sidebar = getSidebarData(locale);

  return {
    props: {
      mdxSource: mdxSource,
      meta,
      sidebar
    }
  };
};

export default DocsPage;
