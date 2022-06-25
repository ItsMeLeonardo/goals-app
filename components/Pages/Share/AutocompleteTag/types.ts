export type AutocompleteItem = {
  id: string;
  name: string;
  isSelected?: boolean;
};

export type AutocompleteProps = {
  onSelect?: (items: AutocompleteItem[]) => void;
};

export type ItemCallback = (item: AutocompleteItem) => void;

export type AutocompleteResultsProps = {
  onSelect: ItemCallback;
  selected: AutocompleteItem[];
  results: AutocompleteItem[];
  loading: boolean;
  querySearch: string;
};

export type AutocompleteOutputProps = {
  options: AutocompleteItem[];
  onClick: ItemCallback;
};
