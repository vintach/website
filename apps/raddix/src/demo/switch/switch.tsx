import { useSwitch, UseSwitchProps } from '@raddix/switch';
import styles from './switch.module.scss';

export const Switch = (props: UseSwitchProps) => {
  const { switchProps, dataProps } = useSwitch(props);

  return <div {...switchProps} {...dataProps} className={styles.switch}></div>;
};
