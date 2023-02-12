import useSwitch from '@raddix/switch';
import styles from './switch.module.scss';

export const Switch = () => {
  const { switchProps, state } = useSwitch.Root({});
  const { switchThumbProps } = useSwitch.Thumb(state);

  return (
    <button {...switchProps} className={styles.switch}>
      <span {...switchThumbProps} className={styles.switchThumb}></span>
    </button>
  );
};
