import { getConfigFile } from '@/lib/content';
import { Pagination, PageNav } from 'vintex';
import { Sidebar } from '@/components/sidebar';

export default function GuideLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const config = getConfigFile({ lang, dirPath: 'content/guide' });

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
