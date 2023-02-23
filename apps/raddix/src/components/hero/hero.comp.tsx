import { HeroProps } from '@/types/home-data';
import { Button } from '../button';
import styles from './hero.module.scss';

const HeroComp = ({ title, description, button }: HeroProps) => {
  return (
    <div className={styles.hero}>
      <h1>
        {title} <span>design system.</span>
      </h1>
      <p>{description}</p>
      <Button text={button} />
      {/* <div className={styles.bgGrad} /> */}
      {/* <div className={styles.bgGrad2} /> */}
    </div>
  );
};

export default HeroComp;
