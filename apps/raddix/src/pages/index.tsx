import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { HomeLayout } from '@/layouts/home';
import { Styling } from '@/components/styling';

export default function Home() {
  return (
    <HomeLayout>
      <Hero />

      <Features />
      <Styling />
    </HomeLayout>
  );
}
