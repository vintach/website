import type { SidebarList, SidebarItems } from '../sidebar';
import Link from 'next/link';

interface PaginationProps {
  menu: SidebarList[];
  currentRoute: string;
}

export const Pagination = ({ menu, currentRoute }: PaginationProps) => {
  const allRoutes = menu.reduce((acc: SidebarItems[], cur) => {
    acc = [...acc, ...cur.items];
    return acc;
  }, []);

  const currentPageIndex = allRoutes.findIndex(
    page => page.route.path === currentRoute
  );

  const prevPage = allRoutes[currentPageIndex - 1];
  const nextPage = allRoutes[currentPageIndex + 1];

  return (
    <div className='mb-md mt-4xl grid grid-cols-2 gap-x-sm'>
      {prevPage && (
        <Link
          href={prevPage.route.path}
          locale={prevPage.route.locale}
          className=' box-border block w-fit rounded-xl p-xs text-start'
        >
          <span className='mb-xs block text-xs text-gray-10'>Previous</span>
          <span className='text-md text-purple-40'>{prevPage.title}</span>
        </Link>
      )}

      {nextPage && (
        <Link
          href={nextPage.route.path}
          locale={nextPage.route.locale}
          className='col-start-2 col-end-3 ml-auto w-fit rounded-xl p-xs text-end'
        >
          <span className='mb-xs block text-xs text-gray-10'>Next</span>
          <span className=' text-md text-purple-40'>{nextPage.title}</span>
        </Link>
      )}
    </div>
  );
};
