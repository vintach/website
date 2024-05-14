import type { Metadata } from 'next';
import { Footer } from 'vintex';
import { Header } from '@/components/header';
import { locales } from '@/i18n';
import { getHeader } from 'data/header/get-header';
import { getTheme } from '@/utils/get-theme';
import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import 'vintex/styles.css';
import '@/styles/main.css';
import { getPkgManager } from '@/utils/get-pkg-manager';
import { fonts } from '../fonts';
import { getConfigFile } from '@/lib/content';
import { configSite } from 'content/site/_config';

interface Props {
  params: { lang: string };
  children?: React.ReactNode;
}

export function generateMetadata({ params: { lang } }: Props): Metadata {
  const { meta } = getConfigFile({ lang, dirPath: 'content/site' });
  const site = configSite.meta;

  return {
    title: {
      template: `%s – ${site?.title}`,
      default: `${site?.title} – ${meta?.title}`
    },
    description: meta?.description,
    metadataBase: new URL(`${site?.url}`),
    keywords: [
      'React',
      'React Hooks',
      'React Hooks Collection',
      'React Hooks library',
      'Collection of React Hooks',
      'react-use',
      'Radix',
      'Raddix'
    ],
    authors: [{ name: site?.author?.name, url: site?.author?.url }],
    creator: site?.author?.name
  };
}

export function generateStaticParams() {
  return locales.map(locale => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang }
}: Props) {
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
