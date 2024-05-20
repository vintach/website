import { type Metadata } from 'next';
import { Features } from '@/components/features';
import { Hero } from '@/components/hero';
import { getHome } from 'data/home/get-home';
import { getLocaleUrl, getLocaleUrls } from '@/i18n/utils';

interface Props {
  params: { lang: string };
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    alternates: {
      canonical: getLocaleUrl('/', params.lang),
      languages: getLocaleUrls('/')
    }
  };
}

export default async function Page({ params: { lang } }: Props) {
  const home = await getHome(lang);

  return (
    <main className='mx-auto max-w-std px-6 lg:px-0'>
      <Hero {...home.hero} />
      <Features features={home.features} />
    </main>
  );
}
