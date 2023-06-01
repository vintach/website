import type { ReactNode } from 'react';
import type { SidebarList } from '@/types/sidebar';
import Head from 'next/head';
import { PageNav, Sidebar, SidebarMenu } from 'vintex';
import { useRouter } from 'next/router';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Pagination } from '@/components/pagination';
import { useCurrentSlug } from '@/hooks/useCurrentSlug';

interface DocsProps {
  children: ReactNode;
  sidebar: SidebarList[];
  meta: {
    title?: string;
  };
}

export const DocsLayout = ({ children, sidebar, meta }: DocsProps) => {
  const { asPath, locale } = useRouter();
  const showNavPage = useIsMobile('1180px');
  const showAside = useIsMobile('900px');
  const currentSlug = useCurrentSlug();

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>

      <main className='mx-auto max-w-std px-sm py-xl md:grid md:grid-cols-ax1  lg:grid-cols-ax1xa'>
        {!showAside && (
          <Sidebar>
            <SidebarMenu menu={sidebar} currentRoute={currentSlug} />
          </Sidebar>
        )}
        <article>
          <section>{children}</section>
          <Pagination sidebar={sidebar} />
        </article>
        {!showNavPage && <PageNav path={asPath} locale={locale!} />}
      </main>
    </>
  );
};
