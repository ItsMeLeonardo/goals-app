import style from "./autocomplete.module.css";

import { create } from "services/tags";

import type {
  AutocompleteResultsProps,
  AutocompleteItem,
} from "components/Pages/Share/AutocompleteTag/types";

export default function AutocompleteResults(props: AutocompleteResultsProps) {
  const { onSelect, results, loading, querySearch } = props;

  const addTag = async () => {
    const newTag = await create(querySearch);
    if (!newTag || !newTag.data) return;
    const { name, id } = newTag.data;

    const tag: AutocompleteItem = {
      id: id.toString(),
      name,
      isSelected: true,
    };
    onSelect(tag);
  };

  return (
    <ul className={style.list}>
      {results.map((item) => (
        <li
          className={style.item}
          key={item.id}
          role="button"
          onClick={() => onSelect(item)}
        >
          <span>{item.name}</span>
          <span
            className={`${style.icon_check} ${
              item.isSelected && style.icon_check_active
            }`}
          >
            <i className="uil uil-check"></i>
          </span>
        </li>
      ))}

      {results.length === 0 && !loading && (
        <li className={style.item} onClick={addTag} role="button">
          <p>
            Presiona
            <strong> Enter </strong>o has
            <strong> Click </strong>
            para agregar
            <span className="font-i">{` ${querySearch}`}</span>
          </p>
        </li>
      )}

      {loading && (
        <li className={style.item}>
          <span>Cargando ...</span>
          <span className={style.icon_loading}>
            <i className="uil uil-spinner"></i>
          </span>
        </li>
      )}
    </ul>
  );
}
