import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ParsedUrlQuery } from 'querystring';
import nextConfig from '../../next.config';
import { SideBar } from '@/types/sidebar';

const ROOT_PATH = process.cwd();

export const getAllMdx = (type: string) =>
  fs.readdirSync(path.join(ROOT_PATH, 'data', type));

interface MDXBySlug {
  params?: ParsedUrlQuery;
  locale?: string;
  file: string;
}

export const getMdxBySlug = ({
  params,
  file,
  locale: localeProp
}: MDXBySlug) => {
  const slug = params?.slug;
  const locale = localeProp ?? nextConfig.i18n.defaultLocale;

  const srcDirectory = path.join(ROOT_PATH, 'data', file);
  const mdxPath = path.join(srcDirectory, `${slug}.${locale}.mdx`);
  const mdxSource = fs.readFileSync(mdxPath, 'utf-8');

  const { data, content } = matter(mdxSource);

  return {
    slug,
    meta: data,
    content
  };
};

export const getSidebarData = (locale?: string) => {
  const realLocale = locale ?? nextConfig.i18n.defaultLocale;
  const srcDirectory = path.join(ROOT_PATH, 'data', 'sidebar');
  const sidebarData = fs.readFileSync(
    `${srcDirectory}/${realLocale}.json`,
    'utf-8'
  );

  const sidebar: SideBar = JSON.parse(sidebarData);
  return sidebar.list;
};
