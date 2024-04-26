import type { Metadata } from 'next';
import { Footer } from 'vintex';
import { Header } from '@/components/header';
import { locales } from '@/i18n';
import { getHeader } from 'data/header/get-header';
import { getTheme } from '@/utils/get-theme';
import { Providers } from './providers';

import 'vintex/styles.css';
import '@/styles/main.css';
import { getPkgManager } from '@/utils/get-pkg-manager';
import { fonts } from '../fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Raddix',
    default: 'Raddix - The React Hooks Library'
  },
  description: 'Collection of Essential React Hooks',
  keywords: ['react', 'hooks', 'react hooks', 'react hooks library', 'raddix']
};

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
    <html lang={lang} data-theme={getTheme()} className={fonts}>
      <body className='font-inter'>
        <Providers
          defaultTheme={getTheme()}
          defaultPkgManager={getPkgManager()}
        >
          <Header {...headerProps} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
