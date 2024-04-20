import { getConfigFile } from '@/lib/content';
import { Sidebar, SidebarMenu, Pagination, PageNav } from 'vintex';

export default async function GuideLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const config = await getConfigFile({ lang, dirPath: 'content/guide' });

  return (
    <main className='mx-auto max-w-std gap-2xl px-sm py-xl md:grid md:grid-cols-ax1 lg:grid-cols-ax1xa'>
      <Sidebar>
        <SidebarMenu items={config.sidebar} />
      </Sidebar>
      <div>
        {children}
        <Pagination menu={config.sidebar} />
      </div>
      <PageNav locale={lang} />
    </main>
  );
}
