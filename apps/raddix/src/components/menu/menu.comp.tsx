import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './menu.module.scss';
import nextConfig from '../../../next.config';

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
      `../../../data/menu/${realLocale}.json`
    );
    setMenuItems(response.navList);
  }, [locale]);

  useEffect(() => {
    getMenuItems();
  }, [locale, getMenuItems]);

  return (
    <nav className={styles.nav}>
      <ul>
        {menuItems.map((item, id) => (
          <li key={id}>
            <Link href={item.path} locale={locale}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
