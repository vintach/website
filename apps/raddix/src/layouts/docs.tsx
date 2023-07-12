import type { ReactNode } from 'react';
import type { SidebarList } from 'vintex';
import Head from 'next/head';
import { PageNav, Sidebar, SidebarMenu, Pagination } from 'vintex';
import { useRouter } from 'next/router';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useCurrentSlug } from '@/hooks/useCurrentSlug';
import { SearchBar } from '@/components/search-bar';
import { useSearch } from '@/hooks/useSearch';
import { SearchMenu } from '@/components/search-menu';

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
  const { isSearchMenuOpen, toggleSearchMenu } = useSearch();

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>

      <main className='mx-auto max-w-std px-sm py-xl md:grid md:grid-cols-ax1  lg:grid-cols-ax1xa'>
        {isSearchMenuOpen && <SearchMenu toggle={toggleSearchMenu} />}
        {!showAside && (
          <Sidebar>
            <SearchBar toggle={toggleSearchMenu} />
            <SidebarMenu menu={sidebar} currentRoute={currentSlug} />
          </Sidebar>
        )}
        <article className='box-border overflow-hidden md:px-md'>
          <section>{children}</section>
          <Pagination menu={sidebar} currentRoute={currentSlug} />
        </article>
        {!showNavPage && <PageNav path={asPath} locale={locale!} />}
      </main>
    </>
  );
};
