import React from 'react';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        A project by{' '}
        <a href='https://www.moisesmachuca.com/' target='_blank'>
          Moisés Machuca
        </a>
      </p>
    </footer>
  );
};
