import dbConnect from "lib/dbConnect";

import type { Post } from "models/post";
import type { Tag } from "models/tag";
import type { User } from "models/user";
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

export async function getAll(): Promise<[Post[] | null, string | null]> {
  try {
    await dbConnect();
    const posts = (await PostModel.find()
      .populate<{ tags: Tag[] }>("tags")
      .populate<{ user: User }>("user")) as Post[];

    return [posts, null];
  } catch (error) {
    return [null, "Something went wrong to get posts"];
  }
}
