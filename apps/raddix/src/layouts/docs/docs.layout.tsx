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
    <div className={styles.wrapper}>
      <Sidebar list={sidebar} />
      <div>{children}</div>
      <aside></aside>
    </div>
  );
};

export default DocsLayout;
