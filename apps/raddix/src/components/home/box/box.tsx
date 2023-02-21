import { Children } from '@/types/global';
import styles from './box.module.scss';
import classNames from 'classnames';

export const BoxSection = ({ children }: Children) => (
  <section className={styles.section}>{children}</section>
);

interface BoxContentProps extends Children {
  /**
   * it controls the alignment of items
   * @default 'left'
   */
  alignment?: 'center' | 'left' | 'right';
}

export const BoxContent = ({
  children,
  alignment = 'left'
}: BoxContentProps) => (
  <div
    className={classNames(styles.content, {
      [styles.isCenter]: alignment === 'center',
      [styles.isLeft]: alignment === 'left',
      [styles.isRight]: alignment === 'right'
    })}
  >
    {children}
  </div>
);

export const BoxGrid = ({ children }: Children) => (
  <div className={styles.grid}>{children}</div>
);

interface BoxTabsProps {
  tabs: {
    name?: string;
    icon?: () => JSX.Element;
  }[];
}

export const BoxTabs = ({ tabs }: BoxTabsProps) => {
  return (
    <ul className={styles.tabList}>
      {tabs.map((itemTab, index) => {
        return (
          <li>
            <button>
              {itemTab?.icon?.()}
              {itemTab?.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
