'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type TreeNode } from '../tree';
import { getLocaleUrl, type I18nConfig } from '../utils';
import { getPaths } from './utils';

interface PagerProps extends I18nConfig {
  sidebar: TreeNode[];
}

export const Pager = ({ sidebar, lang, defaultLang }: PagerProps) => {
  const pathname = usePathname();

  const paths = getPaths(sidebar);
  const currentPageIndex = paths.findIndex(({ path }) => {
    const slug = getLocaleUrl({ lang, defaultLang, path });
    return slug === pathname;
  });

  const prevPage = paths[currentPageIndex - 1];
  const nextPage = paths[currentPageIndex + 1];

  return (
    <nav
      aria-label='pagination'
      className='ui-mb-md ui-mt-4xl ui-grid ui-grid-cols-2 ui-gap-x-sm'
    >
      {prevPage && (
        <Link
          aria-label={`Go to previous page: ${prevPage.title}`}
          href={getLocaleUrl({ lang, defaultLang, path: prevPage.path })}
          className='ui-box-border ui-block ui-w-fit ui-rounded-xl ui-p-xs ui-text-start'
        >
          <span className='ui-mb-xs ui-block ui-text-xs ui-text-gray-40 dark:ui-text-gray-10'>
            Previous
          </span>
          <span className='ui-text-md ui-text-purple-70 dark:ui-text-purple-40'>
            {prevPage.title}
          </span>
        </Link>
      )}

      {nextPage && (
        <Link
          aria-label={`Go to next page: ${nextPage.title}`}
          href={getLocaleUrl({ lang, defaultLang, path: nextPage.path })}
          className='ui-col-start-2 ui-col-end-3 ui-ml-auto ui-w-fit ui-rounded-xl ui-p-xs ui-text-end'
        >
          <span className='ui-mb-xs ui-block ui-text-xs ui-text-gray-40 dark:ui-text-gray-10'>
            Next
          </span>
          <span className='ui-text-md ui-text-purple-70 dark:ui-text-purple-40'>
            {nextPage.title}
          </span>
        </Link>
      )}
    </nav>
  );
};
