import { getFileExtension } from '@/utils/global';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './code-block.module.scss';
import classNames from 'classnames';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { JetBrains_Mono } from '@next/font/google';
const inter = JetBrains_Mono({ subsets: ['latin'] });
import { blameTheme } from './theme';

interface CodeBlockProps {
  tabs: {
    [key: string]: string;
  };
  showTabs?: boolean;
  showLines?: boolean;
}

export const CodeBlock = ({ tabs, showLines, showTabs }: CodeBlockProps) => {
  const [activeTab, setActiveTab] = useState(1);
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollYHeight, setScrollYHeight] = useState(0);
  const lines = tabs[Object.keys(tabs)[activeTab]].trim();
  const tabName = Object.keys(tabs)[activeTab];
  const language = getFileExtension(tabName);
  const [scrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const codeContent = useRef<HTMLDivElement>(null);
  const codeWindow = useRef(null);

  const handleScroll = () => {
    const codeConten = codeContent.current;
    if (!codeConten) return;

    const { scrollTop, scrollHeight, offsetHeight } = codeConten;
    // console.log({ scrollHeight });
    // console.log({ offsetHeight });
    console.log(scrollYHeight);
    setScrollTop(scrollTop);

    let newTop =
      (parseInt(`${scrollTop}`, 10) / parseInt(`${scrollHeight}`, 10)) *
      offsetHeight;

    newTop = Math.min(newTop, offsetHeight - scrollYHeight);
    console.log({ newTop: Number(newTop.toFixed()) });

    setScrollY(Number(newTop.toFixed()));
    // console.log({ newTop });
  };

  const handleDocumentMouseUp = (e: MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      setIsDragging(false);
    }
  };

  const handleDocumentMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      const scrollHostElement = codeContent.current;
      if (!scrollHostElement) return;
      const { scrollHeight, offsetHeight } = scrollHostElement;

      let deltaY = e.clientY - scrollThumbPosition;
      let percentage = deltaY * (scrollHeight / offsetHeight);

      setScrollThumbPosition(e.clientY);
      setScrollY(
        Math.min(Math.max(0, scrollY + deltaY), offsetHeight - scrollYHeight)
      );
      scrollHostElement.scrollTop = Math.min(
        scrollHostElement.scrollTop + percentage,
        scrollHeight - offsetHeight
      );
    }
  };

  const handleMouseDownY = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollThumbPosition(e.clientY);
    setIsDragging(true);
  };

  useEffect(() => {
    const codeConten = codeContent.current;
    if (!codeConten) return;
    const scrollYPorcentage = codeConten.clientHeight / codeConten.scrollHeight;
    const scrollThumbY = Math.max(
      scrollYPorcentage * codeConten.clientHeight,
      20
    );
    setScrollYHeight(Number(scrollThumbY.toFixed()));

    codeConten.addEventListener('scroll', handleScroll);
    return () => {
      codeConten.removeEventListener('scroll', handleScroll);
    };
  }, [activeTab, scrollYHeight]);

  useEffect(() => {
    //this is handle the dragging on scroll-thumb
    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);
    document.addEventListener('mouseleave', handleDocumentMouseUp);
    return function cleanup() {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
      document.removeEventListener('mouseleave', handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp, activeTab]);

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
            {showLines && (
              <div
                className={styles.lines}
                aria-hidden='true'
                style={{ top: -scrollTop }}
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
            )}
            <div className={styles.codeWrapper} ref={codeWindow}>
              <div className={styles.scrollbarX}>
                <span className='slider'></span>
              </div>
              <div className={styles.scrollbarY}>
                <span
                  onMouseDown={handleMouseDownY}
                  style={{ height: scrollYHeight, top: scrollY }}
                ></span>
              </div>

              <div className={styles.code} ref={codeContent}>
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
            </div>
          </pre>
        )}
      </Highlight>
    </div>
  );
};
