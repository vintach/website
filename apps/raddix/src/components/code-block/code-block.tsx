import { useState, Fragment } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import type { Language } from 'prism-react-renderer';
import { JetBrains_Mono } from '@next/font/google';
import { useScroll } from '@/hooks/useScroll';
import { blameTheme } from './theme';

const inter = JetBrains_Mono({ subsets: ['latin'] });

export interface CodeBlockProps {
  source: string;
  language: string;
  showLines?: boolean;
}

export const CodeBlock = ({
  source,
  language,
  showLines = true
}: CodeBlockProps) => {
  const [refCodeWindow, codeWindow] = useScroll<HTMLDivElement>();

  return (
    <div className='flex w-full flex-col rounded-xl border border-solid border-white/5 bg-gray-120/80 backdrop-blur backdrop-saturate-100'>
      <div className='flex justify-start gap-1.5 px-sm py-4'>
        <span className='h-3 w-3 rounded-full bg-[#f31260]'></span>
        <span className='h-3 w-3 rounded-full bg-[#f5a524]'></span>
        <span className='h-3 w-3 rounded-full bg-[#17c964]'></span>
      </div>
      <Highlight
        {...defaultProps}
        code={source.trim()}
        language={language as Language}
        theme={blameTheme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} ${inter.className} relative box-content flex w-full overflow-hidden py-xs text-xs leading-5`}
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
              className='h-[inherit] w-[calc(100%_-_52px)] overflow-auto scrollbar-thin scrollbar-track-[transparent] scrollbar-thumb-gray-40/50 scrollbar-thumb-rounded-lg'
              ref={refCodeWindow}
            >
              <div className='w-fit min-w-full overflow-hidden px-sm pb-sm'>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line })} translate='no' key={i}>
                    {line.map((token, key) => (
                      <span
                        {...getTokenProps({ token })}
                        key={key}
                        translate='no'
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </pre>
        )}
      </Highlight>
    </div>
  );
};
