import { useState, ChangeEvent, useEffect } from "react";
import { debounce } from "throttle-debounce";

// components
import FormInput from "components/Form/FormInput";
import AutocompleteOutput from "components/Pages/Share/AutocompleteTag/AutocompleteOutput";
import AutocompleteResults from "components/Pages/Share/AutocompleteTag/AutocompleteResults";

// hooks
import { useShare } from "components/Pages/Share/hooks/useShare";

//services
import { search as searchTag } from "services/tags";

// styles
import style from "./autocomplete.module.css";

//types
import type {
  ItemCallback,
  AutocompleteItem,
} from "components/Pages/Share/AutocompleteTag/types";

const handler = (
  query: string,
  done: (results: AutocompleteItem[]) => void
) => {
  searchTag(query).then((response) => {
    const tags = response?.data;

    if (!tags) {
      done([]);
      return;
    }
    const tagFormat: AutocompleteItem[] = tags.map(({ id, name }) => ({
      id: id.toString(),
      name,
    }));
    done(tagFormat);
  });
};

const debouncedSearched = debounce(500, handler);

export default function Autocomplete() {
  const [inputValue, setInputValue] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const { formState, setTags } = useShare();
  const [results, setResults] = useState<AutocompleteItem[]>([]);

  const { tags: tagsSelected } = formState;

  useEffect(() => {
    try {
      setSearchLoading(true);
      debouncedSearched(inputValue, (tagsResults) => {
        let tagsFormatted = tagsResults;
        if (tagsSelected.length > 0) {
          /* Checking if the tag is already selected and if it is, it is adding a property to the tag
          called isSelected and setting it to true. */
          tagsFormatted = tagsResults.map((tag) => {
            const match = tagsSelected.find(({ id }) => id === tag.id);
            if (match) {
              return { ...tag, isSelected: true };
            }
            return tag;
          });
        }
        setResults(tagsFormatted);
      });
    } catch (error) {
    } finally {
      setSearchLoading(false);
    }
  }, [inputValue, tagsSelected]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSelect: ItemCallback = (item) => {
    setInputValue("");
    setResults([]);
    if (tagsSelected.length === 0) {
      setTags([item]);
    }

    const match = tagsSelected.find(({ id }) => id === item.id);
    if (match) {
      const tagsUpdated = tagsSelected.filter(({ id }) => id !== item.id);
      setTags(tagsUpdated);
    } else {
      setTags([item, ...tagsSelected]);
    }
  };

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
        <AutocompleteResults
          selected={tagsSelected}
          results={results}
          onSelect={handleSelect}
          loading={searchLoading}
          querySearch={inputValue}
        />
      )}
      <AutocompleteOutput options={tagsSelected} onClick={handleSelect} />
    </aside>
  );
}
