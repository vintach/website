export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='ui-box-border ui-text-ellipsis dark:ui-bg-black ui-w-full ui-border-t ui-border-gray-100 ui-bg-white'>
      <div className='ui-mx-auto ui-flex ui-max-w-std ui-flex-col ui-items-center ui-gap-y-xs ui-px-sm ui-py-lg ui-text-xs ui-text-gray-40 md:ui-flex-row md:ui-justify-between dark:ui-text-gray-20'>
        <span>
          Made by{' '}
          <strong className='ui-font-medium ui-text-black dark:ui-text-white'>
            Vintach
          </strong>
        </span>

        <span>© {currentYear} Raddix - MIT License</span>
      </div>
    </footer>
  );
};
