import type { Feature } from '@/types/home-data';

interface FeaturesProps {
  features: Feature[];
}

export const Features = ({ features }: FeaturesProps) => {
  return (
    <div className='mb-40 grid grid-cols-1 gap-4 px-sm md:grid-cols-2 lg:grid-cols-3'>
      {features.map(feature => (
        <div
          key={feature.title}
          className='relative min-h-[156px] rounded-lg bg-gray-10/35 p-6 dark:bg-gray-120'
        >
          <h3 className='text-sm font-medium'>{feature.title}</h3>
          <p className='pt-xs text-sm text-gray-40 dark:text-gray-10'>
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};
