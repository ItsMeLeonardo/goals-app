import type { Post } from "models/post";
import { Schema, model, Model } from "mongoose";

export type User = {
  username: string;
  email: string;
  avatar: string;
  posts?: Post[];
  postsSaved?: Post[];
};

const userSchema = new Schema<User, Model<User>>({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  avatar: {
    type: String,
  },
  posts: [
    {
      post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    },
  ],
  postsSaved: [
    {
      post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    },
  ],
});

const userModel = model<User>("User", userSchema);

export default userModel;
