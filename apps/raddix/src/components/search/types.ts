import type {
  AutocompleteApi as InternalAutocompleteApi,
  AutocompleteState as InternalAutocompleteState,
  InternalAutocompleteSource
} from '@algolia/autocomplete-core';
import type { Hit } from '@algolia/client-search';
import type { BaseSyntheticEvent, KeyboardEvent, MouseEvent } from 'react';

export type AutocompleteItemProps = Hit<{
  title: string;
  path: string;
}>;

export type AutocompleteState =
  InternalAutocompleteState<AutocompleteItemProps>;

export type AutocompleteApi = InternalAutocompleteApi<
  AutocompleteItemProps,
  BaseSyntheticEvent,
  MouseEvent,
  KeyboardEvent
>;

export interface SearchBoxProps {
  getFormProps: AutocompleteApi['getFormProps'];
  getInputProps: AutocompleteApi['getInputProps'];
}

export interface SearchResultsProps {
  autocompleteState: AutocompleteState;
  getPanelProps: AutocompleteApi['getPanelProps'];
  getListProps: AutocompleteApi['getListProps'];
  getItemProps: AutocompleteApi['getItemProps'];
  errorMessage: string[];
}

export interface SearchItemProps {
  source: InternalAutocompleteSource<AutocompleteItemProps>;
  item: AutocompleteItemProps;
  getItemProps: AutocompleteApi['getItemProps'];
}

export interface SearchProps {
  label: string;
  errorMessage: string[];
}
