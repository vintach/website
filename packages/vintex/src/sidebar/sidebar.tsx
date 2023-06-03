import Link from 'next/link';
import type { ReactNode } from 'react';
import type { SideBarMenuProps } from './sidebar.types';

export const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <aside className='sticky top-[125px] box-border flex w-64 flex-col gap-y-md self-start'>
      {children}
    </aside>
  );
};

export const SidebarMenu = ({ menu, currentRoute }: SideBarMenuProps) => {
  return (
    <nav className='px-[4.5px]'>
      <ol>
        {menu.map(({ title, items }, i) => (
          <li key={`${title}-${i}`} className='pb-md'>
            <span className='block pb-sm text-sm font-medium'>{title}</span>

            <ol>
              {items.map((item, ii) => {
                const isActive = item.route.path === currentRoute;
                const styleLiActive = `relative before:absolute before:left-[-3.5px] before:top-[47%] before:-translate-y-2/4 before:text-md before:text-purple-40 before:content-["•"]`;
                const styleLinkActive = `font-medium text-purple-40`;

                return (
                  <li
                    key={`${item.title}${ii}`}
                    className={isActive ? styleLiActive : undefined}
                  >
                    <Link
                      className={`block border-l-2 border-gray-100 py-xs pl-sm text-gray-30  ${
                        isActive ? styleLinkActive : `hover:text-gray-20`
                      }`}
                      href={item.route.path}
                      locale={item.route.locale}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ol>
    </nav>
  );
};
