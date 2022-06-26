import { debounce } from "throttle-debounce";
import { ChangeEvent, useState } from "react";

import PostList from "components/Post/PostList";

import { search } from "services/post";

import { Post } from "models/post";

import styles from "./Explore.module.css";

const categories = [
  {
    name: "Programación",
    value: "programing",
  },
  {
    name: "Diseño",
    value: "design",
  },
  {
    name: "Música",
    value: "music",
  },
  {
    name: "Cine",
    value: "cine",
  },
];

export default function Explore() {
  const [postResult, setPostResult] = useState<Post[]>([]);
  const [query, setQuery] = useState<string | null>(null);

  const searchPost = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.trim().length < 2) return;
    search(value).then((posts) => {
      setPostResult(posts);
      setQuery(value);
    });
  };

  const debouncedSearchPost = debounce(500, searchPost);

  return (
    <>
      <h3>Explore here</h3>
      <form className={styles.form}>
        <input
          type="search"
          name=""
          id=""
          className={styles.search}
          placeholder="¿Qué quieres aprender hoy?"
          onChange={debouncedSearchPost}
        />
        <ul className={styles.category_list}>
          {categories.map(({ value, name }) => (
            <li key={value}>
              <input
                className={styles.category_input}
                type="checkbox"
                id={value}
                hidden
              />
              <label htmlFor={value} className={styles.category}>
                {name}
              </label>
            </li>
          ))}
        </ul>
      </form>

      {query && (
        <h4 className="subtitle-sm">
          Resultados para <span className="text-primary">{query}</span>
        </h4>
      )}

      <PostList posts={postResult} />
    </>
  );
}
