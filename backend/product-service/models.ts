import { model, Schema, Model, Document } from 'mongoose';

interface Product extends Document {
  name: string;
  image: string;
  price: number;
  categories: Number[],
}

const ProductSchema = new Schema<Product>({
  name: String,
  image: String,
  price: Number,
  categories: [Number],
});


const ProductModel: Model<Product> = model("Product", ProductSchema);

export {
  ProductModel,
  Product
}