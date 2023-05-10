import type { ReactNode } from 'react';
import styles from './demo.module.scss';
import { Switch } from './switch';

const Demo = ({ children }: { children: ReactNode }) => {
  return <div className={styles.demo}>{children} </div>;
};

export const componentsDemo = {
  Demo,
  Switch: Switch
};
