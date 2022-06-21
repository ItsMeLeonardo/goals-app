import axios, { AxiosRequestConfig } from "axios";

import type { PostDto } from "controllers/posts/dto";
import type { Post } from "models/post";

export async function create(postBody: PostDto, image: File) {
  const postFormData = new FormData();

  postFormData.append("title", postBody.title);
  postFormData.append("url", postBody.url);
  postFormData.append("user", postBody.user.toString());
  postFormData.append("tags", JSON.stringify(postBody.tags));
  postFormData.append("file", image);

  const config: AxiosRequestConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const { data } = await axios.post<Post>("/api/posts", postFormData, config);
  return data;
  /*   const response = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postBody),
  });
  if (!response.ok) {
    const error = await response.text();
    return [null, error];
  }
  const post = await response.json();
  return [post, null]; */
}
