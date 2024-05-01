'use client';

import Link from 'next/link';

export interface TreeItem {
  title: string;
  path?: string;
  heading?: boolean;
  children?: TreeItem[];
}

export interface TreeProps {
  items: TreeItem[];
  root?: boolean;
  lang?: string;
  defaultLang?: string;
  showLine?: boolean;
  activeItem: string;
}

export const Tree = ({
  items,
  root,
  lang,
  defaultLang,
  showLine = true,
  activeItem
}: TreeProps) => {
  const isRoot = root ? '' : 'ui-pl-[15px]';
  const isShowLine = showLine ? 'ui-border-l-[1px] ui-border-gray-100' : '';

  return (
    <ul className={[isRoot, isShowLine].join(' ')}>
      {items.map(({ title, path, heading, children }) => {
        const slug = lang === defaultLang ? path : `/${lang}${path}`;
        const isActive = slug === activeItem;
        return (
          <li
            key={`${title}-${path}`}
            className={`${heading ? 'ui-pb-sm pt-xs' : ''}`}
          >
            {!path ? (
              <span
                className={`${heading ? 'ui-mb-3 ui-font-semibold ui-text-white' : 'ui-py-xs ui-text-gray-50 hover:ui-text-gray-100 dark:ui-text-gray-30 dark:hover:ui-text-gray-10'} ui-block ui-text-sm ui-font-medium ui-leading-5`}
              >
                {title}
              </span>
            ) : (
              <Link
                className={`${isActive ? 'ui-text-purple-40' : 'ui-text-gray-50 hover:ui-text-gray-100 dark:ui-text-gray-30 dark:hover:ui-text-gray-10'} ui-block ui-py-xs ui-text-sm ui-leading-5 ui-tracking-[-0.12px] `}
                href={`${slug}`}
              >
                {title}
              </Link>
            )}
            {children ? (
              <Tree
                items={children}
                root={heading}
                lang={lang}
                defaultLang={defaultLang}
                showLine={showLine}
                activeItem={activeItem}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};
