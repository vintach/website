import { useEffect, useState } from 'react';
import { useScrollSpy } from '@raddix/use-scroll-spy';
import { usePathname } from 'next/navigation';

interface PageNavProps {
  locale: string;
}

interface IdentItem {
  id: string;
  name: string;
  depth: number;
  children?: IdentItem[];
}

interface TreeProps {
  navData: IdentItem[];
  activeItem: string;
}

const Tree = ({ navData, activeItem }: TreeProps) => {
  const childStyle = navData.at(0)?.depth ? 'pl-sm pt-[4.5px]' : '';
  return (
    <ul className={`${childStyle}`}>
      {navData.map(item => {
        return (
          <li
            key={`${item.name}-${item.depth}`}
            className='py-[4.5px] text-sm tracking-[-0.12px]'
          >
            <a
              href={`#${item.id}`}
              className={
                activeItem === item.id
                  ? 'text-purple-40'
                  : 'text-gray-50 hover:text-gray-100 dark:text-gray-30 dark:hover:text-gray-20'
              }
            >
              {item.name}
            </a>
            {item.children && (
              <Tree navData={item.children} activeItem={activeItem} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export const PageNav = ({ locale }: PageNavProps) => {
  const currentPath = usePathname();
  const [headings, setHeadings] = useState<IdentItem[]>([]);
  const [headingIds, setHeadingIds] = useState<string[]>([]);

  useEffect(() => {
    const titleElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('[data-title]')
    );

    const newHeadings: IdentItem[] = [];
    const itemIds: string[] = [];

    titleElements.forEach(({ id, nodeName, innerText }) => {
      const headingNumber = parseInt(nodeName.at(1)!);
      const depth = headingNumber - 2;
      itemIds.push(id);

      const newHeading: IdentItem = {
        id,
        name: innerText,
        depth
      };

      if (depth === 0) {
        newHeadings.push(newHeading);
        return;
      }

      const lastHeading = newHeadings.at(-1)!;
      let parentHeading = lastHeading;
      let lastChildOfParent = parentHeading.children?.at(-1);

      while (lastChildOfParent && depth > lastChildOfParent.depth) {
        parentHeading = lastChildOfParent;

        lastChildOfParent = parentHeading.children?.at(-1);
      }

      parentHeading.children ??= [];
      parentHeading.children.push(newHeading);
    });

    setHeadings(newHeadings);
    setHeadingIds(itemIds);
  }, [currentPath, locale]);

  const pageNavTitle = locale === 'en' ? 'On this page' : 'En esta página';
  const activeHeading = useScrollSpy(headingIds, {
    rootMargin: '-80px 0px -72% 0px'
  });

  return (
    <nav className='sticky top-[125px] hidden w-56 self-start lg:block'>
      <h5 className='mb-sm text-sm font-medium'>{pageNavTitle}</h5>
      <Tree navData={headings} activeItem={activeHeading} />
    </nav>
  );
};
