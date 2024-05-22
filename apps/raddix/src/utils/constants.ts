// locales and languages
export const DEFAULT_LOCALE = 'en';
export const LANGUAGES = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' }
];
export const LOCALES = LANGUAGES.map(lang => lang.value);

// package manager
export const COMMANDS = {
  npm: 'npm i',
  yarn: 'yarn add',
  pnpm: 'pnpm add',
  bun: 'bun add'
};
export const PACKAGE_MANAGERS = Object.keys(COMMANDS);
export const DEFAULT_PKG_MANAGER = PACKAGE_MANAGERS[0];
export const PKG_MANAGER_KEY = 'pkg-manager';

// themes
export const DEFAULT_THEME = 'dark';
export const THEME_KEY = 'theme';

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
