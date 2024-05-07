'use client';

import { usePathname } from 'next/navigation';
import { Tree, type TreeNode } from '../tree';

interface SidebarProps {
  items: TreeNode[];
  lang: string;
  defaultLang: string;
}

export const Sidebar = ({ items, lang, defaultLang }: SidebarProps) => {
  const currentPath = usePathname();

  return (
    <aside className='sticky top-[125px] hidden h-[calc(100vh-125px)] w-64 overflow-y-auto scrollbar-thin scrollbar-track-gray-20/10 scrollbar-thumb-gray-40/50 scrollbar-track-rounded scrollbar-thumb-rounded-lg md:block'>
      <Tree
        items={items}
        activeItem={currentPath}
        root
        lang={lang}
        defaultLang={defaultLang}
        showLine={false}
      />
    </aside>
  );
};
