import { ReactNode } from 'react';
import styles from './docs.module.scss';
import { Sidebar } from '@/components/sidebar';
import { SidebarList } from '@/types/sidebar';

interface DocsProps {
  children: ReactNode;
  sidebar: SidebarList[];
}

const DocsLayout = ({ children, sidebar }: DocsProps) => {
  return (
    <main className={styles.wrapper}>
      <Sidebar list={sidebar} />
      <div className={styles.content}>{children}</div>
      <nav></nav>
    </main>
  );
};

export default DocsLayout;
