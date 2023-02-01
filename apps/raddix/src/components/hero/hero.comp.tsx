import Button from '../button';
import styles from './hero.module.scss';

const HeroComp = () => {
  return (
    <div className={styles.hero}>
      <h1>
        React hooks that provides primitives for your{' '}
        <span>design system.</span>
      </h1>
      <p>Accesible, Unstyled and Developer experience</p>
      <Button text='Get Started' />
      {/* <div className={styles.bgGrad} /> */}
      {/* <div className={styles.bgGrad2} /> */}
    </div>
  );
};

export default HeroComp;
