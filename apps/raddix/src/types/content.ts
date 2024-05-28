import { type ParsedUrlQuery } from 'querystring';

export interface SidebarItem {
  title: string;
  path?: string;
  heading?: boolean;
  children?: SidebarItem[];
}

export interface Config {
  sidebar: SidebarItem[];
  meta?: MetaOptions;
}

export interface RepoOpts {
  params?: ParsedUrlQuery;
  repo: string;
  owner: string;
  branch?: string;
  contentDirPath: string;
}

export interface RepoFile {
  repo: string;
  owner: string;
  branch?: string;
  filePath?: string;
}

export interface MetaOptions {
  title?: string;
  description?: string;
  url?: string;
  publicUrl?: string;
  author?: {
    name?: string;
    email?: string;
    url?: string;
    username?: string;
  };
}

export interface ConfigFileRepo {
  contentDirPath: string;
  lang?: string;
  repo: string;
  owner: string;
  branch?: string;
}

type ConfigItem = () => Promise<Config>;
export type ConfigPath = Record<string, ConfigItem>;

export interface ConfigFile {
  dirPath: string;
  lang?: string;
}
