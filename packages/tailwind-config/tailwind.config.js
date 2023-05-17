/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screen: {
      sm: '40rem', //640px
      md: '56.25rem', //900px
      lg: '73.75rem' //1180px
    },
    fontSize: {
      xs: [
        '.875rem', //14px
        '1.5rem' // 24px
      ],
      sm: [
        '1rem', //16px
        '1.625rem' //26px
      ],
      md: [
        '1.125rem', //18px
        '1.875rem' //30px
      ],
      lg: [
        '1.3125rem', //21px
        '2rem' //32px
      ],
      xl: [
        '1.5rem', //24px
        '2.125rem' //34px
      ],
      '2xl': [
        '1.625rem', //26px
        '2rem' //32px
      ],
      '3xl': [
        '2rem ', //32px
        '2.4375rem' // 39px
      ],
      '4xl': [
        '2.1875rem', //35px
        '2.5rem' //40px
      ],
      '5xl': [
        '2.625rem', //42px
        '3.25rem' //52px
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
