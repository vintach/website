export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='box-border w-full border-t border-gray-100 dark:bg-black'>
      <div className='mx-auto flex max-w-std flex-col items-center gap-y-xs px-sm py-lg text-xs text-gray-40 md:flex-row md:justify-between dark:text-gray-20'>
        <span>
          Made by{' '}
          <strong className='font-medium text-black dark:text-white'>
            Vintach
          </strong>
        </span>

        <span>© {currentYear} Raddix - MIT License</span>
      </div>
    </footer>
  );
};
