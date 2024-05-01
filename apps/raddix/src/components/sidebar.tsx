'use client';

import { defaultLocale, useLocale } from '@/i18n';
import { usePathname } from 'next/navigation';
import { Tree, type TreeItem } from 'vintex';

interface SidebarProps {
  content: TreeItem[];
}

export const Sidebar = ({ content }: SidebarProps) => {
  const currentLang = useLocale();
  const currentPath = usePathname();

  return (
    <aside className='sticky top-[125px] hidden h-[calc(100vh-125px)] w-64 overflow-y-auto scrollbar-thin scrollbar-track-gray-20/10 scrollbar-thumb-gray-40/50 scrollbar-track-rounded scrollbar-thumb-rounded-lg md:block'>
      <Tree
        items={content}
        activeItem={currentPath}
        root
        lang={currentLang}
        defaultLang={defaultLocale}
        showLine={false}
      />
    </aside>
  );
};
