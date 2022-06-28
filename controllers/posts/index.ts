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
      .sort("-createdAt")
      .limit(10)
      .populate<{ tags: Tag[] }>("tags")
      .populate<{ user: User }>("user")) as Post[];

    return [posts, null];
  } catch (error) {
    return [null, "Something went wrong to get posts"];
  }
}

const hydratePost = (posts: Post[]) => {
  /**
   * this is a solution until mongoose support deep hydration
   */
  return posts.map((post) => {
    const tags = post.tags.map((tag) => {
      return {
        name: tag.name,
        id: tag._id,
      };
    });
    const user = {
      ...post.user,
      id: post.user._id,
    };
    return {
      ...post,
      tags,
      user,
      id: post._id,
    };
  });
};

export async function find(title: string, tagName?: string) {
  try {
    await dbConnect();

    const posts = await PostModel.aggregate([
      {
        $lookup: {
          from: "tags",
          localField: "tags",
          foreignField: "_id",
          as: "tags",
        },
      },
      {
        $match: {
          $or: [
            {
              "tags.name": {
                $regex: tagName || title,
                $options: "i",
              },
            },
            {
              title: {
                $regex: title,
                $options: "i",
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: {
          path: "$user",
          preserveNullAndEmptyArrays: false,
        },
      },
    ]);
    const hydratedPosts = hydratePost(posts);
    return [hydratedPosts, null];
  } catch (error) {
    console.error({ error });
    return [null, "Something went wrong to get posts"];
  }
}
