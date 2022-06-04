import style from "./autocomplete.module.css";

import type { AutocompleteResultsProps } from "components/Pages/Share/Autocomplete/types";

export default function AutocompleteResults(props: AutocompleteResultsProps) {
  const { onSelect, results } = props;

  return (
    <ul className={style.list}>
      {results.map((item) => (
        <li className={style.item} key={item.id} onClick={() => onSelect(item)}>
          <span>{item.label}</span>
          <span
            className={`${style.icon_check} ${
              item.isSelected && style.icon_check_active
            }`}
          >
            <i className="uil uil-check"></i>
          </span>
        </li>
      ))}
      {results.length === 0 && (
        <li className={style.item}>
          <span>No hay resultados </span>
          <span className={style.icon_check}>
            <i className="uil uil-silent-squint"></i>
          </span>
        </li>
      )}
    </ul>
  );
}
