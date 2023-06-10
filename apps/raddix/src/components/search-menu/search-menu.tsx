import type { MouseEventHandler } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/router';
import { createAutocomplete } from '@algolia/autocomplete-core';
import SEARCH_DATA_EN from 'data/sidebar/en.json';
import SEARCH_DATA_ES from 'data/sidebar/es.json';
import Link from 'next/link';

interface SearchMenuProps {
  toggle: () => void;
}

interface AutocompleteItemProps {
  title: string;
  route: {
    path: string;
    locale: string;
  };
}

export const SearchMenu = ({ toggle }: SearchMenuProps) => {
  const modal = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  const { locale } = useRouter();

  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  });

  const searchSources =
    locale === 'en' ? SEARCH_DATA_EN.list : SEARCH_DATA_ES.list;

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: 'Search',
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [
          {
            sourceId: 'docs-pagination',
            getItems: ({ query }) => {
              if (query) {
                const docsItems = searchSources.flatMap(source => source.items);
                return docsItems.filter(item => {
                  const loweredTitle = item.title.toLowerCase();
                  const loweredQuery = query.toLowerCase();
                  return loweredTitle.includes(loweredQuery.toLowerCase());
                });
              }
            }
          }
        ]
      }),
    [searchSources]
  );

  const formRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  });

  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  });

  const panelProps = autocomplete.getPanelProps();

  const leaveModal: MouseEventHandler<HTMLFormElement> = event => {
    if (event.target === modal.current?.firstChild) {
      toggle();
    }
  };

  useEffect(() => {
    modal.current = document.querySelector<HTMLElement>('#modal');
    setMounted(true);
  }, []);

  if (mounted && modal.current) {
    return createPortal(
      <form
        ref={formRef}
        {...formProps}
        className='fixed inset-0 h-screen w-screen bg-black/50'
        onClick={leaveModal}
      >
        <div className='absolute inset-0 m-auto h-[80vw] max-h-[468px] w-5/6 max-w-lg rounded-xl border border-solid border-gray-100 bg-gray-120'>
          <div className='relative h-16 border-b border-solid border-gray-100 text-gray-30'>
            <input
              type='text'
              className='h-full w-full bg-black/0 px-4 py-2'
              ref={inputRef}
              {...inputProps}
            />
            <span
              className='absolute bottom-0 right-4 top-0 my-auto h-min cursor-pointer'
              onClick={toggle}
            >
              Esc
            </span>
          </div>
          <ul>
            {autocompleteState.isOpen && (
              <div ref={panelRef} {...panelProps}>
                {autocompleteState.collections.map((collection, index) => {
                  const { items } = collection;

                  return (
                    <section key={`section-${index}`}>
                      {items.length > 0 && (
                        <ul {...autocomplete.getListProps()}>
                          {items.map(item => (
                            <AutocompleteItem key={item.title} {...item} />
                          ))}
                        </ul>
                      )}
                    </section>
                  );
                })}
              </div>
            )}
          </ul>
        </div>
      </form>,
      modal.current
    );
  }

  return null;
};

function AutocompleteItem({ title, route }: AutocompleteItemProps) {
  return (
    <Link
      href={route.path}
      className='block cursor-pointer border-b border-solid border-gray-30 border-opacity-25 p-5 text-gray-10 transition-colors duration-100 hover:bg-gray-110'
    >
      <li>{title}</li>
    </Link>
  );
}
