import { Inter, JetBrains_Mono, Days_One } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-jetbrains-mono'
});

export const daysOne = Days_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-days-one'
});

export const fonts = `${inter.variable} ${jetbrainsMono.variable} ${daysOne.variable}`;
