import { useState, ChangeEvent } from "react";

import FormInput from "components/Form/FormInput";
import AutocompleteOutput from "components/Pages/Share/Autocomplete/AutocompleteOutput";
import AutocompleteResults from "components/Pages/Share/Autocomplete/AutocompleteResults";

import { useShare } from "components/Pages/Share/hooks/useShare";

import style from "./autocomplete.module.css";

import type {
  AutocompleteProps,
  ItemCallback,
  AutocompleteItem,
} from "components/Pages/Share/Autocomplete/types";

export default function Autocomplete({ data, onSelect }: AutocompleteProps) {
  const [inputValue, setInputValue] = useState("");
  const { formState } = useShare();
  const [results, setResults] = useState<AutocompleteItem[]>(data);

  const { tags } = formState;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSelect: ItemCallback = (item) => {
    setInputValue("");
    const resultsUpdated = results.map((result) => {
      if (result.id !== item.id) return result;

      return { ...result, isSelected: !result.isSelected };
    });
    setResults(resultsUpdated);
    if (!onSelect) return;
    onSelect(resultsUpdated.filter((result) => result.isSelected));
  };

  const resultsToShow = results.filter((item) => {
    return item.label.toLowerCase().includes(inputValue.toLowerCase());
  });

  const optionsSelected =
    tags.length > 0 ? results.filter((item) => item.isSelected) : [];

  return (
    <aside className={style.check_container}>
      <FormInput
        type="text"
        placeholder="Tags del recurso"
        onChange={handleInputChange}
        value={inputValue}
        icon={<i className="uil uil-tag-alt"></i>}
      />
      {inputValue.length > 0 && (
        <AutocompleteResults results={resultsToShow} onSelect={handleSelect} />
      )}
      <AutocompleteOutput options={optionsSelected} onClick={handleSelect} />
    </aside>
  );
}
