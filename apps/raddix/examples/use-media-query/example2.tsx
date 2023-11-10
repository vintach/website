import { useMediaQuery } from '@raddix/use-media-query';

export const Example = () => {
  const isLargeDevice = useMediaQuery(1024);

  return <div>Large: {isLargeDevice ? 'Yes' : 'No'}</div>;
};
