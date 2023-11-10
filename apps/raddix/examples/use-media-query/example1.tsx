import { useMediaQuery } from '@raddix/use-media-query';

export const Example = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
};
