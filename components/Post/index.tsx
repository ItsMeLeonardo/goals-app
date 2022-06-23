import styles from "./post.module.css";

import type { Post } from "models/post";

export default function Post(props: Post) {
  const { user, tags, title, thumbnail, url } = props;
  return (
    <li>
      <a
        href={url}
        className={styles.result_item}
        target="_blank"
        rel="noreferrer"
      >
        <aside className={styles.result_body}>
          <div className={styles.result_user}>
            <picture className={styles.result_user_photo}>
              <img src={user.avatar} alt={user.username} />
            </picture>
            <h4 className={styles.result_username}>
              <span>{user.username}</span>
              {/* <span className="text-muted">hace 2 dias</span> */}
            </h4>
          </div>
          <h3 className={styles.result_title}>{title}</h3>

          {/*         <p className={styles.result_preview}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          perferendis illum optio commodi tenetur, quo hic numquam odio
          consequatur sunt temporibus sint voluptate consequuntur necessitatibus
          quasi. Repellat sint sequi rem.
        </p> */}
          <ul className="feed-tag-list">
            {tags.map((tag) => (
              <li className="feed-tag" key={tag.id.toString()}>
                <span className="feed-tag-text">#{tag.name}</span>
              </li>
            ))}
          </ul>
        </aside>
        <picture className={styles.result_thumbnail}>
          <img src={thumbnail} alt={title} />
        </picture>
      </a>
    </li>
  );
}
