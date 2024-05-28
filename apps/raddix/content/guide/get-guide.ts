/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/require-await */
import 'server-only';

interface Guide {
  title: string;
  description: string;
}

export const getGuide = async (lang: string, slug: string): Promise<Guide> => {
  const enter = () => import(`./${lang}/${slug}.mdx.json`).then(m => m.default);
  return enter();
};
