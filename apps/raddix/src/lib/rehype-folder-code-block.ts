import type { UnistNode, UnistTree } from './unist';
import { visit } from 'unist-util-visit';
import path from 'path';
import fs from 'fs';

export const rehypeFolderCodeBlock = () => {
  return (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.name === 'CodeBlock') {
        const folder = node.attributes?.[0].value;
        const file = node.attributes?.[1].value as string;
        const type = 'mdxJsxAttribute';

        const filePath = `${process.cwd()}/examples/${folder}/${file}`;

        if (fileExists(filePath)) {
          const source = fs.readFileSync(path.join(filePath), 'utf8');
          const extension = file.split('.').pop();
          const newAttr = [
            {
              type,
              name: 'language',
              value: 'tsx'
            },
            { type, name: 'source', value: source },
            { type, name: 'syntax', value: extension }
          ];
          node.attributes = newAttr;
        }
      }
    });
  };
};

function fileExists(filePath: string): boolean {
  try {
    fs.accessSync(filePath);
    return true;
  } catch (e) {
    return false;
  }
}
