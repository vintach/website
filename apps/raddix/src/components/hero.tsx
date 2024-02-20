import type { HeroProps } from '@/types/home-data';
import Image from 'next/image';
import { Button } from './button';

export const Hero = ({ title, description, button }: HeroProps) => {
  return (
    <section className='relative mx-auto my-20 flex w-full flex-col items-center overflow-visible px-sm text-center  md:mt-28 md:flex-row-reverse'>
      <div className='relative mb-10 h-40 w-40 md:grid md:w-1/2 md:place-content-center'>
        <div className='absolute h-full w-full rounded-full bg-gradient-to-br from-blue-50 to-purple-50 blur-[100px] md:inset-0 md:m-auto md:h-96 md:w-96 md:opacity-75'></div>
        <div className='relative h-full w-full bg-gradient-to-t md:inset-1 md:h-72 md:w-72'>
          <Image
            src='/raddix.svg'
            alt='Raddix Logo'
            fill
            sizes='(max-width: 900px) 160px, 300px'
          />
        </div>
      </div>
      <div className='md:w-1/2 md:text-start'>
        <h1 className='mx-auto max-w-5xl bg-gradient-to-br from-blue-50 to-purple-50 bg-clip-text text-[36px] capitalize leading-[45px] text-[#00000000] md:text-[64px] md:leading-[70px]'>
          Raddix
        </h1>
        <h2 className='text-[32px] font-semibold leading-[40px] md:text-[60px] md:font-bold md:leading-[66px]'>
          {title}
        </h2>
        <p className='mb-lg pt-xs text-md font-medium text-gray-20 md:pt-sm md:text-lg'>
          {description}
        </p>
        <div className='flex flex-wrap justify-center gap-5 md:justify-start'>
          <Button type='primary' text={button.text} to={button.to} />
          <Button
            type='secondary'
            text='GitHub'
            to='https://github.com/vintach/raddix'
          />
        </div>
      </div>
    </section>
  );
};
