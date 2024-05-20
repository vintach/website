import { type TreeNode } from '../tree';

type Route = Required<Pick<TreeNode, 'title' | 'path'>>;

/** Returns all the paths that are in a sidebar */
export const getPaths = (sidebar: TreeNode[]): Route[] => {
  const paths: Route[] = [];

  const obtenerPaths = (arr: TreeNode[]) => {
    arr.forEach(item => {
      if (item.path) {
        paths.push({ title: item.title, path: item.path });
      }

      if (item.children) {
        obtenerPaths(item.children);
      }
    });
  };

  obtenerPaths(sidebar);
  return paths;
};
