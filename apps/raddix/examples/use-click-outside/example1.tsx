import { useRef, useState } from 'react';
import { useClickOutside } from '@raddix/use-click-outside';

export const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const refModal = useRef<HTMLDivElement>(null);

  useClickOutside(refModal, () => setIsOpen(false));

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open modal</button>

      {isOpen && (
        <div ref={refModal}>
          <p>Click outside of the modal to close it</p>
        </div>
      )}
    </>
  );
};
