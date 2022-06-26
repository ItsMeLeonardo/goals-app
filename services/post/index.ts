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
}

export async function getAll({ fullUrl = false } = {}) {
  const domainUrl = process.env.DOMAIN || "";
  const url = fullUrl ? `${domainUrl}/api/posts` : "/api/posts";
  const { data } = await axios.get<Post[]>(url);
  return data;
}
