import { model, Schema, Model, Document } from 'mongoose';

interface Category extends Document {
  name: string;
  categoryId: number;
}

const CategorySchema = new Schema<Category>({
  name: String,
  categoryId: Number,
});


const CategoryModel: Model<Category> = model("Category", CategorySchema);

export {
  CategoryModel,
  Category
}