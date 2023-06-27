import { useEffect } from 'react';
import Image from 'next/image';
import { Menu } from '../menu';
import { Language } from '../language';

interface MenuAMobileProps {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

export const MenuMobile = ({ isActive, setIsActive }: MenuAMobileProps) => {
  const activeMenuStyles = isActive
    ? 'opacity-1 visible'
    : 'opacity-0 invisible';

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isActive]);

  return (
    <div>
      <button
        className='cursor-pointer border-0 bg-[transparent] px-sm py-xs'
        onClick={toggleMenu}
      >
        <Image
          src={'/icons/right-menu.svg'}
          alt='menu'
          width={25}
          height={25}
        />
      </button>
      <div
        className={`absolute left-0 top-20 z-20 h-[calc(100vh-80px)] w-full bg-black px-3xl py-lg transition-all duration-200 ease-in ${activeMenuStyles}`}
      >
        <Menu />
        <Language />
      </div>
    </div>
  );
};
