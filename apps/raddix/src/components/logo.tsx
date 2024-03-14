import Link from 'next/link';

export const Logo = ({ to = '/' }) => {
  return (
    <Link className='flex items-center gap-1.5' href={to}>
      <svg
        // width={22}
        height={30}
        viewBox='0 0 144 216'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect y='144' width='72' height='72' fill='url(#paint0_linear_11_53)' />
        <path
          d='M72 143.937V0C95.7559 0 143.413 14.72 143.995 73.6C144.577 132.48 96.2407 145.025 72 143.937Z'
          fill='url(#paint1_linear_11_53)'
        />
        <path
          d='M144 144H72C72 201.889 120 216.12 144 215.999V144Z'
          fill='url(#paint2_linear_11_53)'
        />
        <path
          d='M-3.14722e-06 0L0 72L72 -3.14722e-06L-3.14722e-06 0Z'
          fill='url(#paint3_linear_11_53)'
        />
        <path
          d='M-7.62939e-06 144L72 144L-1.33496e-06 72L-7.62939e-06 144Z'
          fill='url(#paint4_linear_11_53)'
        />
        <path
          d='M72 144V0L0 72L72 144Z'
          fill='url(#paint5_linear_11_53)'
          fillOpacity='0.92'
        />
        <defs>
          <linearGradient
            id='paint0_linear_11_53'
            x1='1.91371e-06'
            y1='55'
            x2='141.5'
            y2='90'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#4136F1' />
            <stop offset='1' stopColor='#8743FF' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_11_53'
            x1='141.5'
            y1='85.5'
            x2='-0.500005'
            y2='65'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#8743FF' />
            <stop offset='1' stopColor='#4136F1' />
          </linearGradient>
          <linearGradient
            id='paint2_linear_11_53'
            x1='5.1231e-06'
            y1='48.5'
            x2='144'
            y2='82.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#4136F1' />
            <stop offset='1' stopColor='#8743FF' />
          </linearGradient>
          <linearGradient
            id='paint3_linear_11_53'
            x1='91'
            y1='97'
            x2='0'
            y2='72'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#8743FF' />
            <stop offset='1' stopColor='#4136F1' />
          </linearGradient>
          <linearGradient
            id='paint4_linear_11_53'
            x1='144'
            y1='89'
            x2='-9.11528e-06'
            y2='52.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#8743FF' />
            <stop offset='1' stopColor='#4136F1' />
          </linearGradient>
          <linearGradient
            id='paint5_linear_11_53'
            x1='2.63254e-07'
            y1='51'
            x2='140.5'
            y2='77.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0279272' stopColor='#4136F1' />
            <stop offset='1' stopColor='#8743FF' />
          </linearGradient>
        </defs>
      </svg>
      <span className='font-days text-[24px] tracking-tight text-gray-90 dark:text-gray-10'>
        raddix
      </span>
    </Link>
  );
};
