'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import type { SideBarMenuProps } from './sidebar.types';

export const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <aside className='ui-sticky ui-top-[125px] ui-box-border ui-hidden ui-max-h-[calc(100vh_-_165px)] ui-w-64 ui-flex-col ui-gap-y-md ui-self-start md:ui-block'>
      {children}
    </aside>
  );
};

export const SidebarMenu = ({ items }: SideBarMenuProps) => {
  const pathname = usePathname();
  return (
    <nav className='ui-overflow-y-auto ui-px-[4.5px] ui-scrollbar-thin ui-scrollbar-track-gray-20/10 ui-scrollbar-thumb-gray-40/50 ui-scrollbar-track-rounded ui-scrollbar-thumb-rounded-lg'>
      <ol>
        {items
          ? items.map(({ title, children }, i) => (
              <li key={`${title}-${i}`} className='ui-pb-md'>
                <span className='ui-mb-sm ui-block ui-text-sm ui-font-medium'>
                  {title}
                </span>

                <ol>
                  {children
                    ? children.map((item, ii) => {
                        const isActive = item.path === pathname;
                        const styleLiActive = `ui-relative before:ui-absolute before:ui-left-[-3.5px] before:ui-top-[50%] before:-ui-translate-y-2/4 before:ui-text-[17px] before:ui-text-purple-40 before:ui-content-["•"]`;
                        const styleLinkActive = `ui-font-medium ui-text-purple-40`;

                        return (
                          <li
                            key={`${item.title}${ii}`}
                            className={isActive ? styleLiActive : undefined}
                          >
                            {item.path ? (
                              <Link
                                className={`ui-block ui-border-l-[1px] ui-border-gray-100 ui-py-[4.5px] ui-pl-[14px] ui-text-sm ui-tracking-[-0.12px] ${
                                  isActive
                                    ? styleLinkActive
                                    : `ui-text-gray-50 hover:ui-text-gray-100 dark:ui-text-gray-30 dark:hover:ui-text-gray-20`
                                }`}
                                href={item.path}
                              >
                                {item.title}
                              </Link>
                            ) : (
                              <span className='ui-mb-sm ui-block ui-text-sm ui-font-medium'>
                                {item.title}
                              </span>
                            )}
                          </li>
                        );
                      })
                    : null}
                </ol>
              </li>
            ))
          : null}
      </ol>
    </nav>
  );
};
