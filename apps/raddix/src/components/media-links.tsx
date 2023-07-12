import Link from 'next/link';
import Image from 'next/image';

export const MediaLinks = () => {
  return (
    <div className='flex space-x-4'>
      <Link href='https://discord.gg/mSdGGRrbVF'>
        <Image
          src='/icons/discord.svg'
          alt='GitHub Logo'
          width={24}
          height={24}
          className='transition-[filter] duration-100 hover:invert-[25%]'
        />
      </Link>
      <Link href='https://twitter.com/raddix_lib'>
        <Image
          src='/icons/twitter.svg'
          alt='GitHub Logo'
          width={24}
          height={24}
          className='transition-[filter] duration-100 hover:invert-[25%]'
        />
      </Link>
      <Link href='https://github.com/vintach/raddix'>
        <Image
          src='/icons/github.svg'
          alt='GitHub Logo'
          width={24}
          height={24}
          className='transition-[filter] duration-100 hover:invert-[25%]'
        />
      </Link>
    </div>
  );
};
