import type { TextProps } from '@/types/global';
import styles from './subtitle.module.scss';

export const SubTitle = ({ text }: TextProps) => (
  <h3 className={styles.root}>{text}</h3>
);
