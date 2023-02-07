import Link from 'next/link';
import styles from './sidebar.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export interface SidebarItems {
  title: string;
  route: {
    path: string;
    locale: string;
  };
}

export interface SidebarList {
  title: string;
  items: SidebarItems[];
}

export interface SideBar {
  list: SidebarList[];
}

const SidebarList = ({ title, items }: SidebarList) => {
  const { asPath } = useRouter();

  return (
    <li className={styles.list}>
      <h5>{title}</h5>

      <ol>
        {items.map((item, i) => {
          const isActive = item.route.path === asPath;

          return (
            <li
              key={item.title + i}
              className={classNames({
                [styles.itemActive]: isActive
              })}
            >
              <Link href={item.route.path} locale={item.route.locale}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </li>
  );
};

const SidebarComp = ({ list: sidebarList }: SideBar) => {
  return (
    <aside className={styles.aside}>
      <ol>
        {sidebarList.map((list, i) => {
          return (
            <SidebarList
              key={list.title + i}
              items={list.items}
              title={list.title}
            />
          );
        })}
      </ol>
    </aside>
  );
};

export default SidebarComp;
