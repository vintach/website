import { getConfigFileRepo } from '@/lib/content';
import { Sidebar } from 'vintex';
import { defaultLocale } from '@/i18n';

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
    <div className='mx-auto max-w-std gap-2xl px-sm py-xl md:grid md:grid-cols-ax1'>
      <Sidebar items={config.sidebar} lang={lang} defaultLang={defaultLocale} />
      {children}
    </div>
  );
}
