import type { ReactNode } from 'react';
import type { SidebarList } from '@/types/sidebar';
import Head from 'next/head';
import { PageNav } from 'vintex';
import { useRouter } from 'next/router';
import { Sidebar } from '@/components/sidebar';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Pagination } from '@/components/pagination';
import styles from './docs.module.scss';

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
        {!showNavPage && <PageNav path={asPath} locale={locale!} />}
      </main>
    </>
  );
};
