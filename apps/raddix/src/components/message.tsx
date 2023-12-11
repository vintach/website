import type { TextStr } from '@/types/global';

export const Message = ({ text }: TextStr) => {
  return (
    <div className='mr-md flex items-center gap-1 rounded-md bg-white/5 p-xs text-sm'>
      <span>🛠️</span>
      <p>{text}</p>
    </div>
  );
};
