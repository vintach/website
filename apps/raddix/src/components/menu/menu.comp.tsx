import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from './menu.module.scss';
import nextConfig from '../../../next.config';

interface MenuItems {
  name: string;
  path: string;
}

const MenuComp = () => {
  const [menuItems, setMenuItems] = useState<MenuItems[]>([]);
  const { locale } = useRouter();

  const getMenuItems = async () => {
    const realLocale = locale ?? nextConfig.i18n.defaultLocale;
    const response = await import(`../../../data/menu/${realLocale}.json`);
    setMenuItems(response.navList);
  };

  useEffect(() => {
    getMenuItems();
  }, [locale]);

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

export default MenuComp;
