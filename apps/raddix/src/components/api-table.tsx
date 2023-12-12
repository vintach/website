interface Option {
  name: string;
  description: string;
  required?: string;
  defaultValue?: string;
  type: string;
}

export interface ApiTableProps {
  head: Partial<Option>;
  data: Option[];
}

export const ApiTable = ({ head, data }: ApiTableProps) => {
  return (
    <table className='mt-sm block w-full table-fixed border-collapse overflow-x-auto text-left scrollbar-thin scrollbar-track-[transparent] scrollbar-thumb-gray-40/50 scrollbar-thumb-rounded-lg'>
      <thead>
        <tr>
          <th className='whitespace-nowrap bg-white/5 p-xs text-sm font-medium'>
            {head?.name ?? 'Name'}
          </th>
          <th className='whitespace-nowrap bg-white/5 p-xs text-sm font-medium'>
            {head?.description ?? 'Description'}
          </th>
          {(head?.required || data[0].required) && (
            <th className='whitespace-nowrap bg-white/5 p-xs text-sm font-medium'>
              {head?.required ?? 'Required'}
            </th>
          )}
          {(head?.defaultValue || data[0].defaultValue) && (
            <th className='whitespace-nowrap bg-white/5 p-xs text-sm font-medium'>
              {head?.defaultValue ?? 'Default Value'}
            </th>
          )}
          <th className='whitespace-nowrap bg-white/5 p-xs text-sm font-medium'>
            {head?.type ?? 'Type'}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({ name, description, required, defaultValue, type }, index) => (
            <tr key={`${name}-${index}`} className=''>
              <td className='border-b border-solid border-white/5 px-xs py-sm text-xs'>
                {name}
              </td>
              <td className='w-5/6 min-w-[25ch] border-b border-solid border-white/5 px-xs py-sm text-xs '>
                {description}
              </td>
              {(head?.required || data[0].required) && (
                <td className='border-b border-solid border-white/5 px-xs py-sm text-xs '>
                  {required}
                </td>
              )}
              {(head?.defaultValue || data[0].defaultValue) && (
                <td className='border-b border-solid border-white/5 px-xs py-sm text-xs '>
                  {defaultValue}
                </td>
              )}
              <td className='border-b border-solid border-white/5 px-xs py-sm text-xs'>
                {type}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
