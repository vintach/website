'use client';

import { usePathname } from 'next/navigation';
import type { SidebarItems } from '../sidebar';
import Link from 'next/link';

interface PaginationProps {
  menu: SidebarItems[];
}

interface RouteItem {
  title: string;
  path: string;
}

export const Pagination = ({ menu }: PaginationProps) => {
  const pathname = usePathname();

  const allRoutes = menu.reduce((acc: RouteItem[], cur) => {
    acc = [...acc, ...(cur.children as RouteItem[])];
    return acc;
  }, []);

  const currentPageIndex = allRoutes.findIndex(page => page.path === pathname);

  const prevPage = allRoutes[currentPageIndex - 1];
  const nextPage = allRoutes[currentPageIndex + 1];

  return (
    <div className='ui-mb-md ui-mt-4xl ui-grid ui-grid-cols-2 ui-gap-x-sm'>
      {prevPage && (
        <Link
          href={prevPage.path}
          className='ui-box-border ui-block ui-w-fit ui-rounded-xl ui-p-xs ui-text-start'
        >
          <span className='ui-mb-xs ui-block ui-text-xs ui-text-gray-40 dark:ui-text-gray-10'>
            Previous
          </span>
          <span className='ui-text-md ui-text-purple-40'>{prevPage.title}</span>
        </Link>
      )}

      {nextPage && (
        <Link
          href={nextPage.path}
          className='ui-col-start-2 ui-col-end-3 ui-ml-auto ui-w-fit ui-rounded-xl ui-p-xs ui-text-end'
        >
          <span className='ui-mb-xs ui-block ui-text-xs ui-text-gray-40 dark:ui-text-gray-10'>
            Next
          </span>
          <span className='ui-text-md ui-text-purple-40'>{nextPage.title}</span>
        </Link>
      )}
    </div>
  );
};
