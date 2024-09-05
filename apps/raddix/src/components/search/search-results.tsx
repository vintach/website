'use client';

import type { SearchItemProps, SearchResultsProps } from './types';
import { CodeIcon } from '@/icons/code';
import { FileIcon } from '@/icons/file';
import { useRouter } from 'next/navigation';

export const SearchResults = ({
  getPanelProps,
  getListProps,
  getItemProps,
  autocompleteState,
  errorMessage
}: SearchResultsProps) => {
  const { collections } = autocompleteState;

  return (
    <section
      className='scrollbar-custom h-96 overflow-y-hidden px-xs py-xs hover:overflow-y-scroll hover:pr-[3px]'
      {...getPanelProps()}
    >
      {collections.every(collection => collection.items.length === 0) ? (
        <div className='flex h-full w-full flex-col items-center justify-center'>
          <p className='mb-1 text-center text-xl font-medium text-gray-60 dark:text-gray-10'>
            {errorMessage[0]}
          </p>
          <p className='text-center text-md text-gray-50 dark:text-gray-20'>
            {errorMessage[1]}
          </p>
        </div>
      ) : (
        collections.map(({ source, items }) => {
          if (items.length === 0) return null;

          return (
            <ul key={source.sourceId} {...getListProps()}>
              <li
                role='presentation'
                className='my-xs flex items-center px-xs text-xs text-gray-50 dark:text-gray-20'
              >
                {source.sourceId}
              </li>
              {items.map(item => (
                <SearchItem
                  key={item.path}
                  getItemProps={getItemProps}
                  source={source}
                  item={item}
                />
              ))}
            </ul>
          );
        })
      )}
    </section>
  );
};

export const SearchItem = ({ source, item, getItemProps }: SearchItemProps) => {
  const { sourceId } = source;
  const { title, path } = item;
  const router = useRouter();

  return (
    <li
      className='flex h-2xl cursor-pointer items-center rounded-md px-xs text-sm text-gray-50 transition-colors duration-100 aria-selected:bg-gray-10/50 aria-selected:text-gray-60 hover:bg-gray-10/50 hover:text-gray-60 dark:text-gray-20 dark:aria-selected:bg-gray-110 dark:aria-selected:text-gray-10 dark:hover:bg-gray-110 dark:hover:text-gray-10'
      {...getItemProps({ item, source })}
      onClick={() => router.push(path)}
    >
      {sourceId === 'hooks' ? <CodeIcon size={16} /> : <FileIcon size={16} />}
      <span className='ml-xs'>{title}</span>
    </li>
  );
};
