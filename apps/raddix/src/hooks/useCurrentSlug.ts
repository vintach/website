import { useSearchParams } from 'next/navigation';

export const useCurrentSlug = () => {
  const query = useSearchParams();
  let slug = query?.get('slug');
  if (Array.isArray(slug)) {
    return (slug = `/docs/${slug.join('/')}`);
  }
  return '';
};
