import type { Config, SidebarItem } from '@/types/content';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SidebarItem[]>
) {
  const { q } = req.query;

  fetch(
    'https://raw.githubusercontent.com/vintach/raddix/main/docs/_config.json'
  )
    .then(response => response.json())
    .then((data: Config) => {
      const items = data.sidebar.flatMap(
        source => source.children
      ) as SidebarItem[];

      if (q) {
        const results = items.filter(({ title }) => {
          const query = Array.isArray(q) ? q[0] : q;
          return title.toLowerCase().includes(query.toLowerCase());
        });
        res.status(200).json(results);
      }

      res.status(200).json(items);
    });
}
