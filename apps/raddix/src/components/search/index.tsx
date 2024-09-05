/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { SearchIcon } from '@/icons/search';
import { useEffect } from 'react';
import { Dialog, DialogContent, useDialog } from 'vintex';
import { SearchBox } from './search-box';
import type { SearchProps } from './types';
import { SearchResults } from './search-results';
import { useAutocomplete } from '@/hooks/useAutocomplete';
import { usePathname } from 'next/navigation';

export const Search = ({ label, errorMessage }: SearchProps) => {
  const { modalRef, open, close, isOpen } = useDialog();
  const { autocomplete, autocompleteState } = useAutocomplete({ label });
  const pathname = usePathname();

  useEffect(() => {
    close();
    autocomplete.setQuery('');
  }, [pathname]);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const isSearchMenuOpen = modalRef.current?.open;
      if (!isSearchMenuOpen && event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        open();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  return (
    <div>
      <button
        type='button'
        onClick={open}
        title={`${label} · CtrlK`}
        className='p-[7px] hover:text-black dark:hover:text-white'
      >
        <SearchIcon />
      </button>

      <Dialog ref={modalRef} className='w-full max-w-xl'>
        {isOpen ? (
          <DialogContent
            close={close}
            className='h-full w-full rounded-2xl border border-gray-30 bg-white md:h-auto dark:border-gray-70 dark:bg-black'
            {...autocomplete.getRootProps()}
          >
            <SearchBox
              getFormProps={autocomplete.getFormProps}
              getInputProps={autocomplete.getInputProps}
            />
            <SearchResults
              autocompleteState={autocompleteState}
              getItemProps={autocomplete.getItemProps}
              getListProps={autocomplete.getListProps}
              getPanelProps={autocomplete.getPanelProps}
              errorMessage={errorMessage}
            />
          </DialogContent>
        ) : null}
      </Dialog>
    </div>
  );
};
