import type { Children } from '@/types/global';
import styles from './demo-box.module.scss';

export const DemoBox = ({ children }: Children) => {
  return <div className={styles.container}>{children}</div>;
};
