export const CodeIcon = ({ size = 22 }) => {
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
      <polyline points='16 18 22 12 16 6'></polyline>
      <polyline points='8 6 2 12 8 18'></polyline>
    </svg>
  );
};
