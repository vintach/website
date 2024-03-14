'use client';

import { createContext } from 'react';
import { DEFAULT_PKG_MANAGER } from '@/utils/constants';

interface PackageManagerContextProps {
  pkgManager: string;
  setPkgManager: (pkg: string) => void;
}

export const PackageManagerContext = createContext<PackageManagerContextProps>({
  pkgManager: DEFAULT_PKG_MANAGER,
  setPkgManager: () => {}
});
