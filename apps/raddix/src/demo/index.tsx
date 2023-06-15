import type { ReactNode } from 'react';
import { Switch } from './switch';

const Demo = ({ children }: { children: ReactNode }) => {
  return (
    <div className='my-sm flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-60 to-purple-60 py-20'>
      {children}
    </div>
  );
};

export const componentsDemo = {
  Demo,
  Switch: Switch
};
