import mongoose, { Schema, model, Model } from "mongoose";

import type { User } from "models/user";
import type { Tag } from "models/tag";

export type Post = {
  url: string;
  title: string;
  user: string | Schema.Types.ObjectId;
  tags: Tag[];
  id: string | Schema.Types.ObjectId;
  thumbnail: string;
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
  thumbnail: {
    type: String,
    required: [true, "Thumbnail is required"],
  },
});

postSchema.set("toJSON", {
  transform(doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

const postModel = mongoose.models.Post || model<Post>("Post", postSchema);

export default postModel;
