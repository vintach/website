'use client';

import { useDarkMode } from '@/hooks/useDarkMode';
import { Sun } from '@/icons/sun';
import { Moon } from '@/icons/moon';

export interface ThemeSwitcherProps {
  label: string;
  description: {
    light: string;
    dark: string;
  };
}

export const ThemeSwitcher = ({ label, description }: ThemeSwitcherProps) => {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    <button
      type='button'
      title={isDarkMode ? description.dark : description.light}
      aria-label={label}
      aria-description={isDarkMode ? description.dark : description.light}
      className='flex flex-col items-center justify-center gap-1 p-xs hover:text-white md:flex-row'
      onClick={toggle}
    >
      {isDarkMode ? <Moon /> : <Sun />}
    </button>
  );
};
