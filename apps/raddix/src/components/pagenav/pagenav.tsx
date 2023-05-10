import { useEffect, useState } from 'react';
import styles from './pagenav.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';

interface IdentItem {
  id: string;
  name: string;
  prints: number;
  parentPrints: number;
}
interface TreeProps {
  navData: IdentItem[];
  parentPrints: number;
}

const Tree = ({ navData, parentPrints = 0 }: TreeProps) => {
  const items = navData.filter(item => item.parentPrints === parentPrints);

  if (!items.length) {
    return null;
  }

  return (
    <ul
      className={classNames(styles.list, {
        [styles.isChild]: parentPrints > 0
      })}
    >
      {items.map(item => {
        return (
          <li key={`${item.name}${item.prints}`} className={styles.item}>
            <a href={`#${item.id}`}>{item.name}</a>
            <Tree navData={navData} parentPrints={item.prints} />
          </li>
        );
      })}
    </ul>
  );
};

export const PageNav = () => {
  const [heading, setHeading] = useState<IdentItem[]>([]);
  const { asPath, locale } = useRouter();

  useEffect(() => {
    const titleElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('[data-title]')
    );

    const newElements: IdentItem[] = [];
    let idLevel2 = 0;
    let idLevel3 = 0;
    let idLevel4 = 0;
    let parentPrints = 0;

    titleElements.map(({ id, nodeName, innerText }, index) => {
      const prints = index + 1;

      const node = Number(nodeName.replace('H', ''));

      if (node === 2) {
        idLevel2 = prints;
        parentPrints = 0;
      }

      if (node === 3) {
        idLevel3 = prints;
        parentPrints = idLevel2;
      }

      if (node === 4) {
        idLevel4 = prints;
        parentPrints = idLevel3;
      }

      newElements.push({
        id: id,
        name: innerText,
        prints,
        parentPrints
      });
    });

    setHeading(newElements);
  }, [asPath, locale]);

  return (
    <nav className={styles.nav}>
      <h5>On this page</h5>
      <Tree navData={heading} parentPrints={0} />
    </nav>
  );
};
