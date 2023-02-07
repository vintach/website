import { DocsLayout } from '@/layouts/docs';
import { getAllMdx, getMdxBySlug } from '@/lib/mdx';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

const DocsPage = ({
  mdxSource
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <DocsLayout>
      <MDXRemote {...mdxSource} />
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
}> = async ({ params, locale }) => {
  const { content, meta, slug } = getMdxBySlug({
    params,
    locale,
    file: 'docs'
  });
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource: mdxSource,
      meta
    }
  };
};

export default DocsPage;
