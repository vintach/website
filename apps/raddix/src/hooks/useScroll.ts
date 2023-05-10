import { useCallback, useEffect, useRef, useState } from 'react';

interface Element {
  scrollTop: number;
  scrollLeft: number;
  scrollHeight: number;
  scrollWidth: number;
}

const defaultState: Element = {
  scrollTop: 0,
  scrollLeft: 0,
  scrollHeight: 0,
  scrollWidth: 0
};

export const useScroll = <T extends HTMLElement = HTMLElement>() => {
  const [element, setElement] = useState<Element>(defaultState);
  const ref = useRef<T>(null);

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const refElement = ref.current;

      setElement({
        scrollTop: refElement.scrollTop,
        scrollLeft: refElement.scrollLeft,
        scrollHeight: refElement.scrollHeight,
        scrollWidth: refElement.scrollWidth
      });
    }
  }, []);

  useEffect(() => {
    const refElement = ref.current;
    if (!refElement) {
      return;
    }
    refElement.addEventListener('scroll', handleScroll);
    return () => {
      refElement.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return [ref, element] as const;
};
