import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './header.module.scss';
import classNames from 'classnames';

const HeaderComp = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const router = useRouter();

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
        <Link className={styles.logo} href={'/'} locale={router.locale}>
          <h1>Raddix</h1>
        </Link>

        <nav className={styles.nav}>
          <ol>
            <li>
              <Link href={'/docs/get-started'} locale={router.locale}>
                Documentación
              </Link>
            </li>
            <li>
              <Link href={'/templates'} locale={router.locale}>
                Plantillas
              </Link>
            </li>
            <li>
              <Link href={'/get-started'} locale={router.locale}>
                Blog
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComp;
