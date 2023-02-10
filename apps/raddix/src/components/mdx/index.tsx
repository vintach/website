import { ReactNode } from 'react';
import styles from './mdx.module.scss';

interface Children {
  children?: ReactNode;
}

interface TextProps extends Children {
  as: keyof JSX.IntrinsicElements;
  className: string;
}

const Text = ({ as: Comp, className, children }: TextProps) => {
  return <Comp className={className}>{children}</Comp>;
};

const MDXComponents = {
  h1: ({ children }: Children) => (
    <Text as='h1' className={styles.title}>
      {children}
    </Text>
  ),
  h2: ({ children }: Children) => (
    <Text as='h2' className={styles.subTitle}>
      {children}
    </Text>
  ),
  p: ({ children }: Children) => (
    <Text as='p' className={styles.paragraph}>
      {children}
    </Text>
  )
};

export default MDXComponents;
