import type { HeroProps } from '@/types/home-data';
import { Button } from '../button';
import styles from './hero.module.scss';

export const Hero = ({ title, description, button }: HeroProps) => {
  return (
    <div className={styles.hero}>
      <h1>
        {title} <span>design system.</span>
      </h1>
      <p>{description}</p>
      <Button text={button} to='/docs/get-started/create-component' />
      {/* <div className={styles.bgGrad} /> */}
      {/* <div className={styles.bgGrad2} /> */}
    </div>
  );
};
