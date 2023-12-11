import { type Children } from './mdx';

export const Code = ({ children }: Children) => {
  return (
    <code className='rounded-md bg-gray-110 px-[4px] py-[2.8px] text-xs leading-5 md:px-[6px] md:py-[4px] md:text-[15px] md:leading-[23px]'>
      {children}
    </code>
  );
};
