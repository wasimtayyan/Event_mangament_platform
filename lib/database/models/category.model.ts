import { Document, Schema, model, models } from "mongoose";

export interface ICatgory extends Document {
  _id: string;
  name: string;
}

const CategorySchema = new Schema({
  name: { type: String, require: true, unique: true },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
