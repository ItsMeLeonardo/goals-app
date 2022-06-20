import { Tag } from "models/tag";
export type PostDto = {
  url: string;
  title: string;
  user: string;
  tags: string[];
  // tags: Omit<Tag, "name">[];
  thumbnail: string;
};
