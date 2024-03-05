import type { Children } from '@/types/global';

export const Code = ({ children }: Children) => {
  return (
    <code className='rounded-md bg-gray-10 px-[4px] py-[2.8px] text-xs leading-5 md:px-[6px] md:py-[4px] md:text-[15px] md:leading-[23px] dark:bg-gray-110 dark:text-white/90'>
      {children}
    </code>
  );
};
