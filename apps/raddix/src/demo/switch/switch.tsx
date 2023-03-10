import { useSwitch, UseSwitchProps } from '@raddix/switch';
import styles from './switch.module.scss';

export const Switch = (props: UseSwitchProps) => {
  const { switchProps } = useSwitch(props);

  return <button {...switchProps} className={styles.switch}></button>;
};
