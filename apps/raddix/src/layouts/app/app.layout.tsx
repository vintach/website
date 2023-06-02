import Head from 'next/head';
import { Footer } from 'vintex';
import { Header } from '@/components/header';

export interface AppProps {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: AppProps) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.png' />
      </Head>

      <Header />

      {children}

      <Footer />
    </>
  );
};

export default AppLayout;
