import type { Post } from "models/post";

export type User = {
  username: string;
  email: string;
  avatar: string;
  posts: Post[];
  postsSaved: Post[];
};
