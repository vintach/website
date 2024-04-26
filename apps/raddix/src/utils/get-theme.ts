import { cookies } from 'next/headers';

export const getTheme = () => {
  const theme = cookies().get('theme');
  if (!theme) {
    return 'dark';
  }
  return theme.value;
};
