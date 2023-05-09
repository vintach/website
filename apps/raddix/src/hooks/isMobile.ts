import { useEffect, useState } from 'react';

const useIsMobile = (md = '768px') => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${md})`);

    const updateLayout = () => {
      const isMobile = mql.matches;
      setIsMobile(isMobile);
    };

    updateLayout();
    mql.addEventListener('change', updateLayout);

    return () => mql.removeEventListener('change', updateLayout);
  }, []);

  return isMobile;
};

export default useIsMobile;
