import useSwitch from '@raddix/switch';
import styles from './switch.module.scss';

export const Switch = () => {
  const { switchProps, state } = useSwitch.Root({});

  return <button {...switchProps} className={styles.switch}></button>;
};
