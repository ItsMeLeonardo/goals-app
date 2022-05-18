import { useState, ChangeEvent } from "react";

import FormInput from "components/Form/FormInput";
import AutocompleteOutput from "components/Autocomplete/AutocompleteOutput";
import AutocompleteResults from "components/Autocomplete/AutocompleteResults";

import style from "./autocomplete.module.css";

import type {
  AutocompleteProps,
  ItemCallback,
  AutocompleteItem,
} from "components/Autocomplete/types";

export default function Autocomplete({ data }: AutocompleteProps) {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<AutocompleteItem[]>(data);

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
    console.log({ resultsUpdated });
    setResults(resultsUpdated);
  };

  const resultsToShow = results.filter((item) => {
    return item.label.toLowerCase().includes(inputValue.toLowerCase());
  });

  const optionsSelected = results.filter((item) => item.isSelected);

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
