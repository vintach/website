import { useSwitch, UseSwitchProps } from '@raddix/switch';
import styles from './switch.module.scss';

export const Switch = (props: UseSwitchProps) => {
  const { switchProps, dataProps } = useSwitch(props);

  return (
    <button {...switchProps} {...dataProps} className={styles.switch}></button>
  );
};
