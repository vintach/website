/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from 'react';
import type {
  AutocompleteItemProps,
  AutocompleteState
} from '@/components/search/types';
import { getGuide } from 'content/guide/get-guide';
import { createAutocomplete } from '@algolia/autocomplete-core';
import { useRouter } from 'next/navigation';
import type { Config, SidebarItem } from '@/types/content';
import { useLocale } from '@/i18n';

export const useAutocomplete = ({ label = '' }) => {
  const router = useRouter();
  const lang = useLocale();
  const [autocompleteState, setAutocompleteState] = useState<AutocompleteState>(
    {
      collections: [],
      isOpen: false,
      activeItemId: null,
      completion: null,
      context: {},
      query: '',
      status: 'idle'
    }
  );

  const autocomplete = useMemo(
    () =>
      createAutocomplete<
        AutocompleteItemProps,
        React.BaseSyntheticEvent,
        React.MouseEvent,
        React.KeyboardEvent
      >({
        placeholder: label,
        onStateChange: ({ state }) => setAutocompleteState(state),
        autoFocus: true,
        openOnFocus: true,
        defaultActiveItemId: 0,
        navigator: {
          navigate: ({ itemUrl }) => {
            router.push(itemUrl);
          }
        },
        getSources: ({ query }) => {
          if (!query)
            return [
              {
                sourceId: 'New hooks',
                getItems: () => [
                  { title: 'useFetch', path: '/hooks/use-fetch' },
                  { title: 'useBoolean', path: '/hooks/use-boolean' },
                  { title: 'useScrollLock', path: '/hooks/use-scroll-lock' },
                  { title: 'useClipboard', path: '/hooks/use-clipboard' },
                  { title: 'useBattery', path: '/hooks/use-battery' }
                ],
                getItemUrl: ({ item }) => {
                  return item.path;
                }
              }
            ];

          return [
            {
              sourceId: 'guide',
              getItems: async () => {
                const guideData: Config = await getGuide(lang);
                const items = guideData.sidebar.flatMap(
                  source => source.children
                ) as SidebarItem[];

                return items.filter(({ title }) => {
                  return title.toLowerCase().includes(query.toLowerCase());
                });
              },
              getItemUrl: ({ item }) => {
                return item.path;
              }
            },
            {
              sourceId: 'hooks',
              getItems: () => {
                return fetch(`/api/hook?q=${query}`)
                  .then(res => res.json())
                  .then((data: Config) => data);
              },
              getItemUrl: ({ item }) => {
                return item.path;
              }
            }
          ];
        }
      }),
    [lang]
  );

  return { autocomplete, autocompleteState };
};
