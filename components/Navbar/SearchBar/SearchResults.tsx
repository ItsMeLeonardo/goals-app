import style from "components/Navbar/SearchBar/searchResults.module.css";

import TagList from "components/Tag/TagList";
import type { Post } from "models/post";

export default function SearchResults({ results }: { results: Post[] }) {
  return (
    <ul className={style.results}>
      {results.map((result) => (
        <li key={result.id.toString()}>
          <a
            className={style.item}
            href={result.url}
            target="_blank"
            rel="noreferrer"
          >
            <picture className={style.thumbnail}>
              <img src={result.thumbnail} alt="result" />
            </picture>
            <div className={style.item_body}>
              <h3 className={style.item_title}>{result.title}</h3>
              <TagList tags={result.tags} />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
