import styles from './button.module.scss';

interface ButtonProps {
  text: string;
}

const ButtonComp = ({ text }: ButtonProps) => {
  return <button className={styles.button}>{text}</button>;
};

export default ButtonComp;
