import { useState } from 'react';
import { JetBrains_Mono } from '@next/font/google';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import classNames from 'classnames';
import { blameTheme } from './theme';
import styles from './code-block.module.scss';
import { getFileExtension } from '@/utils/global';

const inter = JetBrains_Mono({ subsets: ['latin'] });

interface CodeBlockProps {
  tabs: {
    [key: string]: string;
  };
  showTabs?: boolean;
}

export const CodeBlock = ({ tabs, showTabs }: CodeBlockProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const lines = tabs[Object.keys(tabs)[activeTab]].trim();
  const tabName = Object.keys(tabs)[activeTab];
  const language = getFileExtension(tabName);

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
              key={tab + index}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
      <>
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
                ...style
              }}
              translate='no'
            >
              <div className={styles.code}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })} translate='no'>
                    {line.map((token, key) => {
                      if (
                        token.types[token.types.length - 1] === 'string' &&
                        /^(['"`])\.\/.*?\.(js|jsx|css)\1$/.test(token.content)
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
                          {...getTokenProps({ token, key })}
                          translate='no'
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </pre>
          )}
        </Highlight>
      </>
    </div>
  );
};
