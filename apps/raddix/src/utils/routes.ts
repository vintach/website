interface Section {
  title: string;
  path?: string;
  children?: Section[];
}

interface HookSidebar {
  sections: Section[];
}

interface Paths {
  slug: string[];
  lang: string;
}

// Create new routes with available locations
export const createLocalizedPaths = (
  sidebar: HookSidebar['sections'],
  locales: string[]
) => {
  const paths: Paths[] = [];

  sidebar.forEach(section => {
    if (section.path) {
      const pathArr = section.path?.split('/');

      locales.forEach(locale => {
        paths.push({
          slug: [`${pathArr[pathArr.length - 1]}`],
          lang: locale
        });
      });
    }

    if (section.children) {
      paths.push(...createLocalizedPaths(section.children, locales));
    }
  });

  return paths;
};
