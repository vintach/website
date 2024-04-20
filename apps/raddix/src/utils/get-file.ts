import path from 'path';
import { promises as fs } from 'fs';
import { glob } from 'glob';

interface FileOps {
  contentDirPath: string;
  pattern: string;
}

export const getFiles = ({ contentDirPath, pattern }: FileOps) => {
  const dirPath = path.join(process.cwd(), contentDirPath);
  const paths = glob.sync(`${dirPath}/${pattern}`);

  return paths.map(file => {
    const filePath = file.replace(`${dirPath}/`, '');
    const fileSplit = filePath.split('/');
    const fileName = fileSplit[fileSplit.length - 1];
    const fileDir = fileSplit.slice(0, fileSplit.length - 1).join('/');

    return {
      filePath,
      fileDir,
      fileName
    };
  });
};

export const getFile = async (filePath: string) => {
  const localFilePath = path.join(process.cwd(), filePath);
  const file = await fs.readFile(localFilePath);
  return file.toString();
};

export const getRemoteFile = async ({
  owner,
  repo,
  branch,
  filePath
}: {
  owner: string;
  repo: string;
  branch: string;
  filePath: string;
}) => {
  const url = new URL(
    `${owner}/${repo}/${branch}/${filePath}`,
    'https://raw.githubusercontent.com/'
  );

  const response = await fetch(url.toString(), {
    headers: {
      Accept: 'application/vnd.github.v3.raw'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch remote files');
  }

  return await response.text();
};
