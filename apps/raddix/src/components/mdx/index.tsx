import type { Language } from 'prism-react-renderer';
import type { ReactNode } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { useState } from 'react';
import theme from 'prism-react-renderer/themes/dracula';
import classNames from 'classnames';
import styles from './mdx.module.scss';
import { componentsDemo } from '@/demo';
import { Card, CardGroup } from '../card';
import { ApiTable } from '../api-table/api-table';

export interface Children {
  children?: ReactNode;
}

export interface TextProps extends Children {
  as: keyof JSX.IntrinsicElements;
  className: string;
  isTitle?: boolean;
  id?: string;
}

const Text = ({ as: Comp, className, children, isTitle, id }: TextProps) => {
  return (
    <Comp className={className} data-title={isTitle} id={id}>
      {children}
    </Comp>
  );
};

export interface TextPreProps {
  props: {
    children: string;
    className: string;
  };
}

export const TextPre = (props: Children) => {
  const [isCopied, setIsCopied] = useState(false);

  const children = props.children as TextPreProps;

  const classNameRo = children.props.className || '';
  const code = children.props.children.trim();
  const language = classNameRo.replace(/language-/, '');
  const btnClass = classNames(styles.textPreBtn, {
    [styles.textPreBtnSuccess]: isCopied
  });

  const handleCopy = (str: string) => {
    if (isCopied) {
      return;
    }

    navigator.clipboard
      .writeText(str)
      .then(() => setIsCopied(true))
      .catch(err => console.log(err));

    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className={styles.textPre}>
      <button className={btnClass} onClick={() => handleCopy(code)}>
        {isCopied ? '🎉 Copied!' : 'Copy'}
      </button>
      <Highlight
        {...defaultProps}
        code={code}
        language={language as Language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              backgroundColor: 'transparent'
            }}
            translate='no'
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line })} key={i} translate='no'>
                {line.map((token, key) => (
                  <span
                    {...getTokenProps({ token })}
                    key={key}
                    translate='no'
                  />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export const MDXComponents = {
  h1: ({ children, ...props }: Children) => (
    <Text as='h1' className={styles.title} {...props}>
      {children}
    </Text>
  ),
  h2: ({ children, ...props }: Children) => (
    <Text as='h2' className={styles.subTitle} isTitle {...props}>
      {children}
    </Text>
  ),
  h3: ({ children, ...props }: Children) => (
    <Text as='h3' className={styles.h3} isTitle {...props}>
      {children}
    </Text>
  ),
  p: ({ children }: Children) => (
    <Text as='p' className={styles.paragraph}>
      {children}
    </Text>
  ),
  pre: TextPre,
  ul: ({ children }: Children) => <ul className={styles.ul}>{children}</ul>,
  li: ({ children }: Children) => <li className={styles.li}>{children}</li>,
  Card,
  CardGroup,
  ApiTable,
  ...componentsDemo
};
