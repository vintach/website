'use client';
import { useLocale, defaultLocale } from '@/i18n';
import { usePathname, useRouter } from 'next/navigation';

export interface LanguageSwitcherProps {
  label: string;
  description: string;
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const router = useRouter();
  const currentPath = usePathname();
  const currentLocale = useLocale();

  const handleChangeLanguage = () => {
    // eslint-disable-next-line curly
    if (!currentPath) return '/';
    if (currentLocale === defaultLocale) {
      router.push(`/es/${currentPath}`);
    } else {
      const segments = currentPath.split('/');
      segments[1] = 'en';
      router.push(`${segments.join('/')}`);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    <button
      title={props.description}
      aria-label={props.label}
      aria-description={props.description}
      className='flex flex-col items-center justify-center gap-1 p-xs hover:text-black md:flex-row dark:hover:text-white'
      onClick={handleChangeLanguage}
    >
      <p className='text-sm font-medium uppercase'>{currentLocale}</p>
    </button>
  );
};
