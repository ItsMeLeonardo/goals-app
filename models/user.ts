import type { Post } from "models/post";
import mongoose, { Schema, model, Model } from "mongoose";

export type User = {
  id: string | Schema.Types.ObjectId;
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

userSchema.set("toJSON", {
  transform(doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

const userModel = mongoose.models.User || model<User>("User", userSchema);

export default userModel;
