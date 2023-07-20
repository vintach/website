import { useKeyboard } from '@raddix/use-keyboard';

export const Example = () => {
  useKeyboard(() => alert('Success'), ['c'], { globalEvent: true });

  return (
    <div>
      Press <code>c</code>
    </div>
  );
};
