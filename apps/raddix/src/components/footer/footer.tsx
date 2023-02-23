import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        A project by{' '}
        <a href='https://www.moisesmachuca.com/' target='_blank'>
          Moisés Machuca
        </a>
      </p>
      <div className={styles.deploy}>
        <span>Deployed on</span>
        <Image src={'/icons/vercel.svg'} alt='deploy' width={80} height={18} />
      </div>
    </footer>
  );
};
