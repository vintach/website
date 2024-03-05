import { usePathname } from 'next/navigation';
import type { SidebarList, SidebarItems } from '../sidebar';
import Link from 'next/link';

interface PaginationProps {
  menu: SidebarList[];
}

export const Pagination = ({ menu }: PaginationProps) => {
  const pathname = usePathname();

  const allRoutes = menu.reduce((acc: SidebarItems[], cur) => {
    acc = [...acc, ...cur.items];
    return acc;
  }, []);

  const currentPageIndex = allRoutes.findIndex(page => page.route === pathname);

  const prevPage = allRoutes[currentPageIndex - 1];
  const nextPage = allRoutes[currentPageIndex + 1];

  return (
    <div className='mb-md mt-4xl grid grid-cols-2 gap-x-sm'>
      {prevPage && (
        <Link
          href={prevPage.route}
          className=' box-border block w-fit rounded-xl p-xs text-start'
        >
          <span className='mb-xs block text-xs text-gray-40 dark:text-gray-10'>
            Previous
          </span>
          <span className='text-md text-purple-40'>{prevPage.title}</span>
        </Link>
      )}

      {nextPage && (
        <Link
          href={nextPage.route}
          className='col-start-2 col-end-3 ml-auto w-fit rounded-xl p-xs text-end'
        >
          <span className='mb-xs block text-xs text-gray-40 dark:text-gray-10'>
            Next
          </span>
          <span className=' text-md text-purple-40'>{nextPage.title}</span>
        </Link>
      )}
    </div>
  );
};
