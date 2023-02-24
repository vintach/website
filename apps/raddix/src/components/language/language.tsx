import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './language.module.scss';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export const Language = () => {
  const { locales, asPath } = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);

  const refBtn = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (e: MouseEvent | TouchEvent) => {
    const button = refBtn.current;

    if (!button || button.contains(e.target as Node)) {
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
  }, [refBtn, setIsActive]);

  return (
    <div className={styles.language}>
      <button ref={refBtn} onClick={() => setIsActive(!isActive)}>
        <Image
          src={'/icons/language.svg'}
          alt='language'
          width={25}
          height={25}
        />
      </button>
      <div className={styles.menu} style={{ opacity: isActive ? 1 : 0 }}>
        <ul>
          {locales?.map(localName => {
            return (
              <li key={localName}>
                <Link href={asPath} passHref locale={localName}>
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
