import { getSidebar } from 'data/sidebar/get-sidebar';
import { Sidebar, SidebarMenu, Pagination, PageNav } from 'vintex';

export default async function DocsLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const sidebarData = await getSidebar(lang);
  // const sidebar = getSidebarData(lang);

  return (
    <main className='mx-auto max-w-std gap-2xl px-sm py-xl md:grid md:grid-cols-ax1 lg:grid-cols-ax1xa'>
      <Sidebar>
        <SidebarMenu menu={sidebarData.list} />
      </Sidebar>
      <article className='box-border overflow-hidden'>
        {children}
        <Pagination menu={sidebarData.list} />
      </article>
      <PageNav locale={lang} />
    </main>
  );
}
