'use client';

import { useContext, useState } from 'react';
import { PACKAGE_MANAGERS } from '@/utils/constants';
import { PackageManagerContext } from '@/contexts/package-manager-context';
import { CommandLine } from '@/icons/command-line';

export interface PackageManagerChangerProps {
  label: string;
}

export const PackageManagerChanger = ({
  label
}: PackageManagerChangerProps) => {
  const [open, setOpen] = useState(true);
  const { pkgManager, setPkgManager } = useContext(PackageManagerContext);

  const handleChangePkg = (manager: string) => {
    setOpen(false);
    setPkgManager(manager);
  };

  return (
    <div className='relative' onMouseLeave={() => setOpen(false)}>
      <button
        aria-expanded={open}
        aria-haspopup='true'
        type='button'
        className='p-xs transition-colors'
        aria-label={label}
        title={label}
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen(!open)}
      >
        <CommandLine />
      </button>

      <div
        className={`absolute z-50 ${open ? 'block' : 'hidden'} left-1/2 top-0 -translate-x-1/2 translate-y-8 py-2`}
      >
        <div className='flex min-w-24 flex-col rounded-md border border-gray-10/80 bg-white p-xs text-xs dark:border-gray-120/80 dark:bg-black'>
          {PACKAGE_MANAGERS.map(manager => (
            <button
              key={manager}
              type='button'
              onClick={() => handleChangePkg(manager)}
              className={`mb-[3px] w-full rounded-md px-xs py-1 text-left last:mb-0 hover:bg-gray-10/50 dark:hover:bg-gray-120 ${pkgManager === manager ? 'bg-gray-10/50 text-purple-80 dark:bg-gray-120 dark:text-purple-40' : ''}`}
            >
              {manager}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
