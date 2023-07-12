import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import nextConfig from 'next.config';

interface MenuItems {
  name: string;
  path: string;
}

export const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuItems[]>([]);
  const { locale } = useRouter();

  const getMenuItems = useCallback(async () => {
    const realLocale = locale ?? nextConfig.i18n.defaultLocale;
    const response: { navList: MenuItems[] } = await import(
      `data/menu/${realLocale}.json`
    );
    setMenuItems(response.navList);
  }, [locale]);

  useEffect(() => {
    getMenuItems();
  }, [locale, getMenuItems]);

  return (
    <nav className='w-full sm:w-auto '>
      <ul className='flex w-full flex-col items-center justify-center sm:flex-row sm:gap-md'>
        {menuItems.map((item, id) => (
          <li
            key={id}
            className='opacity-1 w-full list-none pb-xs text-sm transition-opacity duration-100 first:m-0 hover:opacity-80 sm:w-auto sm:pb-0'
          >
            <Link
              href={item.path}
              locale={locale}
              className='block py-xs sm:inline sm:py-sm'
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
