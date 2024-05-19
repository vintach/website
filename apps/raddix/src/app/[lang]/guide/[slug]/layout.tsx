import { getConfigFile } from '@/lib/content';
import { Sidebar } from 'vintex';

export default function GuideLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const config = getConfigFile({ lang, dirPath: 'content/guide' });

  return (
    <main className='mx-auto max-w-std gap-2xl px-sm py-xl md:grid md:grid-cols-ax1'>
      <Sidebar items={config.sidebar} />
      {children}
    </main>
  );
}
