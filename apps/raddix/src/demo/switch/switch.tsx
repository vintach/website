import type { UseSwitchProps } from '@raddix/switch';
import { useSwitch } from '@raddix/switch';

export const Switch = (props: UseSwitchProps) => {
  const { switchProps, dataProps } = useSwitch(props);

  return (
    <div
      {...switchProps}
      {...dataProps}
      className='relative box-content block h-6 w-11 scale-150 cursor-pointer rounded-full bg-black/60 p-0.5 duration-100 ease-[cubic-bezier(0.4,0,0.2,1)] before:block before:h-6 before:w-6 before:translate-x-0.5 before:cursor-pointer before:rounded-full before:bg-white before:transition-transform before:duration-100 before:content-[""] data-[state=checked]:bg-blue-60 data-[state=checked]:before:translate-x-[18px] focus-visible:shadow-purple-60'
    ></div>
  );
};
