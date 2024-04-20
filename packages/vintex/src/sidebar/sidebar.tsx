import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import type { SideBarMenuProps } from './sidebar.types';

export const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <aside className='sticky top-[125px] box-border hidden max-h-[calc(100vh_-_165px)] w-64 flex-col gap-y-md self-start md:block'>
      {children}
    </aside>
  );
};

export const SidebarMenu = ({ items }: SideBarMenuProps) => {
  const pathname = usePathname();
  return (
    <nav className='overflow-y-auto px-[4.5px] scrollbar-thin scrollbar-track-gray-20/10 scrollbar-thumb-gray-40/50 scrollbar-track-rounded scrollbar-thumb-rounded-lg'>
      <ol>
        {items
          ? items.map(({ title, children }, i) => (
              <li key={`${title}-${i}`} className='pb-md'>
                <span className='mb-sm block  text-sm font-medium'>
                  {title}
                </span>

                <ol>
                  {children
                    ? children.map((item, ii) => {
                        const isActive = item.path === pathname;
                        const styleLiActive = `relative before:absolute before:left-[-3.5px] before:top-[50%] before:-translate-y-2/4 before:text-[17px] before:text-purple-40 before:content-["•"]`;
                        const styleLinkActive = `font-medium text-purple-40`;

                        return (
                          <li
                            key={`${item.title}${ii}`}
                            className={isActive ? styleLiActive : undefined}
                          >
                            {item.path ? (
                              <Link
                                className={`block border-l-[1px] border-gray-100 py-[4.5px] pl-[14px] text-sm tracking-[-0.12px] ${
                                  isActive
                                    ? styleLinkActive
                                    : `text-gray-50 hover:text-gray-100 dark:text-gray-30 dark:hover:text-gray-20`
                                }`}
                                href={item.path}
                              >
                                {item.title}
                              </Link>
                            ) : (
                              <span className='mb-sm block  text-sm font-medium'>
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
