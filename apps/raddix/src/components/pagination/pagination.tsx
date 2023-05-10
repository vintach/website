import { useCurrentSlug } from '@/hooks/useCurrentSlug';
import styles from './pagination.module.scss';
import type { SidebarItems, SidebarList } from '@/types/sidebar';
import Link from 'next/link';

interface PaginationProps {
  sidebar: SidebarList[];
}

export const Pagination = ({ sidebar }: PaginationProps) => {
  const currentSlug = useCurrentSlug();
  const allRoutes = sidebar.reduce((acc: SidebarItems[], cur) => {
    acc = [...acc, ...cur.items];
    return acc;
  }, []);
  const currentPageIndex = allRoutes.findIndex(
    page => page.route.path === currentSlug
  );

  const prevPage = allRoutes[currentPageIndex - 1];
  const nextPage = allRoutes[currentPageIndex + 1];

  return (
    <div className={styles.container}>
      {prevPage && (
        <Link
          href={prevPage.route.path}
          locale={prevPage.route.locale}
          className={styles.prev}
        >
          <span>Previous</span>
          <span>{prevPage.title}</span>
        </Link>
      )}

      {nextPage && (
        <Link
          href={nextPage.route.path}
          locale={nextPage.route.locale}
          className={styles.next}
        >
          <span>Next</span>
          <span>{nextPage.title}</span>
        </Link>
      )}
    </div>
  );
};
