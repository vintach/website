interface SearchBarProps {
  toggle: () => void;
}

export const SearchBar = ({ toggle }: SearchBarProps) => {
  return (
    <button
      className='flex w-full max-w-full items-center justify-between rounded-xl bg-gray-120 px-4 py-2 transition-colors duration-100 hover:bg-gray-110'
      type='button'
      onClick={toggle}
    >
      <span className='text-xs text-gray-10'>Search</span>
      <span className='text-[.75rem] text-gray-30'>Ctrl + K</span>
    </button>
  );
};
