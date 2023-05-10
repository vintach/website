import Link from 'next/link';
import styles from './button.module.scss';

interface ButtonProps {
  text: string;
  to?: string;
}

export const Button = ({ text, to = '/' }: ButtonProps) => {
  return (
    <Link href={to} className={styles.button}>
      {text}
    </Link>
  );
};
