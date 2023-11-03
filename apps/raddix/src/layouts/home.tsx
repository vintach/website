import type { ReactNode } from 'react';
import Head from 'next/head';

export interface HomeProps {
  children?: ReactNode;
}

export const HomeLayout = ({ children }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Raddix - The React Hooks Library</title>
        <meta
          name='description'
          content='Collection of Essential React Hooks'
        />
        <meta
          name='keywords'
          content='react, hooks, react hooks, react hooks library, raddix'
        />
        <meta name='author' content='Raddix' />
      </Head>
      <main className='mx-auto max-w-std px-6 lg:px-0'>{children}</main>
    </>
  );
};
