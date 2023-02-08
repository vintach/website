import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './header.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { Menu } from '../menu';

const HeaderComp = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const { locale, locales, asPath } = useRouter();

  const updateScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <header
      className={classNames(styles.wrapper, { [styles.scroll]: scrollY > 2 })}
    >
      <div className={styles.header}>
        <Link className={styles.logo} href={'/'} locale={locale}>
          <Image src='/raddix.svg' alt='Raddix logo' width={24} height={36} />
          <h1>raddix</h1>
        </Link>

        <Menu />

        {locales?.map(localName => {
          return (
            <div key={localName}>
              <Link href={asPath} passHref locale={localName}>
                {localName}
              </Link>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default HeaderComp;
