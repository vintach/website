import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export const Language = () => {
  const { locales, pathname, query } = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);

  const refBtn = useRef<HTMLButtonElement>(null);
  const refMenu = useRef<HTMLDivElement>(null);

  const activeMenuStyle = isActive
    ? 'opacity-1 visible'
    : 'invisible opacity-0';

  const handleClickOutside = (e: MouseEvent | TouchEvent) => {
    const button = refBtn.current;
    const menu = refMenu.current;
    const target = e.target as Node;

    if (button?.contains(target) || menu?.contains(target)) {
      return;
    }
    setIsActive(false);
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative w-full sm:w-auto'>
      <button
        ref={refBtn}
        onClick={toggleMenu}
        className='flex w-full cursor-pointer items-center justify-between border-0 bg-[transparent] py-sm sm:w-auto sm:justify-normal sm:px-sm sm:py-xs'
      >
        <Image
          src={'/icons/language.svg'}
          alt='language'
          width={25}
          height={25}
        />
        <Image
          src={'/icons/bottom-arrow.svg'}
          alt='language-arrow'
          width={18}
          height={18}
        />
      </button>
      <div
        ref={refMenu}
        className={`absolute left-0 top-16 w-full min-w-max transition-opacity duration-150 ease-in sm:left-auto sm:right-0 ${activeMenuStyle}`}
      >
        <ul className='w-full space-y-1 rounded-md border-solid border-gray-50/30 bg-black sm:border sm:p-xs'>
          {locales?.map(localName => {
            return (
              <li key={localName} className='rounded-lg sm:hover:bg-gray-90'>
                <Link
                  href={{
                    pathname,
                    query
                  }}
                  locale={localName}
                  onClick={toggleMenu}
                  className='block px-sm text-sm leading-10 sm:px-md sm:leading-8'
                >
                  {localName === 'en' ? 'English' : 'Español'}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
