import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './header.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { Menu } from '../menu';
import { Language } from '../language';
import useIsMobile from '@/hooks/isMobile';
import { MenuMobile } from '../menu-mobile';
import { Message } from '../message';

export const Header = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isMenuMobile, setIsMenuMobile] = useState<boolean>(false);
  const { locale } = useRouter();

  const isMobile = useIsMobile('640px');

  const updateScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <header
      className={classNames(styles.wrapper, {
        [styles.scroll]: scrollY > 2 && !isMenuMobile
      })}
    >
      <div className={styles.header}>
        <Link className={styles.logo} href={'/'} locale={locale}>
          <Image src='/raddix.svg' alt='Raddix logo' width={24} height={36} />
          <h1>raddix</h1>
        </Link>

        {!isMobile && (
          <>
            <Message text='This site is under costruction' />
            <Menu />
            <Language />
          </>
        )}

        {isMobile && (
          <MenuMobile isActive={isMenuMobile} setIsActive={setIsMenuMobile} />
        )}
      </div>
    </header>
  );
};
