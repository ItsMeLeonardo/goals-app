import style from "./autocomplete.module.css";

import type { AutocompleteResultsProps } from "components/Pages/Share/AutocompleteTag/types";

export default function AutocompleteResults(props: AutocompleteResultsProps) {
  const { onSelect, results, loading, querySearch } = props;

  const addTag = () => {
    console.log({ querySearch });
  };

  return (
    <ul className={style.list}>
      {results.map((item) => (
        <li className={style.item} key={item.id} onClick={() => onSelect(item)}>
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
        <li>
          <button className={style.item} onClick={addTag} type="button">
            <p>
              Presiona
              <strong> Enter </strong>o has
              <strong> Click </strong>
              para agregar
              <span className="font-i">{` ${querySearch}`}</span>
            </p>
          </button>
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
