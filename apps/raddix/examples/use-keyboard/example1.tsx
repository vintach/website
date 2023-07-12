import { useKeyboard } from '@raddix/use-keyboard';
import { useState } from 'react';

export const Example = () => {
  const [bgColor, setBgColor] = useState('');

  const onkeyDown = useKeyboard(() => {
    setBgColor('red');
  });

  const onkeyUp = useKeyboard(() => {
    setBgColor('blue');
  });

  return (
    <div>
      <input
        type='text'
        onKeyDown={onkeyDown}
        onKeyUp={onkeyUp}
        style={{ background: bgColor }}
      />
    </div>
  );
};
