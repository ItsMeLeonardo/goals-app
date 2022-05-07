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

      <ul className={styles.result_list}>
        <li className={styles.result_item}>
          <aside className={styles.result_body}>
            <h3 className={styles.result_title}>
              ¿Cómo iniciar con la programción web?
            </h3>
            <div className={styles.result_user}>
              <picture className={styles.result_user_photo}>
                <img src="https://images.unsplash.com/photo-1634824986790-db9044b0cd9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFwYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
              </picture>
              <h4 className={styles.result_username}>
                <a href="#">Lana Rose</a>
                <span className="text-muted">hace 2 dias</span>
              </h4>
            </div>
            <p className={styles.result_preview}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              perferendis illum optio commodi tenetur, quo hic numquam odio
              consequatur sunt temporibus sint voluptate consequuntur
              necessitatibus quasi. Repellat sint sequi rem.
            </p>
            <ul className="feed-tag-list">
              <li className="feed-tag">
                <span className="feed-tag-text">#html</span>
              </li>
              <li className="feed-tag">
                <span className="feed-tag-text">#css</span>
              </li>
            </ul>
          </aside>
          <picture className={styles.result_thumbnail}>
            <img src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjl8MzQ0MzU1Mnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
          </picture>
        </li>
      </ul>
    </>
  );
}
