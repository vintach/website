import Link from 'next/link';
import styles from './button.module.scss';

interface ButtonProps {
  text: string;
  to?: string;
}

const ButtonComp = ({ text, to = '/' }: ButtonProps) => {
  return (
    <Link href={to} className={styles.button}>
      {text}
    </Link>
  );
};

export default ButtonComp;
