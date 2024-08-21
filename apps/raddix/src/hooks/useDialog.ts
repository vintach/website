import { useCallback, useEffect, useRef } from 'react';
import { useScrollLock } from './useScrollLock';

export const useDialog = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const { lock, unlock } = useScrollLock({ immediate: false });

  const open = useCallback(() => {
    modalRef.current?.showModal();
    lock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = useCallback(() => {
    modalRef.current?.close();
    unlock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(modalRef.current?.open);

  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  useEffect(() => {
    const keydownToggleSearchMenu = (event: KeyboardEvent) => {
      const isSearchMenuOpen = modalRef.current?.open;
      if (!isSearchMenuOpen && event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        open();
      }

      if (isSearchMenuOpen && event.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', keydownToggleSearchMenu);
    return () => {
      window.removeEventListener('keydown', keydownToggleSearchMenu);
    };
  }, [close, open]);

  return { modalRef, open, close };
};
