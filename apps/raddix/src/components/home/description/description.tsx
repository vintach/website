import { TextProps } from '@/types/global';
import styles from './description.module.scss';

export const Description = ({ text }: TextProps) => (
  <p className={styles.root}>{text}</p>
);
