import mongoose, { Schema, model, Model } from "mongoose";

export type Tag = {
  id: string | Schema.Types.ObjectId;
  name: string;
};

const tagSchema = new Schema<Tag, Model<Tag>>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
});

tagSchema.set("toJSON", {
  transform(doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

const tagModel = mongoose.models.Tag || model<Tag>("Tag", tagSchema);
export default tagModel;
