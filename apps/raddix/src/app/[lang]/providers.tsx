'use client';

import { PackageManagerContext } from '@/contexts/package-manager-context';
import { ThemeContext } from '@/contexts/theme-context';
import { setCookie } from '@/lib/cookie';
import { PKG_MANAGER_KEY } from '@/utils/constants';
import { useCallback, useMemo, useState } from 'react';

export interface ProviderProps {
  children: React.ReactNode;
  defaultTheme: string;
  defaultPkgManager: string;
}

export const Providers = ({
  children,
  defaultTheme,
  defaultPkgManager
}: ProviderProps) => {
  const [pkgManager, setPkgManager] = useState(defaultPkgManager);

  const updatePkg = useCallback((pkg: string) => {
    setPkgManager(pkg);
    setCookie(PKG_MANAGER_KEY, pkg, 365);
  }, []);

  const pkgValue = useMemo(
    () => ({
      pkgManager,
      setPkgManager: updatePkg
    }),
    [pkgManager, updatePkg]
  );

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <PackageManagerContext.Provider value={pkgValue}>
        {children}
      </PackageManagerContext.Provider>
    </ThemeContext.Provider>
  );
};
