import { Schema, model, Model } from "mongoose";

export type Tag = {
  name: string;
};

const tagSchema = new Schema<Tag, Model<Tag>>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
});

const tagModel = model<Tag>("Tag", tagSchema);
export default tagModel;
