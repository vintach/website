'use client';

import { ThemeContext } from '@/contexts/theme-context';

export interface ProviderProps {
  children: React.ReactNode;
  defaultTheme: string;
}

export const Providers = ({ children, defaultTheme }: ProviderProps) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
