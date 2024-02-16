import { Features } from '@/components/features';
import { Hero } from '@/components/hero';
import { getHome } from 'data/home/get-home';

export default async function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const home = await getHome(lang);

  return (
    <main className='mx-auto max-w-std px-6 lg:px-0'>
      <Hero {...home.hero} />
      <Features features={home.features} />
    </main>
  );
}
