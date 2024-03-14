'use client';

import type { TextStr } from '@/types/global';
import { Copy } from './copy';
import { useContext } from 'react';
import { PackageManagerContext } from '@/contexts/package-manager-context';
import { COMMANDS } from '@/utils/constants';

const getTokenProps = (str: string) => {
  if (
    str === 'install' ||
    str === 'i' ||
    str === 'add' ||
    str === 'dlx' ||
    str === 'init' ||
    str === 'npx' ||
    str === 'run'
  ) {
    return { className: 'text-[#0d8a99] dark:text-[#56b6c2]' };
  }

  return { className: 'dark:text-[#D3D7CF]' };
};

const getValues = (code: string, pkg: boolean, pkgManager = '') => {
  let text = code;
  if (pkg) {
    const command = COMMANDS[pkgManager];
    text = `${command} ${code}`;
  }

  const tokens = text.split(' ');
  const command = tokens.shift();
  return { command, tokens, text };
};

export interface SnippetProps extends TextStr {
  pkg?: boolean;
}

export const Snippet = ({ text: textProp, pkg = false }: SnippetProps) => {
  const { pkgManager } = useContext(PackageManagerContext);
  const { command, tokens, text } = getValues(textProp, pkg, pkgManager);

  return (
    <div className='relative my-sm rounded-xl border border-black/5 bg-gray-10/35 p-sm md:px-6 md:py-[21px] dark:border-gray-100 dark:bg-gray-120/80'>
      <pre className='text-xs md:text-[15px]'>
        <div className='w-full'>
          <span className='text-[#0d8a99] dark:text-[#56b6c2]'>{command}</span>
          {tokens.map((value, i) => (
            <span key={i} {...getTokenProps(value)}>
              &nbsp;{value}
            </span>
          ))}
        </div>
      </pre>
      <Copy text={text} />
    </div>
  );
};
