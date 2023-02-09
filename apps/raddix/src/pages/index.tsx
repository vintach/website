import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { HomeLayout } from '@/layouts/home';

export default function Home() {
  return (
    <HomeLayout>
      <Hero />

      <Features />
    </HomeLayout>
  );
}
