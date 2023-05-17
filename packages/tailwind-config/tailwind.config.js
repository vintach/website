/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screen: {
      tablet: '40rem', //640px
      laptop: '56.25rem', //900px
      desktop: '73.75rem' //1180px
    },
    fontSize: {
      xs: [
        '.875rem', //14px
        {
          lineHeight: '1.5rem', //24px
          fontWeight: '400'
        }
      ],
      sm: [
        '1rem', //16px
        {
          lineHeight: '1.625rem', //26px
          fontWeight: '400'
        }
      ],
      md: [
        '1.125rem', //18px
        {
          lineHeight: '1.875rem', //30px
          fontWeight: '400'
        }
      ],
      lg: [
        '1.3125rem', //21px
        {
          lineHeight: '2rem', //32px
          fontWeight: '400'
        }
      ],
      xl: [
        '1.5rem', //24px
        {
          lineHeight: '2.125rem', //34px
          fontWeight: '400'
        }
      ],
      'h1-desktop': [
        '2.625rem', //42px
        {
          lineHeight: '3.25rem', //52px
          fontWeight: '600'
        }
      ],
      'h1-mobile': [
        '2.1875rem', //35px
        {
          lineHeight: '2.5rem', //40px
          fontWeight: '600'
        }
      ],
      'h2-desktop': [
        '2rem', //32px
        {
          lineHeight: '2.4375rem', //39px
          fontWeight: '600'
        }
      ],
      'h2-mobile': [
        '1.625rem', //26px
        {
          lineHeight: '2rem', //32px
          fontWeight: '600'
        }
      ],
      'h3-desktop': [
        '1.5rem', //24px
        {
          lineHeight: '2rem', //32px
          fontWeight: '600'
        }
      ],
      'h3-mobile': [
        '1.1875rem', //19px
        {
          lineHeight: '1.625rem', //26px
          fontWeight: '600'
        }
      ],
      h4: [
        '1.0625rem', //17px
        {
          lineHeight: '1.5rem', //24px
          fontWeight: '500'
        }
      ]
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    extend: {
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
      colors: {
        brand: {
          purple: '#9150FF',
          blue: '#312FF5'
        },
        grayscale: {
          '01': '#EEE7F9',
          '02': '#EDE6E6',
          '03': '#B9B7BD',
          '04': '#A09EA3'
        }
      },
      backgroundColor: {
        std: '#0A0A10'
      },
      maxWidth: {
        std: '75rem' //1200px
      },
      borderRadius: {
        std: '.75rem' //12px
      }
    }
  },
  plugins: []
};
