export const FileIcon = ({ size = 22 }) => {
  return (
    <svg
      aria-labelledby='title'
      viewBox='0 0 24 24'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      stroke='currentColor'
      strokeWidth='2'
      width={size}
      height={size}
    >
      <path d='M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z'></path>
      <polyline points='13 2 13 9 20 9'></polyline>
    </svg>
  );
};
