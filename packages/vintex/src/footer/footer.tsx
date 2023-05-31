export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='box-border w-full border-t border-gray-100 bg-black'>
      <div className='mx-auto flex max-w-std flex-col items-center gap-y-xs px-sm py-lg text-xs text-gray-20 md:flex-row md:justify-between'>
        <span>
          Made by <strong className='font-medium text-white'>Vintach</strong>
        </span>

        <span>© {currentYear} Raddix - MIT License</span>
      </div>
    </footer>
  );
};
