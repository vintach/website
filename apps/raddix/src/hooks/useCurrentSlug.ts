import { useRouter } from 'next/router';

export const useCurrentSlug = () => {
  const router = useRouter();
  let slug = router.query.slug;
  if (Array.isArray(slug)) {
    return (slug = `/docs/${slug.join('/')}`);
  }
  return '';
};
