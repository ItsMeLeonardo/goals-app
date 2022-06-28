import style from "components/Navbar/SearchBar/searchResults.module.css";

import TagList from "components/Tag/TagList";
import type { Tag } from "models/tag";

const tags: Tag[] = [
  { id: "1", name: "tag1" },
  { id: "2", name: "tag2" },
  { id: "3", name: "tag3" },
];

export default function SearchResults() {
  return (
    <ul className={style.results}>
      {Array.from({ length: 10 }).map((_, i) => (
        <li key={i}>
          <a className={style.item} href="#">
            <picture className={style.thumbnail}>
              <img
                src="https://i.pinimg.com/236x/75/da/d6/75dad63ca718a4ae6b345f0ac8ab2c00.jpg"
                alt="result"
              />
            </picture>
            <div className={style.item_body}>
              <h3 className={style.item_title}>
                Resulat title Resulat titleResulat titleResulat titleResulat
                title
              </h3>
              <TagList tags={tags} />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
