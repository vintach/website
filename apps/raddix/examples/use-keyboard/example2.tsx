import { useState } from 'react';
import { useKeyboard } from '@raddix/use-keyboard';

export const Example = () => {
  const [error, setError] = useState(false);

  const onkeyDown = useKeyboard(() => {
    setError(true);
  }, ['á', 'é', 'í', 'ó', 'ú', 'ñ']);

  return (
    <div>
      <label htmlFor='Username'>Username</label>
      <input type='text' id='Username' onKeyDown={onkeyDown} />

      <p>
        {error
          ? 'Im sorry, but semigraphic characters are not supported'
          : 'You can use letters, numbers and punctuation marks'}
      </p>
    </div>
  );
};
