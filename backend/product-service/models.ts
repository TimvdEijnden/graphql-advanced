import { model, Schema, Model, Document } from 'mongoose';

interface Product extends Document {
  name: string;
  image: string;
  price: number;
  categories: Number[];
  availability: number;
}

enum Availability {
  IN_STOCK,
  TEMPORARILY_UNAVAILABLE,
  OUT_OF_ASSORTMENT
}

const ProductSchema = new Schema<Product>({
  name: String,
  image: String,
  price: Number,
  categories: [Number],
  availability: Number
});


const ProductModel: Model<Product> = model("Product", ProductSchema);

export {
  ProductModel,
  Product,
  Availability
}