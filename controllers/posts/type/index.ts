import type { Post } from "models/post";

export type PostListResponse = {
  posts: Post[];
  total: number;
};
