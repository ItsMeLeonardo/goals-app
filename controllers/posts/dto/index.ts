export type PostDto = {
  url: string;
  title: string;
  user: string;
  tags: { id: string }[];
  thumbnail: string;
};
