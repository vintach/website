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
