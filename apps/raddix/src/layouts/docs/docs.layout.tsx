import { ReactNode } from 'react';
import styles from './docs.module.scss';

interface DocsProps {
  children: ReactNode;
}

const DocsLayout = ({ children }: DocsProps) => {
  return (
    <div className={styles.wrapper}>
      <aside></aside>
      <div>{children}</div>
      <aside></aside>
    </div>
  );
};

export default DocsLayout;
