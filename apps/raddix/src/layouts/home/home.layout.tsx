import type { ReactNode } from 'react';
import Head from 'next/head';
import styles from './home.module.scss';

export interface HomeProps {
  children?: ReactNode;
}

export const HomeLayout = ({ children }: HomeProps) => {
  return (
    <>
      <Head>
        <title>
          Raddix: A Collection Of React Hooks For Your Design System.
        </title>
        <meta
          name='description'
          content='Raddix is a collection of hooks that allows you to quickly create high-quality, adaptable, and accessible design systems.'
        />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};
