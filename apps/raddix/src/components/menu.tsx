import Link from 'next/link';

export interface MenuItems {
  name: string;
  path: string;
}

export const Menu = ({ menu }: { menu: MenuItems[] }) => {
  return (
    <nav className='w-full sm:w-auto'>
      <ul className='flex w-full flex-col items-center justify-center sm:flex-row sm:gap-md'>
        {menu.map((item, id) => (
          <li
            key={id}
            className='opacity-1 w-full list-none pb-xs text-sm transition-opacity duration-100 first:m-0 hover:opacity-80 sm:w-auto sm:pb-0'
          >
            <Link href={item.path} className='block py-xs sm:inline sm:py-sm'>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
