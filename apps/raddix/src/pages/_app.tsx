import { Inter } from '@next/font/google';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AppLayout } from '@/layouts/app';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@/components/google-analytics';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <AppLayout>
        <GoogleAnalytics />
        <Component {...pageProps} />
        <Analytics />
      </AppLayout>
    </>
  );
}
