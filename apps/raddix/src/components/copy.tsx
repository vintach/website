import { useState } from 'react';

export const Copy = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyButtonStyles = isCopied
    ? 'bg-blue-40 text-white'
    : 'hover:bg-gray-100';

  const handleCopy = (str: string) => {
    if (isCopied) {
      return;
    }

    navigator.clipboard
      .writeText(str)
      .then(() => setIsCopied(true))
      .catch(err => console.log(err));

    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      className={`absolute right-3 top-4 z-10 rounded-md p-1 md:right-4 md:top-5 ${copyButtonStyles}`}
      type='button'
      onClick={() => handleCopy(text)}
    >
      {!isCopied ? (
        <svg
          className='h-5 w-5'
          fill='none'
          height='24'
          shapeRendering='geometricPrecision'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
          viewBox='0 0 24 24'
          width='24'
          aria-hidden='true'
        >
          <path d='M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z'></path>
        </svg>
      ) : (
        <svg
          className='h-5 w-5'
          fill='none'
          height='24'
          shapeRendering='geometricPrecision'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
          viewBox='0 0 24 24'
          width='24'
          aria-hidden='true'
        >
          <path d='M20 6L9 17l-5-5'></path>
        </svg>
      )}
    </button>
  );
};
