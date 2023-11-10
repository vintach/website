import { useState } from 'react';
import { useTimeout } from '@raddix/use-timeout';

export const Example = () => {
  const [isReady, setIsReady] = useState(false);

  useTimeout(() => {
    setIsReady(true);
  }, 3000);

  return <div>{isReady ? 'Ready!' : 'Waiting...'}</div>;
};
