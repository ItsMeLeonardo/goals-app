import dbConnect from "lib/dbConnect";

import type { Post } from "models/post";
import type { PostDto } from "controllers/posts/dto";
import PostModel from "models/post";

export async function create(
  postBody: PostDto
): Promise<[Post | null, string | null]> {
  try {
    await dbConnect();

    const newPost = await PostModel.create(postBody);
    const post = await PostModel.findById(newPost._id)
      .populate("tags")
      .populate("user");
    // const post = await PostModel.create(postBody);
    return [post, null];
  } catch (error) {
    console.log({ error });
    const message = (error as Error)?.message || "Something went wrong";
    return [null, message];
  }
}
