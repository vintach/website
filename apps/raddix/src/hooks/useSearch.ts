import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useSearch() {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState<boolean>(false);
  const { asPath } = useRouter();
  const toggleSearchMenu = () => {
    setIsSearchMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const keydownToggleSearchMenu = (event: KeyboardEvent) => {
      if (!isSearchMenuOpen && event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        toggleSearchMenu();
      }

      if (isSearchMenuOpen && event.key === 'Escape') {
        toggleSearchMenu();
      }
    };

    window.addEventListener('keydown', keydownToggleSearchMenu);
    return () => window.removeEventListener('keydown', keydownToggleSearchMenu);
  }, [isSearchMenuOpen]);

  useEffect(() => {
    setIsSearchMenuOpen(false);
  }, [asPath]);

  return {
    isSearchMenuOpen,
    toggleSearchMenu
  };
}
