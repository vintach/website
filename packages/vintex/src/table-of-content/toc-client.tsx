'use client';

import { useScrollSpy } from '@raddix/use-scroll-spy';
import { Tree, type TreeNode } from '../tree';

interface TOCProps {
  headingIds: string[];
  headingsTree: TreeNode[];
  title: string;
}

export const TOC = ({ headingIds, headingsTree, title }: TOCProps) => {
  const activeHeading = useScrollSpy(headingIds, {
    rootMargin: '-80px 0% -72% 0%'
  });

  return (
    <nav className='ui-sticky ui-top-[125px] ui-hidden ui-h-[calc(100vh-125px)] ui-w-56 lg:ui-block'>
      <h5 className='ui-mb-sm ui-text-sm ui-font-medium'>{title}</h5>
      <Tree
        items={headingsTree}
        activeItem={`#${activeHeading}`}
        root
        showLine={false}
      />
    </nav>
  );
};
