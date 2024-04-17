import graymatter from 'gray-matter';

export const matter = <T = unknown>(
  content: string
): { meta: T; content: string } => {
  const { data, content: mdxContent } = graymatter(content);
  return {
    meta: data as T,
    content: mdxContent
  };
};
