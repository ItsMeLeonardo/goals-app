import styles from "./Explore.module.css";

import PostList from "components/Post/PostList";

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

      <h4 className="subtitle-sm">
        Resultados para <span className="text-primary">Web</span>
      </h4>
      <PostList />
    </>
  );
}
