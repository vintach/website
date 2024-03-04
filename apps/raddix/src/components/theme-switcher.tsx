'use client';

import { useDarkMode } from '@/hooks/useDarkMode';
import { Sun } from '@/icons/sun';
import { Moon } from '@/icons/moon';

export const ThemeSwitcher = () => {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    <button
      type='button'
      title='Switch to light mode'
      aria-label='Theme Switcher'
      aria-description='Switch to light mode or dark mode.'
      className='flex flex-col items-center justify-center gap-1 p-xs hover:text-white md:flex-row'
      onClick={toggle}
    >
      {isDarkMode ? <Moon /> : <Sun />}
    </button>
  );
};
