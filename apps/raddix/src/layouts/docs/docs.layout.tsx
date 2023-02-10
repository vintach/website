import { ReactNode } from 'react';
import styles from './docs.module.scss';
import { Sidebar } from '@/components/sidebar';
import { SidebarList } from '@/types/sidebar';
import { PageNav } from '@/components/pagenav';
import useIsMobile from '@/hooks/isMobile';

interface DocsProps {
  children: ReactNode;
  sidebar: SidebarList[];
}

const DocsLayout = ({ children, sidebar }: DocsProps) => {
  const showNavPage = useIsMobile('1180px');
  const showAside = useIsMobile('880px');

  return (
    <main className={styles.main}>
      {!showAside && <Sidebar list={sidebar} />}
      <div className={styles.content}>{children}</div>
      {!showNavPage && <PageNav></PageNav>}
    </main>
  );
};

export default DocsLayout;
