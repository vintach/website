import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import { AppLayout } from '@/layouts/app';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@/components/google-analytics';
import 'vintex/globals.css';
import '@/styles/main.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <AppLayout>
        <GoogleAnalytics />
        <Component {...pageProps} />
        <Analytics />
      </AppLayout>
    </div>
  );
}
