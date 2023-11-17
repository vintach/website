import type { Config } from 'tailwindcss';
import sharedConfig from '@vintach/tailwind/tailwind.config';

const config: Pick<Config, 'presets'> = {
  presets: [sharedConfig]
};

export default config;
