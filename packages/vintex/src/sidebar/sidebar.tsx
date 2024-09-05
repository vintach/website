'use client';

import { usePathname } from 'next/navigation';
import { Tree, type TreeNode } from '../tree';
import { type I18nConfig } from '../utils';

interface SidebarProps extends I18nConfig {
  items: TreeNode[];
}

export const Sidebar = ({ items, lang, defaultLang }: SidebarProps) => {
  const currentPath = usePathname();

  return (
    <aside className='ui-sticky ui-top-[125px] ui-hidden ui-h-[calc(100vh-125px)] ui-w-64 ui-overflow-y-auto ui-scrollbar-thin ui-scrollbar-track-gray-20/10 ui-scrollbar-thumb-gray-40/50 ui-scrollbar-track-rounded ui-scrollbar-thumb-rounded-lg md:ui-block'>
      <Tree
        items={items}
        activeItem={currentPath ?? ''}
        root
        lang={lang}
        defaultLang={defaultLang}
        showLine={false}
      />
    </aside>
  );
};
