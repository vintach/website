import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './language.module.scss';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

export const Language = () => {
  const { locales, pathname, query } = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);

  const refBtn = useRef<HTMLButtonElement>(null);
  const refMenu = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent | TouchEvent) => {
    const button = refBtn.current;
    const menu = refMenu.current;

    if (
      !button ||
      button.contains(e.target as Node) ||
      !menu ||
      menu.contains(e.target as Node)
    ) {
      return;
    }
    setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [refMenu, setIsActive]);

  return (
    <div className={styles.language}>
      <button ref={refBtn} onClick={() => setIsActive(!isActive)}>
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
        className={classNames(styles.menu, { [styles.menuActive]: isActive })}
      >
        <ul>
          {locales?.map(localName => {
            return (
              <li key={localName}>
                <Link
                  href={{
                    pathname,
                    query
                  }}
                  passHref
                  locale={localName}
                  onClick={() => setIsActive(false)}
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
