import styles from "./post.module.css";

import Post from "components/Post";

import type { Post as TypePost } from "models/post";

export default function PostList({ posts }: { posts: TypePost[] }) {
  return (
    <ul className={styles.result_list}>
      {posts.map((post) => (
        <Post {...post} key={post.id.toString()} />
      ))}
    </ul>
  );
}
