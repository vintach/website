import type { ReactNode } from 'react';
import { useState } from 'react';
import { componentsDemo } from '@/demo';
import { Card, CardGroup } from './card';
import { ApiTable } from './api-table';
import { CodeBlock } from './code-block';
import { Snippet } from './snippet';
import { Code } from './code';

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
  const code = children.props.children;
  const language = classNameRo.replace(/language-/, '');

  const copyButtonStyles = isCopied
    ? 'bg-blue-60 text-white'
    : 'bg-white/70 text-gray-90';
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

  if (language === 'sh' || language === 'bash') {
    return <Snippet text={code} />;
  }

  return <CodeBlock source={code} language={language} />;
};

export const MDXComponents = {
  h1: ({ children, ...props }: Children) => (
    <Text as='h1' className='text-3xl font-semibold md:text-4xl' {...props}>
      {children}
    </Text>
  ),
  h2: ({ children, ...props }: Children) => (
    <Text
      as='h2'
      className='mb-sm mt-2xl text-2xl font-semibold md:pt-xs'
      isTitle
      {...props}
    >
      {children}
    </Text>
  ),
  h3: ({ children, ...props }: Children) => (
    <Text
      as='h3'
      className='mb-sm mt-lg text-lg font-semibold'
      isTitle
      {...props}
    >
      {children}
    </Text>
  ),
  p: ({ children }: Children) => (
    <Text as='p' className='my-sm text-sm md:text-md'>
      {children}
    </Text>
  ),
  pre: TextPre,
  ul: ({ children }: Children) => (
    <ul className='my-sm pl-[20px]'>{children}</ul>
  ),
  li: ({ children }: Children) => (
    <li className='mb-xs list-disc pl-1 text-md text-gray-10 '>{children}</li>
  ),
  code: Code,
  Card,
  CodeBlock,
  CardGroup,
  ApiTable,
  ...componentsDemo
};
