/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        m1: '.5625rem',
        m2: '1.0625rem',
        m3: '1.6875rem',
        m4: '2.1875rem',
        m5: '2.8125rem',
        m6: '3.3125rem',
        m7: '3.9375rem',
        m8: '4.5rem'
      },
      colors: {
        brand: {
          primary: '#312ff5',
          secondary: '#8743ff',
          white: '#f0f0f0',
          black: '#0a0a10',
          blackCode: '10, 10, 16'
        }
      },
      maxWidth: {
        std: '75rem'
      },
      height: {
        header: '5rem'
      },
      borderRadius: {
        std: '.75rem'
      }
    }
  },
  plugins: []
};
