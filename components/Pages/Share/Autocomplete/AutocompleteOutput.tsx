import style from "./autocomplete.module.css";

import type { AutocompleteOutputProps } from "components/Pages/Share/Autocomplete/types";

export default function AutocompleteOutput(props: AutocompleteOutputProps) {
  const { options, onClick } = props;

  return (
    <ul className={style.output_list}>
      {options.map((item) => (
        <li
          className={style.output_item}
          key={item.id}
          onClick={() => onClick(item)}
        >
          <span>
            {item.label} <i className="uil uil-times-circle"></i>
          </span>
        </li>
      ))}
    </ul>
  );
}
