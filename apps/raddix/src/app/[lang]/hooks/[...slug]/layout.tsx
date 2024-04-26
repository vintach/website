import { getConfigFileRepo } from '@/lib/content';
import { Pagination, PageNav } from 'vintex';
import { Sidebar } from '@/components/sidebar';

export default async function HooksLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const config = await getConfigFileRepo({
    repo: 'raddix',
    owner: 'vintach',
    contentDirPath: 'docs'
  });

  return (
    <main className='mx-auto max-w-std gap-2xl px-sm py-xl md:grid md:grid-cols-ax1 lg:grid-cols-ax1xa'>
      <Sidebar content={config.sidebar} />
      <div>
        {children}
        <Pagination menu={config.sidebar} />
      </div>
      <PageNav locale={lang} />
    </main>
  );
}
