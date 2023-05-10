import { getFileExtension } from '@/utils/global';
import React, { useState } from 'react';
import styles from './code-block.module.scss';
import classNames from 'classnames';
import Highlight, { defaultProps } from 'prism-react-renderer';
import type { Language } from 'prism-react-renderer';
import { JetBrains_Mono } from '@next/font/google';
const inter = JetBrains_Mono({ subsets: ['latin'] });
import { blameTheme } from './theme';
import useScroll from '@/hooks/useScroll';
import useIsomorphicEffect from '@/hooks/useIsomorphicEffect';

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
    <div className={styles.root}>
      <div className={styles.windowTabs}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {showTabs && (
        <div className={styles.editorTabs}>
          {Object.keys(tabs).map((tab, index) => (
            <button
              className={classNames({
                [styles.isTabActive]: activeTab === index
              })}
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
            className={classNames(
              className,
              inter.className,
              styles.editorWindows
            )}
            style={{
              ...style,
              height
            }}
            translate='no'
          >
            {showLines && (
              <div className={styles.lineWrapper}>
                <div
                  className={styles.lines}
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
            <div className={styles.codeWrapper} ref={refCodeWindow}>
              <div className={styles.code}>
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
                              className={styles.tokenButton}
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
