import type { ReactNode } from 'react';
import styles from './docs.module.scss';
import { Sidebar } from '@/components/sidebar';
import type { SidebarList } from '@/types/sidebar';
import { PageNav } from '@/components/pagenav';
import useIsMobile from '@/hooks/isMobile';
import Head from 'next/head';
import { Pagination } from '@/components/pagination';

interface DocsProps {
  children: ReactNode;
  sidebar: SidebarList[];
  meta: {
    title?: string;
  };
}

export const DocsLayout = ({ children, sidebar, meta }: DocsProps) => {
  const showNavPage = useIsMobile('1180px');
  const showAside = useIsMobile('880px');

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>

      <main className={styles.main}>
        {!showAside && <Sidebar list={sidebar} />}
        <div className={styles.content}>
          <article>{children}</article>
          <Pagination sidebar={sidebar} />
        </div>
        {!showNavPage && <PageNav></PageNav>}
      </main>
    </>
  );
};
