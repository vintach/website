import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.sections}>
        <div>
          <div className={styles.logo}>
            <div>
              <Image
                src='/raddix.svg'
                alt='Raddix logo'
                width={24}
                height={36}
              />
              <h1>raddix</h1>
            </div>
            <span>A project by Vintach</span>
          </div>
        </div>

        <div>
          <h3>Getting Started</h3>
          <ul>
            <li>
              <Link href={'/docs/get-started/add-to-project'}>
                Add to your project
              </Link>
            </li>
            <li>
              <Link href={'/docs/get-started/create-component'}>
                Create a component
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Concepts</h3>
          <ul>
            <li>
              <Link href={'/docs/concepts/why-raddix'}>Why Raddix</Link>
            </li>
            <li>
              <Link href={'/docs/concepts/accesibility'}>Accesibility</Link>
            </li>
            <li>
              <Link href={'/docs/concepts/customization'}>Customization</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Community</h3>
          <ul>
            <li>
              <Link href={'https://github.com/vintach/raddix'}>Github</Link>
            </li>
            <li>
              <Link href={'https://github.com/vintach/raddix/issues'}>
                Issues
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.deploy}>
        <span>Deployed on</span>
        <Image src={'/icons/vercel.svg'} alt='deploy' width={80} height={18} />
      </div>
    </footer>
  );
};
