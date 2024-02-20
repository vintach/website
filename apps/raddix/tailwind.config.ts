import type { Config } from 'tailwindcss';
import sharedConfig from '@vintach/tailwind/tailwind.config';

const config: Config = {
  presets: [sharedConfig],
  content: [
    './node_modules/vintex/dist/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ]
};

export default config;
