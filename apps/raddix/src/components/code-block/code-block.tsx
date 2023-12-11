import { Fragment } from 'react';
import { Highlight } from 'prism-react-renderer';
import type { TokenOutputProps } from 'prism-react-renderer';
import { useScroll } from '@/hooks/useScroll';
import { blameTheme } from './theme';
import { Copy } from '../copy';

export interface CodeBlockProps {
  source: string;
  language: string;
  showLines?: boolean;
}

export const CodeBlock = ({
  source,
  language,
  showLines = false
}: CodeBlockProps) => {
  const [refCodeWindow, codeWindow] = useScroll<HTMLDivElement>();

  const convert = (opt: TokenOutputProps): TokenOutputProps => {
    const operators = /[&?:=!<>*+-]/;

    if (opt.className === 'token operator' && operators.test(opt.children)) {
      return {
        className: 'text-[#56b6c2]',
        children: opt.children
      };
    }

    return {
      className: opt.className,
      children: opt.children,
      style: opt.style
    };
  };

  return (
    <div className='relative flex w-full flex-col rounded-xl border border-solid border-white/5 bg-gray-120/80 backdrop-blur backdrop-saturate-100'>
      <Copy text={source} />
      <Highlight code={source.trim()} language={language} theme={blameTheme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} relative box-content flex w-full overflow-hidden py-md text-xs leading-5 md:text-[14.5px] md:leading-[21px]`}
            style={{
              ...style
            }}
            translate='no'
          >
            {showLines && (
              <div className='relative w-12 overflow-hidden'>
                <div
                  className='absolute top-0 min-h-full w-12 select-none pr-xs text-right text-[#475569]'
                  aria-hidden='true'
                  style={{ top: -codeWindow.scrollTop }}
                >
                  {Array.from({ length: tokens.length + 1 }).map((_, i) => {
                    return i === 0 ? (
                      i + 1
                    ) : (
                      <Fragment key={i + 1}>
                        <br />
                        {i + 1}
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            )}
            <div
              className='mx-auto h-[inherit] w-[calc(100%_-_45px)] overflow-auto scrollbar-thin scrollbar-track-[transparent] scrollbar-thumb-gray-40/50 scrollbar-thumb-rounded-lg'
              ref={refCodeWindow}
            >
              <div className='w-fit min-w-full overflow-hidden'>
                {tokens.map((line, i) => {
                  return (
                    <div {...getLineProps({ line })} translate='no' key={i}>
                      {line.map((token, key) => {
                        return (
                          <span
                            {...convert(getTokenProps({ token }))}
                            key={key}
                            translate='no'
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </pre>
        )}
      </Highlight>
    </div>
  );
};
