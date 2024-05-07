/* eslint-disable curly */
import { type TreeNode } from '../tree';
import { marked } from 'marked';
import GithubSlugger from 'github-slugger';
const slugger = new GithubSlugger();

export interface HeadingToken {
  depth: number;
  text: string;
  id: string;
}

type Heading = Omit<TreeNode, 'heading'>;

/** Get all headings of a document and returns it in a list format */
export const getHeadings = (markdown: string): HeadingToken[] => {
  const headings: HeadingToken[] = [];
  slugger.reset();
  const tokens = marked.lexer(markdown);

  tokens.forEach(token => {
    if (token.type === 'heading' && token.depth > 1) {
      headings.push({
        depth: token.depth,
        text: token.text,
        id: slugger.slug(`${token.text}`)
      });
    }
  });

  return headings;
};

/** Converts an array with ''depth" property to a tree array */
export const buildTree = (list: HeadingToken[]): Heading[] => {
  const root: { children: Heading[] } = { children: [] };
  if (!list[0]) return [];
  const depthStack = Array(list[0].depth).fill(root);

  list.forEach(({ id, text, depth }) => {
    const node: Heading = { title: text, path: `#${id}` };

    while (depthStack.length - 1 >= depth) {
      depthStack.pop();
    }

    if (depthStack.length > 0) {
      if (!depthStack[depthStack.length - 1].children) {
        depthStack[depthStack.length - 1].children = [];
      }
      depthStack[depthStack.length - 1].children.push(node);
      depthStack.push(node);
    }
  });

  return root.children;
};
