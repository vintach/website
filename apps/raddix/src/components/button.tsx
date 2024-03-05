import type { TextStr } from '@/types/global';
import Link from 'next/link';

interface ButtonProps extends TextStr {
  to?: string;
  type: 'primary' | 'secondary';
}

export const Button = ({ text, type, to = '/' }: ButtonProps) => {
  const colorStyles = {
    primary: 'bg-purple-60 border-0 hover:bg-purple-70 text-white',
    secondary:
      'bg-transparent border border-gray-100 border-solid hover:bg-gray-10 dark:hover:bg-gray-120'
  };

  return (
    <Link
      type='button'
      href={to}
      className={`cursor-pointer rounded-3xl px-7 py-2.5 text-sm transition-colors duration-100 ${colorStyles[type]}`}
    >
      {text}
    </Link>
  );
};
