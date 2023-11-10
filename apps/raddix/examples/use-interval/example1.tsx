import { useState } from 'react';
import { useInterval } from '@raddix/use-interval';

export const Counter = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <span>{count}</span>;
};
