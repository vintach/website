import { useEffect, useState } from 'react';

export const useIsMobile = (md = '768px') => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${md})`);

    const updateLayout = () => {
      const mobileMatch = mql.matches;
      setIsMobile(mobileMatch);
    };

    updateLayout();
    mql.addEventListener('change', updateLayout);

    return () => mql.removeEventListener('change', updateLayout);
  }, [md]);

  return isMobile;
};
