interface Option {
  name: string;
  description: string;
}

export interface ApiTableProps {
  head: Partial<Option>;
  data: Option[];
}

export const ApiTable = ({ head, data }: ApiTableProps) => {
  return (
    <table className='mt-sm w-full border-collapse text-left'>
      <thead>
        <tr>
          <th className='w-1/4 bg-white/5 p-xs text-sm font-medium'>
            {head?.name ?? 'Name'}
          </th>
          <th className='w-3/4 bg-white/5 p-xs text-sm font-medium'>
            {head?.description ?? 'Description'}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, description }, index) => (
          <tr key={`${name}-${index}`}>
            <td className='w-1/4 border-b border-solid border-white/5 px-xs py-sm text-xs '>
              {name}
            </td>
            <td className='w-3/4 border-b border-solid border-white/5 px-xs py-sm text-xs '>
              {description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
