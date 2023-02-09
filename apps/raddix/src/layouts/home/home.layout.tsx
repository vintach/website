import Head from 'next/head';
import React from 'react';
import styles from './home.module.scss';

export interface HomeProps {
  children?: React.ReactNode;
}

const HomeLayout = ({ children }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Raddix: React hooks library that provides UI primitives</title>
        <meta
          name='description'
          content='A library of React Hooks that provides accessible UI primitives for your design system.'
        />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default HomeLayout;
