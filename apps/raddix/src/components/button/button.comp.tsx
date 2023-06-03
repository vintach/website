import Link from 'next/link';

interface ButtonProps {
  text: string;
  to?: string;
  type: 'primary' | 'secondary';
}

export const Button = ({ text, type, to = '/' }: ButtonProps) => {
  const colorStyles = {
    primary: 'bg-purple-60 border-0 hover:bg-purple-70',
    secondary:
      'bg-transparent border border-gray-100 border-solid hover:bg-gray-120'
  };

  return (
    <Link
      href={to}
      className={`cursor-pointer rounded-3xl px-7 py-2.5 text-sm duration-100 ${colorStyles[type]}`}
    >
      {text}
    </Link>
  );
};
