import { TextProps } from '@/types/global';
import styles from './anti-subtitle.module.scss';

export const AntiSubtitle = ({ text }: TextProps) => (
  <h2 className={styles.root}>{text}</h2>
);
