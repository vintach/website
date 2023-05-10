import styles from './api-table.module.scss';

interface Option {
  name: string;
  description: string;
}

interface ApiTableProps {
  head: Partial<Option>;
  data: Option[];
}

export const ApiTable = ({ head, data }: ApiTableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.name}>{head?.name ?? 'Name'}</th>
          <th className={styles.description}>
            {head?.description ?? 'Description'}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, description }, index) => (
          <tr key={`${name}-${index}`}>
            <td className={styles.name}>{name}</td>
            <td className={styles.description}>{description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
