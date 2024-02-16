'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { locales, defaultLocale, useLocale } from '@/i18n';

const codeLanguage = {
  en: 'English',
  es: 'Español'
};
type CodeLanguage = keyof typeof codeLanguage;

export const Language = ({ showActive = false, menuAbsolute = true }) => {
  const currentPath = usePathname();
  const currentLocale = useLocale();

  const redirectedPathName = (locale: string) => {
    // eslint-disable-next-line curly
    if (!currentPath) return '/';

    if (currentLocale === defaultLocale) {
      return `/${locale}${currentPath}`;
    } else {
      const segments = currentPath.split('/');
      segments[1] = locale;
      return segments.join('/');
    }
  };

  const [isActive, setIsActive] = useState<boolean>(false);

  const refBtn = useRef<HTMLButtonElement>(null);
  const refMenu = useRef<HTMLDivElement>(null);

  const activeMenuStyle = isActive ? 'opacity-1 block' : 'hidden opacity-0';

  const activeItemStyle = (localName: string) => {
    return currentLocale === localName
      ? 'text-purple-40'
      : 'sm:hover:bg-gray-120';
  };

  const handleClickOutside = (e: MouseEvent | TouchEvent) => {
    const button = refBtn.current;
    const menu = refMenu.current;
    const target = e.target as Node;

    if (button?.contains(target) || menu?.contains(target)) {
      return;
    }
    setIsActive(false);
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className='py none relative w-full border-solid border-white/5 sm:mr-5 sm:flex sm:w-auto sm:border-r-2 sm:pr-4'>
      <button
        ref={refBtn}
        onClick={toggleMenu}
        className='flex w-full cursor-pointer items-center border-0 bg-[transparent] py-xs sm:w-auto sm:justify-normal sm:py-0 '
      >
        <Image
          src={'/icons/language.svg'}
          alt='language'
          width={22}
          height={22}
        />
        {showActive && (
          <span className='px-1'>
            {codeLanguage[currentLocale as CodeLanguage]}
          </span>
        )}
        <Image
          src={'/icons/bottom-arrow.svg'}
          alt='language-arrow'
          width={18}
          height={18}
        />
      </button>
      <div
        ref={refMenu}
        className={`${
          menuAbsolute ? 'absolute left-0 top-9' : 'top-0'
        } w-full min-w-max transition-opacity duration-150 ease-in sm:left-auto sm:right-0 ${activeMenuStyle}`}
      >
        <ul className='w-full space-y-1 rounded-md border-solid border-gray-50/30 bg-black sm:border sm:p-xs'>
          {locales.map(localName => {
            return (
              <li
                key={localName}
                className={`${activeItemStyle(localName)} rounded-lg`}
              >
                <Link
                  href={redirectedPathName(localName)}
                  onClick={toggleMenu}
                  className='block px-sm text-xs leading-10 sm:px-md sm:leading-8'
                >
                  {codeLanguage[localName as CodeLanguage]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
