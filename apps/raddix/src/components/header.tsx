'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { RightMenu } from '@/icons/right-menu';
import { Close } from '@/icons/close';
import { usePathname } from 'next/navigation';
import {
  LanguageSwitcher,
  type LanguageSwitcherProps
} from './language-switcher';
import { ThemeSwitcher, type ThemeSwitcherProps } from './theme-switcher';

export interface MenuItems {
  name: string;
  path: string;
}

interface HeaderProps {
  rootPath: string;
  menu: {
    label: string;
    items: MenuItems[];
  };
  options: {
    language: LanguageSwitcherProps;
    theme: ThemeSwitcherProps;
  };
}

export const Header = ({ menu, rootPath, options }: HeaderProps) => {
  const [isMenuMobile, setIsMenuMobile] = useState<boolean>(false);
  const currentPath = usePathname();

  const activeMenuStyles = isMenuMobile
    ? 'opacity-100 visible'
    : 'opacity-0 invisible md:visible md:opacity-100';

  const openMenu = () => {
    document.body.style.overflow = 'hidden';
    setIsMenuMobile(true);
  };

  const closeMenu = () => {
    document.body.style.overflow = 'auto';
    setIsMenuMobile(false);
  };

  useEffect(() => {
    if (isMenuMobile) {
      closeMenu();
      console.log('Me ejecute');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath]);

  return (
    <header className='sticky left-0 top-0 z-20 w-full bg-black/80 shadow-sm shadow-white/10 backdrop-blur backdrop-saturate-100 transition-colors duration-100'>
      <div className='mx-auto flex h-20 w-full max-w-std items-center justify-between px-sm py-4'>
        <Logo to={rootPath} />

        <nav
          aria-label={menu.label}
          className={`fixed inset-0 z-30 flex h-screen flex-col items-center justify-center bg-black transition-all duration-100 md:static md:h-auto md:flex-1 md:flex-row md:justify-end md:bg-transparent ${activeMenuStyles}`}
        >
          <button
            className='absolute right-5 top-6 p-xs md:hidden'
            onClick={closeMenu}
          >
            <Close size={18} />
          </button>
          <ul className='flex flex-col items-center gap-md md:flex-1 md:flex-row md:justify-center'>
            {menu.items.map((item, id) => (
              <li
                key={id}
                className='list-none text-md transition-colors duration-100 hover:text-white md:text-sm md:text-gray-20'
              >
                <Link className='md:py-sm' href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className='mt-lg grid w-64 grid-cols-3 border-t border-gray-110 pt-md md:m-0 md:flex md:w-auto md:gap-1.5 md:border-0 md:p-0 md:text-gray-20'>
            <ThemeSwitcher {...options.theme} />
            <LanguageSwitcher
              label={options.language.label}
              description={options.language.description}
            />
          </div>
        </nav>

        <div className='flex items-center justify-center gap-1.5 md:hidden'>
          <button
            className='cursor-pointer border-0 bg-[transparent] p-xs hover:text-white md:hidden'
            type='button'
            aria-label='Toggle menu'
            onClick={openMenu}
          >
            <RightMenu size={21} />
          </button>
        </div>
      </div>
    </header>
  );
};
