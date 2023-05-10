import Link from 'next/link';
import styles from './sidebar.module.scss';
import type {
  SideBar as SideBarProp,
  SidebarList as SidebarListProp
} from '@/types/sidebar';
import classNames from 'classnames';
import { useCurrentSlug } from '@/hooks/useCurrentSlug';

const SidebarList = ({ title, items }: SidebarListProp) => {
  const currentSlug = useCurrentSlug();
  // const itemActive = route.path === currentSlug;

  return (
    <li className={styles.list}>
      <h5 className={styles.group}>{title}</h5>
      {/* <Link
        href={route.path}
        locale={route.locale}
        className={classNames(styles.group,{
          [styles.itemActive]: itemActive
        })}
      ></Link> */}

      <ol>
        {items.map((item, i) => {
          const isActive = item.route.path === currentSlug;

          return (
            <li
              key={`${item.title}${i}`}
              className={classNames({
                [styles.subItemActive]: isActive
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

export const Sidebar = ({ list: sidebarList }: SideBarProp) => {
  return (
    <aside className={styles.aside}>
      <ol>
        {sidebarList.map((list, i) => {
          return (
            <SidebarList
              key={`${list.title}${i}`}
              items={list.items}
              title={list.title}
              route={list.route}
            />
          );
        })}
      </ol>
    </aside>
  );
};
