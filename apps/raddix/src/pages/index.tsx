import { Hero } from '@/components/hero';
import { HomeLayout } from '@/layouts/home';
import { Styling } from '@/components/styling';
import { Accessible } from '@/components/home/accessible';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getMdxData } from '@/lib/mdx';
import { HomeData } from '@/types/home-data';

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <HomeLayout>
      <Hero {...data.hero} />
      <Accessible {...data.accessible} />
      <Styling {...data.styling} />
    </HomeLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  data: HomeData;
}> = async ({ locale }) => {
  const homeData = getMdxData<HomeData>({ locale, file: 'home' });

  return {
    props: {
      data: homeData
    }
  };
};

export default Home;
