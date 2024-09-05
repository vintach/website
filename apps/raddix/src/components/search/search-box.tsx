import { useRef } from 'react';
import { Close } from '@/icons/close';
import type { SearchBoxProps } from './types';

export const SearchBox = ({ getFormProps, getInputProps }: SearchBoxProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <form
      className='relative w-full border-b border-gray-30 bg-transparent dark:border-gray-70'
      {...getFormProps({ inputElement: inputRef.current })}
    >
      <input
        className='h-4xl w-full bg-transparent px-md text-md outline-none dark:text-white'
        ref={inputRef}
        {...getInputProps({
          inputElement: inputRef.current,
          type: 'text'
        })}
      />
      <button
        className='absolute right-sm top-1/2 -translate-y-2/4 p-1 text-gray-70 hover:text-purple-70'
        type='reset'
      >
        <Close size={13} />
      </button>
    </form>
  );
};
