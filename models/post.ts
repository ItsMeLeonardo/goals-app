import { Schema, model, Model } from "mongoose";

import type { User } from "models/user";
import type { Tag } from "models/tag";

export type Post = {
  url: string;
  title: string;
  user: User;
  tags: Tag[];
};

const postSchema = new Schema<Post, Model<Post>>({
  url: {
    type: String,
    required: [true, "Url is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  tags: [
    {
      tag: {
        type: Schema.Types.ObjectId,
        ref: "Tag",
      },
    },
  ],
});

const postModel = model<Post>("Post", postSchema);
