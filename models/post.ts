import type { User } from "models/user";
import type { Tag } from "models/tag";

export type Post = {
  url: string;
  title: string;
  user: User;
  tags: Tag[];
};
