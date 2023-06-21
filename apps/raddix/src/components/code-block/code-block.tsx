import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import type { Language } from 'prism-react-renderer';
import { JetBrains_Mono } from '@next/font/google';
const inter = JetBrains_Mono({ subsets: ['latin'] });
import { useScroll } from '@/hooks/useScroll';
import { useIsomorphicEffect } from '@/hooks/useIsomorphicEffect';
import { getFileExtension } from '@/utils/global';
import { blameTheme } from './theme';

interface CodeBlockProps {
  tabs: Record<string, string>;
  showTabs?: boolean;
  showLines?: boolean;
  /**
   * Position of tab
   * @default 0
   */
  defaultTab?: number;
  height?: number | string;
}

export const CodeBlock = ({
  tabs,
  showLines,
  showTabs,
  defaultTab = 0,
  height = 350
}: CodeBlockProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const lines = tabs[Object.keys(tabs)[activeTab]]?.trim();
  const tabName = Object.keys(tabs)[activeTab];
  const language = getFileExtension(tabName);
  const [refCodeWindow, codeWindow] = useScroll<HTMLDivElement>();

  useIsomorphicEffect(() => {
    setActiveTab(defaultTab);
  }, [tabs]);

  return (
    <div className='flex w-full flex-col rounded-xl border border-solid border-white/5 bg-gray-120/80 backdrop-blur backdrop-saturate-100'>
      <div className='flex justify-start gap-1.5 px-sm py-4'>
        <span className='h-3 w-3 rounded-full bg-[#f31260]'></span>
        <span className='h-3 w-3 rounded-full bg-[#f5a524]'></span>
        <span className='h-3 w-3 rounded-full bg-[#17c964]'></span>
      </div>
      {showTabs && (
        <div className='flex border-b border-solid border-white/5'>
          {Object.keys(tabs).map((tab, index) => (
            <button
              className={`cursor-pointer select-none border-0 bg-[transparent] px-sm py-xs text-sm text-purple-10 ${
                activeTab === index
                  ? 'text-purple-60 shadow-[0_1px_0] shadow-purple-60'
                  : ''
              }`}
              key={`${tab}${index}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
      <Highlight
        {...defaultProps}
        code={lines}
        language={language as Language}
        theme={blameTheme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} ${inter.className} relative box-content flex w-full overflow-hidden py-xs text-xs leading-5`}
            style={{
              ...style,
              height
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
                      <React.Fragment key={i + 1}>
                        <br />
                        {i + 1}
                      </React.Fragment>
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
                    {line.map((token, key) => {
                      if (
                        token.types[token.types.length - 1] === 'string' &&
                        /^(['"`])\.\/.*?\.(js|jsx|css|scss)\1$/.test(
                          token.content
                        )
                      ) {
                        const tab = token.content.substring(
                          3,
                          token.content.length - 1
                        );
                        const myToken = { ...getTokenProps({ token, key }) };

                        return (
                          <span
                            className={myToken.className}
                            style={myToken.style}
                            key={myToken.key}
                          >
                            <button
                              onClick={() =>
                                setActiveTab(Object.keys(tabs).indexOf(tab))
                              }
                              className='font-[inherit]border-0 bg-[transparent] p-0 text-[inherit] hover:cursor-pointer hover:underline'
                            >
                              {myToken.children}
                            </button>
                          </span>
                        );
                      }

                      return (
                        <span
                          {...getTokenProps({ token })}
                          key={key}
                          translate='no'
                        />
                      );
                    })}
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
