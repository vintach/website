import type { SideBar } from '@/types/sidebar';
import type { ParsedUrlQuery } from 'querystring';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { glob } from 'glob';
import { DEFAULT_LOCALE } from '@/utils/constants';

const ROOT_PATH = process.cwd();
const DATA_PATH = path.join(ROOT_PATH, 'data');

export const getAllPathsMdx = (type: string) => {
  const PATH = path.join(DATA_PATH, type);
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  return paths.map(inpath => {
    const newPath = inpath.replace(`${PATH}/`, '').replace(/\.mdx$/, '');
    const locale = newPath.replace(/[(\/)?a-zA-Z0-9._-]+\./, '');
    const slug = newPath.replace(/(\/)?(index)?\.(en|es)$/, '').split('/');
    slug.pop();

    return {
      slug,
      lang: locale
    };
  });
};

interface MDXBySlug {
  params?: ParsedUrlQuery;
  file: string;
}

export const getMdxBySlug = ({ params, file }: MDXBySlug) => {
  const srcDirectory = path.join(ROOT_PATH, 'data', file);
  const locale = params?.lang ?? DEFAULT_LOCALE;

  const slug = params?.slug as string[];
  const realSlug = !slug ? [file] : slug[slug.length - 1];
  const slugPath = !slug ? '' : slug.join('/');
  const fileName = `${realSlug}.${locale}.mdx`;

  const mdxPath = path.join(srcDirectory, slugPath, fileName);
  const mdxSource = fs.readFileSync(mdxPath, 'utf-8');

  const { data: meta, content } = matter(mdxSource);

  return { slug, meta, content };
};

export const getSidebarData = (locale?: string) => {
  const realLocale = locale ?? DEFAULT_LOCALE;
  const srcDirectory = path.join(ROOT_PATH, 'data', 'sidebar');
  const sidebarData = fs.readFileSync(
    `${srcDirectory}/${realLocale}.json`,
    'utf-8'
  );

  const sidebar: SideBar = JSON.parse(sidebarData);
  return sidebar.list;
};

interface GETMDXData {
  locale?: string;
  file: string;
}
export const getMdxData = <T = {}>({ locale, file }: GETMDXData) => {
  const realLocale = locale ?? DEFAULT_LOCALE;
  const srcDirectory = path.join(ROOT_PATH, 'data', file);
  const source = fs.readFileSync(`${srcDirectory}/${realLocale}.json`, 'utf-8');

  const sourceParse: T = JSON.parse(source);
  return sourceParse;
};
