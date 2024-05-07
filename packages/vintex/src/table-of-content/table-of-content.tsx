import { TOC } from './toc-client';
import { buildTree, getHeadings } from './utils';

interface TableOfContentProps {
  content: string;
  title?: string;
}

export const TableOfContent = ({
  title = 'On this page',
  content
}: TableOfContentProps) => {
  const headings = getHeadings(content);
  const headingsTree = buildTree(headings);
  const headingIds = headings.map(({ id }) => id);

  return (
    <TOC headingIds={headingIds} headingsTree={headingsTree} title={title} />
  );
};
