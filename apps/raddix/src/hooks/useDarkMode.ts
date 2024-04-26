import { useCallback, useContext, useState } from 'react';
import { ThemeContext } from '@/contexts/theme-context';
import { setCookie } from '@/lib/cookie';

export const useDarkMode = () => {
  const defaultTheme = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(defaultTheme === 'dark');

  const toggle = useCallback(() => {
    const theme = isDarkMode ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    setCookie('theme', theme, 365);
    setIsDarkMode(state => !state);
  }, [isDarkMode]);

  return { isDarkMode, toggle };
};
