import { useEffect, useState } from 'react';

interface PageNavProps {
  locale: string;
  path: string;
}

interface IdentItem {
  id: string;
  name: string;
  depth: number;
  children?: IdentItem[];
}

interface TreeProps {
  navData: IdentItem[];
}

const Tree = ({ navData }: TreeProps) => {
  const childStyle = navData.at(0)?.depth ? 'pl-sm pt-xs' : '';
  return (
    <ul className={`${childStyle}`}>
      {navData.map(item => {
        return (
          <li key={`${item.name}-${item.depth}`} className='py-xs'>
            <a href={`#${item.id}`} className='text-gray-30 hover:text-gray-20'>
              {item.name}
            </a>
            {item.children && <Tree navData={item.children} />}
          </li>
        );
      })}
    </ul>
  );
};

export const PageNav = ({ locale, path }: PageNavProps) => {
  const [headings, setHeadings] = useState<IdentItem[]>([]);

  useEffect(() => {
    const titleElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('[data-title]')
    );

    const newHeadings: IdentItem[] = [];

    titleElements.forEach(({ id, nodeName, innerText }) => {
      const headingNumber = parseInt(nodeName.at(1)!);
      const depth = headingNumber - 2;

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
  }, [path, locale]);

  const pageNavTitle = locale === 'en' ? 'On this page' : 'En esta página';

  return (
    <nav className='sticky top-[125px] w-64 self-start pl-md'>
      <h5 className='mb-sm text-sm font-medium'>{pageNavTitle}</h5>
      <Tree navData={headings} />
    </nav>
  );
};
