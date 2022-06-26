import mongoose, { Schema, model, Model } from "mongoose";
import TagModel from "models/tag";
import UserModel from "models/user";

import type { Tag } from "models/tag";
import type { User } from "models/user";

export type Post = {
  url: string;
  title: string;
  user: User;
  tags: Tag[];
  id: string | Schema.Types.ObjectId;
  thumbnail: string;
  _id?: string | Schema.Types.ObjectId;
};

const postSchema = new Schema<Post, Model<Post>>(
  {
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
      ref: UserModel,
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: TagModel,
      },
    ],
    thumbnail: {
      type: String,
      required: [true, "Thumbnail is required"],
    },
  },
  { timestamps: true }
);

postSchema.set("toJSON", {
  transform(doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

const postModel = mongoose.models.Post || model<Post>("Post", postSchema);
// const postModel = model<Post>("Post", postSchema);

export default postModel;
