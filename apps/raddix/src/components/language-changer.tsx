'use client';

import { useLocale, defaultLocale } from '@/i18n';
import { Language } from '@/icons/language';
import { LANGUAGES } from '@/utils/constants';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export interface LanguageChangerProps {
  label: string;
  description: string;
}

export const LanguageChanger = ({ label }: LanguageChangerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentPath = usePathname();
  const currentLocale = useLocale();

  const handleChangeLanguage = (newLocale: string) => {
    // eslint-disable-next-line curly
    if (!currentPath) return '/';
    if (currentLocale === defaultLocale) {
      router.push(`/${newLocale}/${currentPath}`);
    } else {
      router.push(currentPath.replace(currentLocale, newLocale));
    }
  };

  return (
    <div className='group/lang relative' onMouseLeave={() => setIsOpen(false)}>
      <button
        title={label}
        aria-label={label}
        className='p-[7px] group-hover/lang:text-black dark:group-hover/lang:text-white'
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        <Language size={21} />
      </button>

      <div>
        <div
          className={`absolute z-50 ${
            isOpen ? 'block' : 'hidden'
          } left-1/2 top-0 -translate-x-1/2 translate-y-[35px] py-[6.5px]`}
        >
          <div className='flex min-w-28 flex-col rounded-md border border-gray-10/80 bg-white p-xs text-xs dark:border-gray-120/80 dark:bg-black'>
            {LANGUAGES.map(lang => (
              <button
                key={lang.value}
                type='button'
                onClick={() => handleChangeLanguage(lang.value)}
                className={`mb-[3px] w-full rounded-md px-xs py-1 text-left last:mb-0 hover:bg-gray-10/50 dark:hover:bg-gray-120 ${
                  currentLocale === lang.value
                    ? 'bg-gray-10/50 text-purple-80 dark:bg-gray-120 dark:text-purple-40'
                    : ''
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
