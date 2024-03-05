import type { Config } from 'tailwindcss';
import { colors } from '@vintach/colors';
import scrollbarPlugin from 'tailwind-scrollbar';

const config: Omit<Config, 'content'> = {
  darkMode: 'selector',
  theme: {
    screens: {
      sm: '40rem', //640px
      md: '56.25rem', //900px
      lg: '73.75rem' //1180px
    },
    colors,
    fontSize: {
      xs: ['.875rem', '1.5rem'], // 14px-24px
      sm: ['1rem', '1.625rem'], //16px-26px
      md: ['1.125rem', '1.875rem'], //18px-30px
      lg: ['1.3125rem', '2rem'], //21px-32px
      xl: ['1.5rem', '2.125rem'], //24px-34px
      '2xl': ['1.625rem', '2rem'], //26px-32px
      '3xl': ['2rem ', '2.4375rem'], //32px-39px
      '4xl': ['2.1875rem', '2.5rem'], //35px-40px
      '5xl': ['2.625rem', '3.25rem'] //42px-52px
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      gridTemplateColumns: {
        ax1xa: 'auto minmax(0, 1fr) auto',
        ax1: 'auto 1fr'
      },
      spacing: {
        xs: '.5625rem', //9px
        sm: '1.0625rem', //17px
        md: '1.6875rem', //27px
        lg: '2.1875rem', //35px
        xl: '2.8125rem', //45px
        '2xl': '3.3125rem', //53px
        '3xl': '3.9375rem', //63px
        '4xl': '4.5rem' //72px
      },
      maxWidth: {
        std: '85rem' //1360px
      },
      borderRadius: {
        std: '.75rem' //12px
      }
    }
  },
  plugins: [scrollbarPlugin({ nocompatible: true })]
};

export default config;
