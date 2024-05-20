import type { ParsedUrlQuery } from 'querystring';
import path from 'path';
import fs from 'fs';
import { matter } from './matter';
import { getFile, getRemoteFile } from '@/utils/get-file';
import type {
  Config,
  ConfigFile,
  ConfigFileRepo,
  MetaOptions,
  RepoOpts
} from '@/types/content';

interface ReturnMdxFile {
  meta: MetaOptions;
  content: string;
}

interface FileBySlugOpts {
  contentDirPath?: string;
  filePath: string;
  params?: ParsedUrlQuery;
}

/** Get configuration file from the local file system */
export const getConfigFile = ({ lang = '', dirPath }: ConfigFile) => {
  const filePath = path.join(process.cwd(), dirPath, lang, '_config.json');
  const response = fs.readFileSync(filePath, 'utf-8');
  const configFile: Config = JSON.parse(response);
  return configFile;
};

/** Get configuration file from repository */
export const getConfigFileRepo = async ({
  contentDirPath,
  repo,
  owner,
  branch = 'main',
  lang
}: ConfigFileRepo) => {
  let fileData: string | null = null;
  const isLang = lang ? `/${lang}` : '';

  try {
    if (process.env.NODE_ENV === 'development') {
      fileData = (
        await getFile(
          `../../../${repo}/${contentDirPath}${isLang}/_config.json`
        )
      ).toString();
    } else {
      fileData = await getRemoteFile({
        owner,
        repo,
        branch,
        filePath: `${contentDirPath}${isLang}/_config.json`
      });
    }
  } catch (error) {
    throw new Error('Failed fetching file data');
  }

  const fileConfig: Config = JSON.parse(fileData);

  return fileConfig;
};

/** Get mdx file from the local file system by slug */
export const getMdxFileBySlug = ({
  contentDirPath = 'content',
  filePath,
  params
}: FileBySlugOpts) => {
  const lang = params?.lang ? `${params.lang}` : '';
  const slug = params?.slug;
  const flattenedPath = Array.isArray(slug) ? slug.join('/') : slug;

  const mdxPath = path.join(
    process.cwd(),
    contentDirPath,
    filePath,
    lang,
    `${flattenedPath}.mdx`
  );
  const mdxSource = fs.readFileSync(mdxPath, 'utf-8');

  const { meta, content } = matter<MetaOptions>(mdxSource);

  return { meta, content };
};

/**
 * Get mdx file from a repository by slug.
 * In development mode get the file from the local repository.
 * In production mode get the file from the github repository.
 */
export const getMdxFileRepoBySlug = async ({
  params,
  repo,
  owner,
  branch = 'main',
  contentDirPath
}: RepoOpts): Promise<ReturnMdxFile> => {
  const lang = params?.lang ? `/${params.lang}` : '';
  const slug = params?.slug;
  const flattenedPath = Array.isArray(slug) ? slug.join('/') : slug;
  const filePath = `../../../${repo}/${contentDirPath}`;

  let fileData: string | null = null;

  try {
    if (process.env.NODE_ENV === 'development') {
      fileData = (
        await getFile(`${filePath}${lang}/${flattenedPath}.mdx`)
      ).toString();
    } else {
      fileData = await getRemoteFile({
        owner,
        repo,
        branch,
        filePath: `${contentDirPath}${lang}/${flattenedPath}.mdx`
      });
    }
  } catch (error) {
    throw new Error('Failed fetching file data');
  }

  if (!fileData) {
    return {
      meta: {
        title: '',
        description: ''
      },
      content: ''
    };
  }

  const { meta, content } = matter<MetaOptions>(fileData);
  return { meta, content };
};
