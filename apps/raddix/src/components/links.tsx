import { CodecovIcon } from '@/icons/codecov';
import { GithubIcon } from '@/icons/github';
import { NpmIcon } from '@/icons/npm';
import { PkgphobiaIcon } from '@/icons/pkgphobia';
import Link from 'next/link';

interface LinksProp {
  slug: string;
}

const linkList = [
  {
    href: 'https://github.com/vintach/raddix/tree/main/packages/hooks/',
    text: 'Source',
    icon: <GithubIcon />
  },
  {
    href: 'https://www.npmjs.com/package/@raddix/',
    text: 'View package',
    icon: <NpmIcon />
  },
  {
    href: 'https://app.codecov.io/gh/vintach/raddix/tree/main/packages%2Fhooks%2F',
    text: 'Coverage',
    icon: <CodecovIcon />
  },
  {
    href: 'https://packagephobia.com/result?p=%40raddix%2F',
    text: 'Export size',
    icon: <PkgphobiaIcon />
  }
];

export const Links = ({ slug }: LinksProp) => {
  return (
    <ul className='flex max-w-full gap-3 overflow-hidden overflow-x-auto whitespace-nowrap scrollbar-none'>
      {linkList.map(({ text, icon, href }) => (
        <li key={`${text}-${slug}`}>
          <Link
            className='flex h-[30px] items-center gap-2 rounded border border-gray-110 px-3 text-xs'
            href={`${href}${slug}`}
            target='_blank'
          >
            {icon} {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
