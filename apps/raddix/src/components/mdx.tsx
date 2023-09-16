import type { ReactNode } from 'react';
import type { Language } from 'prism-react-renderer';
import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { componentsDemo } from '@/demo';
import { Card, CardGroup } from './card';
import { ApiTable } from './api-table';
import { CodeBlock } from './code-block';

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

  return (
    <div className='relative'>
      <div className='group my-6 overflow-auto rounded-lg border border-solid border-white/10 bg-white/5 px-8 py-5 text-[1.05rem] scrollbar-thumb-gray-40 scrollbar-track-rounded-xl'>
        <button
          className={`absolute right-8 top-4 cursor-pointer rounded-lg border-0 px-2.5 py-0.5 text-sm opacity-0 transition-all duration-200 ease-in group-hover:opacity-100 active:scale-95 ${copyButtonStyles}`}
          onClick={() => handleCopy(code)}
        >
          {isCopied ? '🎉 Copied!' : 'Copy'}
        </button>
        <Highlight code={code} language={language} theme={themes.dracula}>
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
    </div>
  );
};

export const MDXComponents = {
  h1: ({ children, ...props }: Children) => (
    <Text
      as='h1'
      className='mb-sm text-4xl font-semibold md:text-5xl'
      {...props}
    >
      {children}
    </Text>
  ),
  h2: ({ children, ...props }: Children) => (
    <Text
      as='h2'
      className='mb-sm mt-2xl text-2xl font-medium sm:text-3xl'
      isTitle
      {...props}
    >
      {children}
    </Text>
  ),
  h3: ({ children, ...props }: Children) => (
    <Text
      as='h3'
      className='mb-sm mt-lg text-xl font-medium md:text-2xl'
      isTitle
      {...props}
    >
      {children}
    </Text>
  ),
  p: ({ children }: Children) => (
    <Text as='p' className='mb-xs text-sm text-gray-10 md:text-md'>
      {children}
    </Text>
  ),
  pre: TextPre,
  ul: ({ children }: Children) => (
    <ul className='my-md pl-[20px]'>{children}</ul>
  ),
  li: ({ children }: Children) => (
    <li className='mb-[4.5px] list-disc pl-2 text-sm text-gray-10 md:text-md'>
      {children}
    </li>
  ),
  Card,
  CodeBlock,
  CardGroup,
  ApiTable,
  ...componentsDemo
};
