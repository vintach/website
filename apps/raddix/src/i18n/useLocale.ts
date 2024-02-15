import { usePathname } from 'next/navigation';
import { i18nConfig } from './config';

const { locales, defaultLocale } = i18nConfig;

export const useLocale = (): string => {
  const currentPath = usePathname();

  const locale = locales.find(loc => currentPath?.includes(loc));

  return locale ?? defaultLocale;
};
