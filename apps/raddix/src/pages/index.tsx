import { Hero } from '@/components/hero';
import { HomeLayout } from '@/layouts/home';
import { Styling } from '@/components/styling';
import { Accessible } from '@/components/home/accessible';

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <Styling />
    </HomeLayout>
  );
}
