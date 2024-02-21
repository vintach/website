import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from 'vintex';
import { Header } from '@/components/header';
import { locales } from '@/i18n';
import { getHeader } from 'data/header/get-header';

import '@/styles/main.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Raddix',
    default: 'Raddix - The React Hooks Library'
  },
  description: 'Collection of Essential React Hooks',
  keywords: ['react', 'hooks', 'react hooks', 'react hooks library', 'raddix']
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export function generateStaticParams() {
  return locales.map(locale => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const headerProps = await getHeader(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Header {...headerProps} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
