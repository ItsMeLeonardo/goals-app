import styles from "./post.module.css";
import Post from "components/Post";

export default function PostList() {
  return (
    <ul className={styles.result_list}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ul>
  );
}
