import { cookies } from 'next/headers';
import { DEFAULT_PKG_MANAGER, PKG_MANAGER_KEY } from './constants';

export const getPkgManager = () => {
  const pkgManager = cookies().get(PKG_MANAGER_KEY);

  // eslint-disable-next-line curly
  if (!pkgManager) return DEFAULT_PKG_MANAGER;
  return pkgManager.value;
};
