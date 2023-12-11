import { componentsDemo } from '@/demo';
import { Card, CardGroup } from './card';
import { ApiTable } from './api-table';
import { CodeBlock } from './code-block';
import { Snippet } from './snippet';
import { Code } from './code';
import type { Children } from '@/types/global';

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
  const children = props.children as TextPreProps;

  const classNameRo = children.props.className || '';
  const code = children.props.children;
  const language = classNameRo.replace(/language-/, '');

  if (language === 'sh' || language === 'bash') {
    return <Snippet text={code} />;
  }

  return <CodeBlock source={code} language={language} />;
};

export const MDXComponents = {
  h1: ({ children, ...props }: Children) => (
    <Text
      as='h1'
      className='pb-[3px] text-[2.6rem] font-bold leading-[1.16] tracking-[-.04em] md:pb-[6px] md:text-[3.2rem] md:leading-[1.12] md:tracking-[-.042em]'
      {...props}
    >
      {children}
    </Text>
  ),
  h2: ({ children, ...props }: Children) => (
    <Text
      as='h2'
      className='mb-sm mt-2xl text-2xl font-semibold tracking-[-.032em] md:pt-xs md:text-3xl md:tracking-[-.034em]'
      isTitle
      {...props}
    >
      {children}
    </Text>
  ),
  h3: ({ children, ...props }: Children) => (
    <Text
      as='h3'
      className='mb-sm mt-lg text-lg font-semibold tracking-[-.018em]'
      isTitle
      {...props}
    >
      {children}
    </Text>
  ),
  p: ({ children }: Children) => (
    <Text
      as='p'
      className='my-sm text-sm tracking-[-.010em] text-white/90 md:text-md'
    >
      {children}
    </Text>
  ),
  pre: TextPre,
  ul: ({ children }: Children) => (
    <ul className='my-sm pl-[20px]'>{children}</ul>
  ),
  li: ({ children }: Children) => (
    <li className='mb-xs list-disc pl-1 text-sm text-white/90 md:text-md '>
      {children}
    </li>
  ),
  code: Code,
  Card,
  CodeBlock,
  CardGroup,
  ApiTable,
  ...componentsDemo
};
