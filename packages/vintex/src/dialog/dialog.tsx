'use client';

import { forwardRef, useEffect, useRef, useState } from 'react';
import { useClickOutside } from '@raddix/use-click-outside';
import { useScrollLock } from '@raddix/use-scroll-lock';
import type { HTMLAttributes } from 'react';

export interface DialogContentProps {
  close: () => void;
}

type DialogProps = HTMLAttributes<HTMLDialogElement>;

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <dialog
        ref={ref}
        {...props}
        className={[
          'ui-m-auto ui-mt-40 backdrop:ui-bg-black backdrop:ui-opacity-80 ui-bg-transparent',
          className
        ].join(' ')}
      >
        {children}
      </dialog>
    );
  }
);

Dialog.displayName = 'Dialog';

type DialogContentPropsAll = DialogContentProps &
  HTMLAttributes<HTMLDivElement>;
export const DialogContent = ({
  children,
  close,
  ...props
}: DialogContentPropsAll) => {
  const refContent = useRef<HTMLDivElement>(null);
  useClickOutside(refContent, close);
  useScrollLock();

  return (
    <div ref={refContent} {...props}>
      {children}
    </div>
  );
};

export const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const open = () => {
    if (modalRef.current) modalRef.current.showModal();
    setIsOpen(true);
  };

  const close = () => {
    if (modalRef.current) modalRef.current.close();
    setIsOpen(false);
  };

  useEffect(() => {
    const keydownToggleSearchMenu = (event: KeyboardEvent) => {
      const isSearchMenuOpen = modalRef.current?.open;

      if (isSearchMenuOpen && event.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', keydownToggleSearchMenu);
    return () => {
      window.removeEventListener('keydown', keydownToggleSearchMenu);
    };
  }, []);

  return { isOpen, open, close, modalRef };
};
