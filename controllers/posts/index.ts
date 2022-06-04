import dbConnect from "lib/dbConnect";

import type { Post } from "models/post";
import PostModel from "models/post";

export async function create(
  postBody: Omit<Post, "id">
): Promise<[Post | null, string | null]> {
  try {
    await dbConnect();

    const post = await PostModel.create(postBody);

    return [post, null];
  } catch (error) {
    const message = (error as Error)?.message || "Something went wrong";
    return [null, message];
  }
}
