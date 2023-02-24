import Image from 'next/image';
import styles from './menu-mobile.module.scss';
import { Menu } from '../menu';
import { useEffect } from 'react';
import { Language } from '../language';
import classNames from 'classnames';

interface MenuAMobileProps {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

export const MenuMobile = ({ isActive, setIsActive }: MenuAMobileProps) => {
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
    <div className={styles.mobile}>
      <button onClick={() => setIsActive(!isActive)}>
        <Image
          src={'/icons/right-menu.svg'}
          alt='menu'
          width={25}
          height={25}
        />
      </button>

      <div
        className={classNames(styles.menu, { [styles.menuActive]: isActive })}
      >
        <Menu />

        <Language />
      </div>
    </div>
  );
};
