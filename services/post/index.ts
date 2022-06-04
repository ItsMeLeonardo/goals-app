import type { Post } from "models/post";

export async function create(postBody: Omit<Post, "id">) {
  const response = await fetch("/api/posts", {
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
  return [post, null];
}
