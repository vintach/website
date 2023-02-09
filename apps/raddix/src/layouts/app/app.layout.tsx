import { Header } from '@/components/header';
import Head from 'next/head';

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
    </>
  );
};

export default AppLayout;
